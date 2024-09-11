import dotenv from 'dotenv';
import { accountEnv } from './token.type';
import { persistentToken } from './persistent.token';
import { StaffincSuite } from './modules/staffinc-suite';
import { resolve } from 'app-root-path';
import { existsSync, readFileSync, writeFileSync } from 'fs';

dotenv.config();

export class Token {
    private tokenPath = resolve('/tokens.json');
    private staffincSuite = new StaffincSuite();

    async requestNewToken(
        platform: string,
        email: string,
        password: string,
        idRole: string
    ): Promise<{ [key: string]: string } | { errorCase: string; response: any }> {
        try {
            switch (platform) {
                case 'STAFFINC_SUITE':
                    return await this.staffincSuite.getToken(email, password, idRole);
                default:
                    console.log(`Platform not found: ${platform}. Skip generating token.`);
                    return;
            }
        } catch (err) {
            const errorResponse = {
                errorCase: `${platform} - ${idRole}: ${email}`,
                response: err.response ? err.response.data : err.message,
            };
            console.error(errorResponse);
            return errorResponse;
        }
    }

    getAccountData(): accountEnv {
        const accountData: accountEnv = {};

        for (const key in process.env) {
            const match = key.match(/(\w+)_(\w+)_(EMAIL|PASSWORD)/);
            if (match) {
                const [, platform, role, type] = match;
                if (!accountData[platform]) {
                    accountData[platform] = {};
                }
                if (!accountData[platform][role]) {
                    accountData[platform][role] = { email: '', password: '' };
                }
                accountData[platform][role][type.toLowerCase()] = process.env[key] || '';
            }
        }

        for (const platform in accountData) {
            for (const role in accountData[platform]) {
                const { email, password } = accountData[platform][role];
                if (!email || !password) {
                    throw new Error(`No account found for ${platform} - ${role}`);
                }
            }
        }

        return accountData;
    }

    async generateAllToken() {
        const accountData = this.getAccountData();
        const accountRequests: Array<Promise<{ [key: string]: string } | { errorCase: string; response: any }>> = [];

        for (const [platform, accounts] of Object.entries(accountData)) {
            for (const [role, credentials] of Object.entries(accounts)) {
                const { email, password } = credentials as { email: string; password: string };
                console.log(`Requesting token for ${platform} - ${role} with email: ${email} and password: ${password}`);
                accountRequests.push(
                    this.requestNewToken(platform, email, password, role)
                );
            }
        }

        const tokens = await Promise.all(accountRequests);
        const placeholder = Object.assign({}, ...tokens);

        const environment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT.toLowerCase() : 'default';
        const generateTime = new Date().toISOString();
        const fileContent = JSON.stringify(
            {
                __environment: environment,
                __generateTime: generateTime,
                ...persistentToken,
                ...placeholder,
            },
            null,
            4
        );
        writeFileSync(this.tokenPath, fileContent);
    }

    isTokenUsable() {
        const isTokenFileExists = existsSync(this.tokenPath);

        if (!isTokenFileExists) {
            console.log('Token file not found.');
            return false;
        }

        const tokenContent = this.getTokenContent();
        const tokenData = JSON.parse(tokenContent);
        const environment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT.toLowerCase() : 'default';
        const tokenGenerateTime = new Date(tokenData.__generateTime);
        const tokenExpiredTime = parseInt(process.env.TOKEN_EXPIRED_TIME) || 86400000;

        if (tokenData.__environment !== environment) {
            console.log('Token file environment mismatch.');
            return false;
        } else if (tokenGenerateTime.getTime() + tokenExpiredTime < Date.now()) {
            console.log('Token file is expired.');
            return false;
        }

        return true;
    }

    getTokenContent() {
        return readFileSync(this.tokenPath, 'utf-8');
    }

    get(tokenName: string) {
        const tokens = JSON.parse(this.getTokenContent());

        if (!tokens[tokenName]) throw new Error(`No token called ${tokenName}.`);

        return tokens[tokenName];
    }
}

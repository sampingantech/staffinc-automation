import axios, { isAxiosError } from 'axios';

export class StaffincSuite {
    private authService = axios.create({
        baseURL: process.env.BASE_URL_API,
    });

    async getToken(identifierUser: string, identifierPassword: string, roleName: string) {
        try {
            console.log('Sending login request with:', {
                email: identifierUser,
                password: identifierPassword
            });

            const emailLogin = await this.authService.post(
                '/v1/client/login',
                {
                    email: identifierUser,
                    password: identifierPassword
                }
            );

            const loginUUID = emailLogin.data.token;

            return { [`${roleName}`]: loginUUID };
        } catch (err) {
            if (isAxiosError(err)) {
                const result = {
                    errorCase: `Staffinc Suite - ${roleName}: ${identifierUser}`,
                    response: err.response ? err.response.data : err.message,
                };

                console.error(result);
                return { [roleName]: '' };
            }

            throw err;
        }
    }
}

import axios, { isAxiosError } from 'axios';

export class StaffincSuite {
    private authService = axios.create({
        baseURL: process.env.BASE_URL_API,
    });

    async getToken(identifierUser: string, identifierPassword: string | number, roleName: string, platform: string) {
        try {
            if (platform == "STAFFINC_SUITE") {
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
            } else if(platform == 'APPS') {
                console.log('Sending login request with:', {
                    phone: identifierUser,
                    otp: identifierPassword
                });
                const phoneLogin = await this.authService.post(
                    '/v1/login',
                    {
                        country_code: '+62',
                        phone_number: identifierUser,
                        otp: identifierPassword
                    }
                );
                const token = phoneLogin.data.token;

                return { [`${roleName}`]: token };
            }

        } catch (err) {
            if (isAxiosError(err)) {
                const result = {
                    errorCase: `${platform} - ${roleName}: ${identifierUser}`,
                    response: err.response ? err.response.data : err.message,
                };

                console.error(result);
                return { [roleName]: '' };
            }

            throw err;
        }
    }
}

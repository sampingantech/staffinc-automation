export type accountEnv = {
    [platform: string]: {
        [role: string]: {
            email: string;
            password: string;
            phone: string
        };
    };
};

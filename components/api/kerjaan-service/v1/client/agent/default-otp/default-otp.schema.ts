import { z } from 'zod'

export class DefaultOtpSchema {
    postDefaultOtp() {
        return z.array(
            z.object({
                id: z.number(),
                phone_number: z.string(),
                is_default_otp: z.boolean(),
            })
        );

    }
}
import { BaseComponent } from 'components/api/component.base'
import { DefaultOtpData } from './default-otp.data'
import { DefaultOtpSchema } from './default-otp.schema'

export class DefaultOtp extends BaseComponent {
    data: DefaultOtpData = new DefaultOtpData()
    schema: DefaultOtpSchema = new DefaultOtpSchema()

    constructor(token?: string) {
        super({
            baseURL:
                process.env.BASE_URL_API + '/v1/client/agents/default-otp',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    postCreateAgent(
        payload: IsPayload<DefaultOtpData['defaultOtpPayload']>
    ) {
        return this.request.put<
            IsSchema<DefaultOtpSchema['postDefaultOtp']>
        >('', payload)
    }
}

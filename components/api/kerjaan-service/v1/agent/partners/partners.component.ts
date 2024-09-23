import { BaseComponent } from 'components/api/component.base'
import { partnerSchema } from './partners.schema'
import { partnerData } from './partners.data'

export class Agent extends BaseComponent {
    data = new partnerData()
    schema = new partnerSchema()

    constructor() {
        super({
            baseURL: process.env.BASE_URL_API,
        })
    }

    createAgent(
        params?: IsParameter<
            partnerData['createPartner']
        >
    ) {
        return this.request.post<
            IsSchema<partnerSchema['postCreatePartner']>
        >('/v1/agent/partners', { params })
    }
}

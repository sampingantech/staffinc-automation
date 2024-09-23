import { BaseComponent } from 'components/api/component.base'
import { agentsData } from './agents.data'
import { agentSchema } from './agents.schema'

export class Agents extends BaseComponent {
    data: agentsData = new agentsData()
    schema: agentSchema = new agentSchema()

    constructor(token?: string) {
        super({
            baseURL:
                process.env.BASE_URL_API + '/v1/client/agents',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    postCreateAgent(
        payload: IsPayload<agentsData['createAgent']>
    ) {
        return this.request.post<
            IsSchema<agentSchema['postCreateAgent']>
        >('', payload)
    }
}

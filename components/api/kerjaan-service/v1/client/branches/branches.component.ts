import { BaseComponent } from 'components/api/component.base'
import { branchesSchema } from './branches.schema'
import { branchesData } from './branches.data'

export class Branches extends BaseComponent {
    data = new branchesData()
    schema = new branchesSchema()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/branches',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    createBranches(
        params: IsParameter<
            branchesData['createBranches']
        >
    ) {
        return this.request.post<
            IsSchema<branchesSchema['postCreateBranches']>
        >('',  params )
    }
}

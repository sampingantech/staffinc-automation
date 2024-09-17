import { BaseComponent } from 'components/api/component.base'
import { PayrollGroupsSchema } from './payroll-groups.schema'
import { PayrollGroupsData } from './payroll-groups.data'

export class PayrollGroups extends BaseComponent {
    data = new PayrollGroupsData()
    schema = new PayrollGroupsSchema()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/payroll-groups',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    createPayrollGroups(
        params: IsParameter<
            PayrollGroupsData['createPayrollGroup']
        >
    ) {
        return this.request.post<
            IsSchema<PayrollGroupsSchema['postCreatePayrollGroup']>
        >('',  params )
    }
}

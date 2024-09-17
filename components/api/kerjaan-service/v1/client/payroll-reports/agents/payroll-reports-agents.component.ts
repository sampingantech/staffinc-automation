import { BaseComponent } from 'components/api/component.base'
import { PayrollReportsAgentsSchema } from './payroll-reports-agents.schema'
import { PayrollReportsAgentsData } from './payroll-reports-agents.data'

export class PayrollReportsAgents extends BaseComponent {
    data = new PayrollReportsAgentsData()
    schema = new PayrollReportsAgentsSchema()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/payroll-reports/agents',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    createPayrollReportsAgents(
        params: IsParameter<
            PayrollReportsAgentsData['payrollreportsAgentsPayload']
        >
    ) {
        return this.request.post<
            IsSchema<PayrollReportsAgentsSchema['payrollReportAgents']>
        >('',  params )
    }
}

import { BaseComponent } from 'components/api/component.base'
import { PayrollReportsSchema} from './payroll-reports.schema'
import { PayrollReportsData } from './payroll-reports.data'

export class PayrollReports extends BaseComponent {
    data = new PayrollReportsData()
    schema = new PayrollReportsSchema()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/payroll-reports',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    createPayrollReports(
        params: IsParameter<
            PayrollReportsData['payrollReportsPayload']
        >
    ) {
        return this.request.post<
            IsSchema<PayrollReportsSchema['payrollReport']>
        >('',  params )
    }
}

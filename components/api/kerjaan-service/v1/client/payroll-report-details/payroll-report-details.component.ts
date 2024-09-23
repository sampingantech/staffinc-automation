import { BaseComponent } from 'components/api/component.base'
import {PayrollReportDetailsSchema} from "./payroll-report-details.schema";
import {PayrollReportDetailsData} from "./payroll-report-details.data";

export class PayrollReportDetailsComponent extends BaseComponent {
    schema = new PayrollReportDetailsSchema()
    data = new PayrollReportDetailsData()

    constructor(token?: string) {
        super({
            baseURL: process.env.BASE_URL_API + '/v1/client/payroll-report-details',
            headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
            },
        })
    }

    getReportDetails({
                         skip=0,
                         limit=20,
                         filter='',
                         sort='',
                         query='',payrollReportId
    }) {
        return this.request.get<
            IsSchema<PayrollReportDetailsSchema['getReports']>
        >(`/${payrollReportId}/reports?q=${query}&sort=${sort}&skip=${skip}&limit=${limit}&filter=${filter}`)
    }

    postApprovePayrollReport(params: IsParameter<
        PayrollReportDetailsData['postApprovePayroll']
    >,payrollReportId) {
        return this.request.post(`/${payrollReportId}/approve`, params)
    }
}

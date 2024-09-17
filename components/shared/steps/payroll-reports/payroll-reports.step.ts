
import { token } from 'core/utils'
import { expect, test } from 'core'
import {PayrollReports} from "../../../api/kerjaan-service/v1/client/payroll-reports/payroll-reports.component";
import {
    PayrollReportsAgents
} from "../../../api/kerjaan-service/v1/client/payroll-reports/agents/payroll-reports-agents.component";
import {
    PayrollReportDetailsComponent
} from "../../../api/kerjaan-service/v1/client/payroll-report-details/payroll-report-details.component";
import {AxiosResponse} from "axios";
import {
    getPayrollReportDetailType
} from "../../../api/kerjaan-service/v1/client/payroll-report-details/payroll-report-details.type";

const payrollReports = new PayrollReports(token.get('ADMIN'))
const payrollReportsAgents = new PayrollReportsAgents(token.get('ADMIN'))

export async function createPayrollReports(branchId = [1823], payrollGroupId = [1742]) {
    let payrollReportId;
    await test.step('Create new payroll report', async () => {
        const createPayrollReportAgents = payrollReportsAgents.data.payrollreportsAgentsPayload({branch_ids: branchId, payroll_group_ids: payrollGroupId})
        const createPayrollReportsAgentsResponse = await payrollReportsAgents.createPayrollReportsAgents(createPayrollReportAgents)
        // TODO: Check schema
        // expect(createPayrollReportsAgentsResponse).isCorrectResponse(200, payrollReportsAgents.schema.payrollReportAgents())

        const agentData = createPayrollReportsAgentsResponse.data.data
        // belum handle multiple branch/payrollgroup
        const createPayrollreports = payrollReports.data.payrollReportsPayload(agentData, branchId[0], payrollGroupId[0])
        const createPayrollReportsResponse = await payrollReports.createPayrollReports(createPayrollreports)
        expect(createPayrollReportsResponse).isCorrectResponse(200, payrollReports.schema.payrollReport())
        payrollReportId = createPayrollReportsResponse.data.report_id
    })
    return payrollReportId
}
const payrollReportDetails = new PayrollReportDetailsComponent(token.get('ADMIN'))
export async function getPayrollReportDetails(payrollReportId:string) {
    let payrollReportDetailsRes: AxiosResponse<getPayrollReportDetailType>;
    await test.step('Get Payroll Report Details', async () => {
        const reportDetails = await payrollReportDetails.getReportDetails({payrollReportId})
        expect(reportDetails).isCorrectResponse(200, payrollReportDetails.schema.getReports())
        payrollReportDetailsRes = reportDetails;
    })
    return payrollReportDetailsRes
}

export async function approvePayrollReport(payrollReportId:string, getPayrollReportDetails: AxiosResponse<getPayrollReportDetailType>) {
    await test.step('Approve Payroll Report', async () => {
        const payrollId = getPayrollReportDetails.data.data.map((item) => item.payroll_id)
        const approveData = payrollReportDetails.data.postApprovePayroll(payrollId)
        const approvePayrollRes = await payrollReportDetails.postApprovePayrollReport(approveData, payrollReportId)
    })
}
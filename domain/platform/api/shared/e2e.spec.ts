import {test} from 'core'
import {createBranch} from "components/shared/steps/branch/create.branch.step";
import {createEmployee} from "components/shared/steps/employess/create.employee.step";
import {createAttendances, getBranchAttendances, approveAttendances} from "components/shared/steps/attendances/attendances.step";
import {createPayrollGroups} from "components/shared/steps/payroll-groups/payroll-groups.step";
import {
    approvePayrollReport,
    createPayrollReports,
    getPayrollReportDetails
} from "components/shared/steps/payroll-reports/payroll-reports.step";
import {createDisbursement} from "components/shared/steps/disbursements/create.disbursement.step";
import {E2EStep} from "components/shared/steps/e2e.step";

test.skip('End to End', async () => {
    const branchId = await createBranch()
    const payrollGroupId = await createPayrollGroups(branchId)
    const phoneNumber = await createEmployee(branchId, payrollGroupId)
    await createAttendances({phoneNumber})
    const listAttendance = await getBranchAttendances(branchId)
    await approveAttendances(listAttendance)
    const payrollReportId = await createPayrollReports([branchId], [payrollGroupId])
    const getPayrollReportDetail = await getPayrollReportDetails(payrollReportId.report_id)
    await approvePayrollReport(payrollReportId.report_id, getPayrollReportDetail)
    const payrollReportDetailId = getPayrollReportDetail.data.data.map((item) => item.id)
    const disbursement = await createDisbursement([payrollReportId.id], payrollReportDetailId)
})

test('E2E Component', async () => {
    const e2e = await E2EStep({
        stopAt: "createBranch",
        dataDDTDescription: "apa"
    })
})
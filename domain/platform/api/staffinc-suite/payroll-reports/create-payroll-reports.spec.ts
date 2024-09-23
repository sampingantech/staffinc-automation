import {test} from 'core'
import {
    createPayrollReports,
    getPayrollReportDetails
} from "components/shared/steps/payroll-reports/payroll-reports.step";

test('Create Payroll Report', async () => {
    await createPayrollReports()
})

test('Get Payroll Report Detail', async () => {
    await getPayrollReportDetails('4142086SEP')
})
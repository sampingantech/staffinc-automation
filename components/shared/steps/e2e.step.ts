import {checkpoint} from "./e2e.type";
import {createBranch} from "./branch/create.branch.step";
import {createPayrollGroups} from "./payroll-groups/payroll-groups.step";
import {createEmployee} from "./employess/create.employee.step";
import {approveAttendances, createAttendances, getBranchAttendances} from "./attendances/attendances.step";
import {
    approvePayrollReport,
    createPayrollReports,
    getPayrollReportDetails
} from "./payroll-reports/payroll-reports.step";
import {createDisbursement} from "./disbursements/create.disbursement.step";
import {AxiosResponse} from "axios";
import {
    getPayrollReportDetailType
} from "../../api/kerjaan-service/v1/client/payroll-report-details/payroll-report-details.type";
import Spreadsheet from "core/utils/spreadsheet";
import {createBranchPayloadType} from "../../api/kerjaan-service/v1/client/branches/branches.type";
import {createPayrollGroupType} from "../../api/kerjaan-service/v1/client/payroll-groups/payroll-groups.type";

type options = {
    stopAt?: undefined | checkpoint
    dataDDTDescription?: string
}

/**
 *
 * @param stopAt stop before stepName
 * @example run e2e stop before create employee
 * E2EStep({stopAt: 'createEmployee'})
 */
export async function E2EStep({
    stopAt,
    dataDDTDescription,
}:options ) {
    const returnPayload: Record<string, any> = {}
    const spreadsheet = new Spreadsheet()
    const fileUrl = process.env.GSHEET_URL; // Ganti dengan URL file XLSX Anda
    const filename = 'ddtStaffinc.xlsx';
    await spreadsheet.downloadXlsx(fileUrl, filename);
    const sheetData = spreadsheet.getSpreadsheetData('.cache/ddtStaffinc.xlsx', 'E2E')

    let matchingData: Record<string, any>
    
    if (dataDDTDescription) {
        matchingData = sheetData.find(
            (data) => data[':Description'] === dataDDTDescription
        )
    } else {
        // Check if there is data that match (env)
        matchingData = sheetData.find(
            (data) =>
                data[':Environment'].toLowerCase() ===
                process.env.ENVIRONMENT?.toLowerCase()
        )
    }
    if (!matchingData)
        throw new Error(
            `No matching data found for this condition: ${process.env.ENVIRONMENT} or ${dataDDTDescription}`
        )

    console.log(
        `Matching data found on sheet, using "${matchingData[':Description']}"`
    )
    returnPayload['sheetMatchingData'] = matchingData
    console.log(returnPayload.sheetMatchingData)

    if (stopAt === 'createBranch') return returnPayload
    // TODO: should use filter to extract data from array
    const branchData = JSON.parse(sheetData[0].Branch) as createBranchPayloadType
    const branchId = await createBranch(branchData)

    if (stopAt === 'createPayrollGroup') return returnPayload
    const payrollGroupData = JSON.parse(sheetData[0].PayrollGroup) as createPayrollGroupType
    const payrollGroupId = await createPayrollGroups(branchId, undefined, payrollGroupData)
    returnPayload['payrollgroupId'] = payrollGroupId

    if (stopAt === 'createEmployee') return returnPayload
    const phoneNumber = await createEmployee(branchId, payrollGroupId)
    returnPayload['phoneNumber'] = phoneNumber

    if (stopAt === 'signAttendance') return returnPayload
    await createAttendances({phoneNumber})

    if (stopAt === 'approveAttendance') return returnPayload
    const listAttendance = await getBranchAttendances(branchId)
    await approveAttendances(listAttendance)

    if (stopAt === 'createPayrollReport') return returnPayload
    returnPayload['payrollReportId'] = await createPayrollReports([branchId], [payrollGroupId])

    if (stopAt === 'approvePayrollReport') return returnPayload
    const getPayrollReportDetail = await getPayrollReportDetails(returnPayload['payrollReportId'].report_id)
    await approvePayrollReport(returnPayload['payrollReportId'].report_id, getPayrollReportDetail)
    returnPayload['getPayrollReportDetail'] = getPayrollReportDetail

    if (stopAt === 'createDisbursement') return returnPayload
    const payrollReportDetail = returnPayload['getPayrollReportDetail'] as AxiosResponse<getPayrollReportDetailType>
    const payrollReportDetailId = payrollReportDetail.data.data.map((item) => item.id)
    returnPayload['disbursement'] = await createDisbursement([returnPayload['payrollReportId'].id], payrollReportDetailId)
}

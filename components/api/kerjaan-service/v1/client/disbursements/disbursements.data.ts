import {Randomizer} from "core/utils/randomizer";
const random = new Randomizer()

export class DisbursementsData {
    createDisbursement(payrollReportDetailId: number[], payrollReportId: number[]) {
        return {
            all_payroll_report_detail: false,
            batch_name: random.internet.userName(),
            bcc_email_address: "", //
            cc_email_address: "", //
            description: random.lorem.word(5),
            payroll_report_detail_ids: payrollReportDetailId,
            payroll_report_ids: payrollReportId,
            email_recipient: "todomep185@nastyx.com" //
        }
    }
}



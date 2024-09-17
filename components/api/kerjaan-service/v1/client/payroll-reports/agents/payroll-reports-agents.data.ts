export class PayrollReportsAgentsData {
    payrollreportsAgentsPayload({branch_ids = [1823], payroll_group_ids = [1742]}) {
        return {
            payment_cycle: "monthly",
            payment_date: "2024-09-20",
            branch_ids,
            payroll_group_ids,
            payroll_report_period: [
                "2024-08-21",
                "2024-09-20"
            ],
            limit: 0
        }
    }
}
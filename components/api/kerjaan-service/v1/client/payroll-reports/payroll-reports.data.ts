import {Randomizer} from "core/utils/randomizer";

const randomizer = new Randomizer()
export class PayrollReportsData {
    payrollReportsPayload(agent_data: object[], branchId, payrolGroupId) {
        return {
            period_year: "2024",
            period_month: "9",
            salary_type: "prorate",
            name: randomizer.internet.userName(),
            shifting_configuration_type: "without_shift",
            branch_ids: [
                {
                    label: "(1823) Tests",
                    value: branchId
                }
            ],
            payment_cycle: "monthly",
            payment_date: "2024-09-20",
            payroll_group_ids: [
                {
                    label: "Payroll Group Test (3)",
                    value: payrolGroupId
                }
            ],
            payroll_report_period: [
                "2024-08-21",
                "2024-09-20"
            ],
            agent_data,
            blacklisted_agent_ids: [],
            payroll_period: [
                "2024-08-21",
                "2024-09-20"
            ]
        }
    }
}
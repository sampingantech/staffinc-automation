import {Randomizer} from "core/utils/randomizer";

const randomizer = new Randomizer()
export class PayrollGroupsData {
    createPayrollGroup(
        branchId= 1823
                       ) {
        return {
            name: randomizer.lorem.sentence(10),
            type: "pkwt",
            payment_cycle: "monthly",
            salary: 15000000,
            payment_date: [
                20
            ],
            allowance_transport: 500000,
            allowance_phone: 0,
            allowance_meals: 0,
            allowance_position: 0,
            overtime: 150000,
            pph_status: true,
            disbursement_date: [
                25
            ],
            salary_calculation_type: "prorate",
            allowance_transport_calc_type: "prorate",
            allowance_phone_calc_type: "prorate",
            allowance_meals_calc_type: "prorate",
            allowance_position_calc_type: "prorate",
            is_custom_calculation: false,
            bpjs_insurance_client_value: 0.04,
            bpjs_insurance_agent_value: 0.01,
            bpu_jht_value: 0.037,
            bpu_jht_agent_value: 0.02,
            bpu_jht_baseline: null,
            bpu_jht_agent_baseline: null,
            bpu_jht_type: "%",
            bpu_jht_agent_type: "%",
            bpu_jp_value: 0.02,
            bpu_jp_agent_value: 0.01,
            bpjs_tk_membership: "pu",
            bpjs_tk_program: [
                "jht",
                "jkk",
                "jkm",
                "jp"
            ],
            is_bpjs_insurance_active: true,
            bpjs_insurance_agent_type: "%",
            bpjs_insurance_client_type: "%",
            taxable_components: [
                "transport",
                "overtime",
                "bpu_jkk",
                "bpu_jkm",
                "bpjs_insurance_client",
                "bpu_jp_agent"
            ],
            tax_type: "pph_21_ter",
            payroll_components: [],
            additional_salaries: [
                {
                    salary_type: "working_type",
                    working_type: "working_on_national_holiday",
                    shift_type_id: null,
                    calculation_type: "rate",
                    value: 1.5
                }
            ],
            payroll_branches: [
                {
                    branch_id: branchId
                }
            ],
            client_id: 2351, // ini jangan di hardcode , perlu tau client ID nya
            bpjs_insurance_baseline_value: 0,
            bpjs_insurance_baseline_type: "salary",
            bpjs_employment_baseline_value: 0,
            bpjs_employment_baseline_type: "salary",
            prorated_shift_type_ids: [],
            allowance_transport_eligible_attendance_statuses: [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_transport_shift_type_ids: [],
            allowance_phone_eligible_attendance_statuses: [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_phone_shift_type_ids: [],
            allowance_meals_eligible_attendance_statuses: [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_meals_shift_type_ids: [],
            allowance_position_eligible_attendance_statuses: [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_position_shift_type_ids: [],
            bpu_jkk_paid_by: "client",
            bpu_jkm_paid_by: "client",
            bpu_jkk_value: 0.0024,
            bpu_jkm_value: 0.003,
            bpu_jkk_type: "%",
            bpu_jkm_type: "%",
            bpu_jp_type: "%",
            bpu_jp_agent_type: "%"
        }
    }
}
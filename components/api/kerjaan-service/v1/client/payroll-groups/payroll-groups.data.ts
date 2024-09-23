import {Randomizer} from "core/utils/randomizer";
import {createPayrollGroupType} from "./payroll-groups.type";

const randomizer = new Randomizer()
export class PayrollGroupsData {
    createPayrollGroup(branchId=1823, clientId=2351, data?: createPayrollGroupType) {
        return {
            name: data.name ? data.name : randomizer.lorem.sentence(10),
            type: data.type ? data.type : "pkwt",
            payment_cycle: data.payment_cycle ? data.payment_cycle : "monthly",
            salary: data.salary ? data.salary : 15000000,
            payment_date: data.payment_date ? data.payment_date : [
                20
            ],
            allowance_transport: data.allowance_transport ? data.allowance_transport : 500000,
            allowance_phone: data.allowance_phone ? data.allowance_phone : 0,
            allowance_meals: data.allowance_meals ? data.allowance_meals : 0,
            allowance_position: data.allowance_position ? data.allowance_position : 0,
            overtime: data.overtime ? data.overtime : 150000,
            pph_status: data.pph_status ? data.pph_status : true,
            disbursement_date: data.disbursement_date ? data.disbursement_date : [
                25
            ],
            salary_calculation_type: data.salary_calculation_type ? data.salary_calculation_type : "prorate",
            allowance_transport_calc_type: data.allowance_transport_calc_type ? data.allowance_transport_calc_type : "prorate",
            allowance_phone_calc_type: data.allowance_phone_calc_type ? data.allowance_phone_calc_type : "prorate",
            allowance_meals_calc_type: data.allowance_meals_calc_type ? data.allowance_meals_calc_type : "prorate",
            allowance_position_calc_type: data.allowance_position_calc_type ? data.allowance_position_calc_type : "prorate",
            is_custom_calculation: data.is_custom_calculation ? data.is_custom_calculation : false,
            bpjs_insurance_client_value: data.bpjs_insurance_client_value ? data.bpjs_insurance_client_value : 0.04,
            bpjs_insurance_agent_value: data.bpjs_insurance_agent_value ? data.bpjs_insurance_agent_value : 0.01,
            bpu_jht_value: data.bpu_jht_value ? data.bpu_jht_value : 0.037,
            bpu_jht_agent_value:  data.bpu_jht_agent_value ? data.bpu_jht_agent_value : 0.02,
            bpu_jht_baseline: data.bpu_jht_baseline ? data.bpu_jht_baseline : null,
            bpu_jht_agent_baseline: data.bpu_jht_agent_baseline ? data.bpu_jht_agent_baseline : null,
            bpu_jht_type: data.bpu_jht_type ? data.bpu_jht_type : "%",
            bpu_jht_agent_type: data.bpu_jht_agent_type ? data.bpu_jht_agent_type : "%",
            bpu_jp_value: data.bpu_jp_value ? data.bpu_jp_value : 0.02,
            bpu_jp_agent_value: data.bpu_jp_agent_value ? data.bpu_jp_agent_value : 0.01,
            bpjs_tk_membership: data.bpjs_tk_membership ? data.bpjs_tk_membership : "pu",
            bpjs_tk_program: data.bpjs_tk_program ? data.bpjs_tk_program : [
                "jht",
                "jkk",
                "jkm",
                "jp"
            ],
            is_bpjs_insurance_active: data.is_bpjs_insurance_active ? data.is_bpjs_insurance_active : true,
            bpjs_insurance_agent_type: data.bpjs_insurance_agent_type ? data.bpjs_insurance_agent_type : "%",
            bpjs_insurance_client_type: data.bpjs_insurance_client_type ? data.bpjs_insurance_client_type : "%",
            taxable_components: data.taxable_components ? data.taxable_components : [
                "transport",
                "overtime",
                "bpu_jkk",
                "bpu_jkm",
                "bpjs_insurance_client",
                "bpu_jp_agent"
            ],
            tax_type: data.tax_type ? data.tax_type : "pph_21_ter",
            payroll_components: data.payroll_components ? data.payroll_components : [],
            additional_salaries: data.additional_salaries ? data.additional_salaries : [
                {
                    salary_type: "working_type",
                    working_type: "working_on_national_holiday",
                    shift_type_id: null,
                    calculation_type: "rate",
                    value: 1.5
                }
            ],
            payroll_branches: data.payroll_branches ? data.payroll_branches : [
                {
                    branch_id: branchId
                }
            ],
            client_id: data.client_id ? data.client_id : clientId,
            bpjs_insurance_baseline_value: data.bpjs_insurance_baseline_value ? data.bpjs_insurance_baseline_value : 0,
            bpjs_insurance_baseline_type: data.bpjs_insurance_baseline_type ? data.bpjs_insurance_baseline_type : "salary",
            bpjs_employment_baseline_value: data.bpjs_employment_baseline_value ? data.bpjs_employment_baseline_value : 0,
            bpjs_employment_baseline_type: data.bpjs_employment_baseline_type ? data.bpjs_employment_baseline_type : "salary",
            prorated_shift_type_ids: data.prorated_shift_type_ids ? data.prorated_shift_type_ids : [],
            allowance_transport_eligible_attendance_statuses: data.allowance_transport_eligible_attendance_statuses ? data.allowance_transport_eligible_attendance_statuses : [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_transport_shift_type_ids: data.allowance_transport_shift_type_ids ? data.allowance_transport_shift_type_ids : [],
            allowance_phone_eligible_attendance_statuses: data.allowance_phone_eligible_attendance_statuses ? data.allowance_phone_eligible_attendance_statuses : [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_phone_shift_type_ids: data.allowance_phone_shift_type_ids ? data.allowance_phone_shift_type_ids : [],
            allowance_meals_eligible_attendance_statuses: data.allowance_meals_eligible_attendance_statuses ? data.allowance_meals_eligible_attendance_statuses : [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_meals_shift_type_ids: data.allowance_meals_shift_type_ids ? data.allowance_meals_shift_type_ids : [],
            allowance_position_eligible_attendance_statuses: data.allowance_position_eligible_attendance_statuses ? data.allowance_position_eligible_attendance_statuses : [
                "approved",
                "overtime",
                "paid_leave",
                "paid_sick_leave",
                "paid_half_day_leave",
                "paid_half_day_sick_leave",
                "unpaid_half_day_leave",
                "unpaid_half_day_sick_leave"
            ],
            allowance_position_shift_type_ids: data.allowance_position_shift_type_ids ? data.allowance_position_shift_type_ids : [],
            bpu_jkk_paid_by: data.bpu_jkk_paid_by ? data.bpu_jkk_paid_by : "client",
            bpu_jkm_paid_by: data.bpu_jkm_paid_by ? data.bpu_jkm_paid_by : "client",
            bpu_jkk_value: data.bpu_jkk_value ? data.bpu_jkk_value : 0.0024,
            bpu_jkm_value: data.bpu_jkm_value ? data.bpu_jkm_value : 0.003,
            bpu_jkk_type: data.bpu_jkk_type ? data.bpu_jkk_type : "%",
            bpu_jkm_type: data.bpu_jkm_type ? data.bpu_jkm_type : "%",
            bpu_jp_type: data.bpu_jp_agent_type ? data.bpu_jp_agent_type : "%",
            bpu_jp_agent_type: data.bpu_jp_agent_type ? data.bpu_jp_agent_type : "%"
        }
    }
}
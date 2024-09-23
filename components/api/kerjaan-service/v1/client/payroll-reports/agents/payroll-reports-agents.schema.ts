import {z} from 'zod'
export class PayrollReportsAgentsSchema {
    payrollReportAgents() {
        return z.object({
            data: z.array(
                z.object({
                    additional_attendances: z.array(z.unknown()),
                    additional_salaries: z.array(
                        z.object({
                            calculation_type: z.string(),
                            created_at: z.string(),
                            deleted_at: z.null(),
                            id: z.number(),
                            payroll_group_id: z.number(),
                            salary_type: z.string(),
                            shift_type_id: z.null(),
                            updated_at: z.null(),
                            value: z.number(),
                            working_type: z.string(),
                        })
                    ),
                    attendance_recap: z.object({
                        current: z.object({
                            actual_days_work: z.number(),
                            overtime_minutes: z.number(),
                            total_days_work: z.number(),
                            total_unpaid_day: z.number(),
                        }),
                        modified: z.null(),
                        notes: z.null(),
                    }),
                    branch: z.object({
                        attendance_approval_type: z.string(),
                        attendance_source: z.string(),
                        attendance_type: z.string(),
                        benefit_type: z.null(),
                        branch_location: z.string(),
                        check_in_code: z.null(),
                        check_in_code_qr_url: z.null(),
                        check_out_code: z.null(),
                        check_out_code_qr_url: z.null(),
                        city_id: z.number(),
                        client_id: z.number(),
                        created_at: z.string(),
                        deleted_at: z.null(),
                        district_id: z.number(),
                        effective_working_days: z.array(z.number()),
                        enable_geofence: z.boolean(),
                        end_time_utc: z.string(),
                        id: z.number(),
                        location_detail: z.string(),
                        name: z.string(),
                        position: z.array(z.number()),
                        province_id: z.number(),
                        radius: z.number(),
                        require_checkout: z.boolean(),
                        selfie_instruction: z.string(),
                        shifting_configuration_type: z.string(),
                        start_time_utc: z.string(),
                        status: z.string(),
                        updated_at: z.string(),
                    }),
                    branch_id: z.number(),
                    branch_name: z.string(),
                    id: z.number(),
                    join_date: z.string(),
                    name: z.string(),
                    payment_date: z.array(z.string()),
                    payroll_group_id: z.number(),
                    payroll_group_name: z.string(),
                    payroll_period: z.array(z.string()),
                    resignation_date: z.null(),
                    salary_calculation_type: z.string(),
                    status: z.string(),
                })
            ),
            limit: z.number(),
            offset: z.number(),
            total: z.number(),
        });
    }
}
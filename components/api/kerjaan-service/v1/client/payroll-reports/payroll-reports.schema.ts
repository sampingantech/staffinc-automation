import {z} from 'zod'
export class PayrollReportsSchema {
    payrollReport() {
        return z.object({
            allow_edit: z.boolean(),
            blacklisted_agent_ids: z.array(z.unknown()),
            branch_ids: z.array(z.number()),
            client_id: z.number(),
            count_approved: z.number(),
            count_paid: z.number(),
            count_payroll_report_detail: z.number(),
            created_at: z.string(),
            created_by: z.number(),
            created_email: z.null(),
            id: z.number(),
            is_deleted: z.boolean(),
            name: z.string(),
            payment_cycle: z.string(),
            payment_date: z.string(),
            payroll_period: z.array(z.string()),
            period: z.string(),
            report_id: z.string(),
            send_payslip: z.boolean(),
            type: z.string(),
            updated_at: z.null(),
            updated_by: z.null(),
            updated_email: z.null(),
            working_attendance_actual: z.number(),
            working_attendance_agent: z.number(),
            working_attendance_history: z.object({ data: z.array(z.unknown()) }),
            working_attendance_net: z.number(),
        });
    }
}
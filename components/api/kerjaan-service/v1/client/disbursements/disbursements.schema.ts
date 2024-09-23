import { z } from 'zod'

export class DisbursementsSchema {
     postCreateDisbursement() {
        return z.object({
            batch_name: z.string(),
            description: z.string(),
            status: z.string(),
            external_approval_status: z.null(),
            external_status: z.null(),
            channel_type: z.string(),
            approved_at: z.null(),
            external_approved_by: z.null(),
            external_batch_id: z.null(),
            total_uploaded_amount: z.number(),
            total_uploaded_count: z.number(),
            total_disbursed_amount: z.number(),
            total_disbursed_count: z.number(),
            total_failed_amount: z.number(),
            total_failed_count: z.number(),
            total_in_progress_amount: z.number(),
            cc_email_address: z.string(),
            bcc_email_address: z.string(),
            created_by: z.string(),
            branch_ids: z.array(z.number()),
            payroll_report_ids: z.array(z.number()),
            id: z.number(),
            created_at: z.string(),
            modified_at: z.null(),
        });
     }
}
import { z } from 'zod'

export class BranchAttendancesSchema {
    getBranchAttendances() {
        return z.object({
            total: z.number(),
            limit: z.number(),
            offset: z.number(),
            data: z.array(
                z.object({
                    attendance_change: z.null(),
                    checkin_config: z.null(),
                    checkout_config: z.null(),
                    branch_id: z.number(),
                    agent_id: z.number(),
                    branch_shift_id: z.null(),
                    checkin_at: z.string(),
                    checkout_at: z.null(),
                    checkin_position: z.array(z.number()),
                    checkout_position: z.null(),
                    status: z.null(),
                    notes: z.null(),
                    approved_by: z.null(),
                    approved_by_email: z.null(),
                    approved_at: z.null(),
                    checkin_selfie_url: z.string(),
                    checkout_selfie_url: z.null(),
                    created_at: z.string(),
                    deleted_at: z.null(),
                    checkin_config_id: z.null(),
                    checkout_config_id: z.null(),
                    attendance_created_by: z.string(),
                    change_type: z.null(),
                    checkin_selfie_attempt: z.number(),
                    checkin_selfie_processing_id: z.null(),
                    checkout_selfie_attempt: z.number(),
                    checkout_selfie_processing_id: z.null(),
                    working_type: z.string(),
                    swapped_agent_id: z.null(),
                    swapped_agent_name: z.null(),
                    checkin_source: z.string(),
                    checkout_source: z.null(),
                    id: z.number(),
                    updated_at: z.string(),
                    require_checkout: z.boolean(),
                    attendance_status: z.string(),
                    validation_status: z.null(),
                    checkin_timezone: z.string(),
                    checkout_timezone: z.string(),
                    override_checkin_at: z.null(),
                    override_checkout_at: z.null(),
                    override_checkin_timezone: z.null(),
                    override_checkout_timezone: z.null(),
                    agent_name: z.string(),
                    branch_name: z.null(),
                    approver_email: z.null(),
                    period: z.null(),
                    attandance_recap_id: z.null(),
                    attendance_recap_status: z.null(),
                    agent_request_status: z.null(),
                    dispute_status: z.null(),
                    agent_selfie_processing: z.null(),
                    checkin_selfie_processing: z.null(),
                    checkout_selfie_processing: z.null(),
                    localized_checkin_timezone: z.string(),
                    localized_checkout_timezone: z.string(),
                    localized_override_checkin_timezone: z.null(),
                    localized_override_checkout_timezone: z.null(),
                })
            ),
        });
    }

    putApproveBranchAttendances() {
        return z.object({
            branch_id: z.number(),
            agent_id: z.number(),
            branch_shift_id: z.null(),
            checkin_at: z.string(),
            checkout_at: z.null(),
            checkin_position: z.array(z.number()),
            checkout_position: z.null(),
            status: z.string(),
            notes: z.null(),
            approved_by: z.number(),
            approved_by_email: z.string(),
            approved_at: z.string(),
            checkin_selfie_url: z.string(),
            checkout_selfie_url: z.null(),
            created_at: z.string(),
            deleted_at: z.null(),
            checkin_config_id: z.null(),
            checkout_config_id: z.null(),
            attendance_created_by: z.string(),
            change_type: z.null(),
            checkin_selfie_attempt: z.number(),
            checkin_selfie_processing_id: z.null(),
            checkout_selfie_attempt: z.number(),
            checkout_selfie_processing_id: z.null(),
            working_type: z.string(),
            swapped_agent_id: z.null(),
            swapped_agent_name: z.null(),
            checkin_source: z.string(),
            checkout_source: z.null(),
            id: z.number(),
            updated_at: z.string(),
            require_checkout: z.null(),
            attendance_status: z.null(),
            validation_status: z.null(),
            checkin_timezone: z.string(),
            checkout_timezone: z.string(),
            override_checkin_at: z.null(),
            override_checkout_at: z.null(),
            override_checkin_timezone: z.null(),
            override_checkout_timezone: z.null(),
            agent_name: z.string(),
        });
    }
}
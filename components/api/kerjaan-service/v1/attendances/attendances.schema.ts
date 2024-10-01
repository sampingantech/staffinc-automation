import { z } from 'zod'

export class AttendancesSchema {
    postAttendances() {
        return z.object({
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
            checkin_timezone: z.string(),
            checkout_timezone: z.string(),
            id: z.number(),
            updated_at: z.string(),
            require_checkout: z.boolean(),
            attendance_status: z.null(),
            validation_status: z.string(),
            override_checkin_at: z.null(),
            override_checkout_at: z.null(),
            override_checkin_timezone: z.null(),
            override_checkout_timezone: z.null(),
        });
    }
    createAttendancesPayload () {
        return z.object({
            branch_shift_id: z.null(),
            attendance_type: z.string(),
            location: z.array(z.number()),
            notes: z.null(),
            code: z.null(),
            selfie_url: z.string(),
            check_type: z.string(),
            force_submit: z.boolean(),
            action_timestamp: z.string(),
        });

    }
}

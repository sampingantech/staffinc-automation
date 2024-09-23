import { z } from 'zod'

export class branchesSchema {
    postCreateBranches() {
        return z.object({
            name: z.string(),
            status: z.string(),
            attendance_approval_type: z.string(),
            shifting_configuration_type: z.string(),
            branch_location: z.string(),
            position: z.array(z.number()),
            radius: z.number(),
            enable_geofence: z.boolean(),
            location_detail: z.string(),
            selfie_instruction: z.string(),
            attendance_type: z.string(),
            require_checkout: z.boolean(),
            check_in_code: z.null(),
            check_out_code: z.null(),
            check_in_code_qr_url: z.null(),
            check_out_code_qr_url: z.null(),
            effective_working_days: z.array(z.number()),
            benefit_type: z.null(),
            start_time_utc: z.string(),
            end_time_utc: z.string(),
            attendance_source: z.string(),
            province_id: z.number(),
            city_id: z.number(),
            district_id: z.number(),
            client_id: z.number(),
            id: z.number(),
            created_at: z.string(),
            updated_at: z.null(),
            deleted_at: z.null(),
        });

    }
    createBranchPayload() {
        return z.object({
            name: z.string().optional(),
            attendance_approval_type: z.string(),
            shifting_configuration_type: z.string(),
            branch_location: z.string(),
            position: z.array(z.number()),
            radius: z.number(),
            enable_geofence: z.boolean(),
            location_detail: z.string(),
            selfie_instruction: z.string(),
            attendance_type: z.string(),
            require_checkout: z.boolean(),
            effective_working_days: z.array(z.number()),
            start_time_utc: z.string(),
            end_time_utc: z.string(),
            attendance_source: z.string(),
            province_id: z.number(),
            city_id: z.number(),
            district_id: z.number(),
            client_id: z.number()
        })
    }
}
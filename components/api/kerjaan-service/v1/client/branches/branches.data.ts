import {Randomizer} from "core/utils/randomizer";
import {createBranchPayloadType} from "./branches.type";
const random = new Randomizer()
export class branchesData {
    createBranches(data?: createBranchPayloadType) {
        return {
            name: data.name ? data.name : random.location.city(),
            attendance_approval_type: data.attendance_approval_type ? data.attendance_approval_type : "manual",
            shifting_configuration_type: data.shifting_configuration_type ? data.shifting_configuration_type : "without_shift",
            branch_location: data.branch_location ? data.branch_location : "Bekasi Timur, Bekasi, West Java, Indonesia",
            position: data.position ? data.position : [
                107.013564,
                -6.2491162
            ],
            radius: data.radius ? data.radius : 5,
            enable_geofence: data.enable_geofence ? data.enable_geofence : true,
            location_detail: data.location_detail ? data.location_detail : "RSU Bella",
            selfie_instruction: data.selfie_instruction ? data.selfie_instruction : "",
            attendance_type: data.attendance_type ? data.attendance_type : "agent_selfie_validation",
            require_checkout: data.require_checkout ? data.require_checkout : false,
            effective_working_days: data.effective_working_days ? data.effective_working_days : [
                1,
                2,
                3,
                4,
                5
            ],
            start_time_utc: data.start_time_utc ? data.start_time_utc : "01:00:55",
            end_time_utc: data.end_time_utc ? data.end_time_utc : "10:00:55",
            attendance_source: data.attendance_source ? data.attendance_source : "staffinc_work",
            province_id: data.province_id ? data.province_id : 12,
            city_id: data.city_id ? data.city_id : 720,
            district_id: data.district_id ? data.district_id : 2594,
            client_id: data.client_id ? data.client_id : 414
        }
    }
}



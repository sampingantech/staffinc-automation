import {Randomizer} from "core/utils/randomizer";
const random = new Randomizer()
export class branchesData {
    createBranches() {
        return {
            name: random.location.city(),
            attendance_approval_type: "manual",
            shifting_configuration_type: "without_shift",
            branch_location: "Bekasi Timur, Bekasi, West Java, Indonesia",
            position: [
                107.013564,
                -6.2491162
            ],
            radius: 5, //
            enable_geofence: true,
            location_detail: "RSU Bella",
            selfie_instruction: "", //
            attendance_type: "agent_selfie_validation",
            require_checkout: false,
            effective_working_days: [
                1,
                2,
                3,
                4,
                5
            ],
            start_time_utc: "01:00:55", //
            end_time_utc: "10:00:55", //
            attendance_source: "staffinc_work",
            province_id: 12,
            city_id: 720,
            district_id: 2594,
            client_id: 414
        }
    }
}



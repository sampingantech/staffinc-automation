import {utils} from "core/utils";
import {Randomizer} from "core/utils/randomizer";
import moment from 'moment-timezone';

const randomizer = new Randomizer()
export class AttendancesData {
    createAttendances() {
        const timestamp = moment().tz('Asia/Jakarta');
        return {
            branch_shift_id: null,
            attendance_type: "agent_selfie_validation",
            location: [
                -6.2491162,
                107.013564
            ],
            notes: null,
            code: null,
            selfie_url: "https://file.dev.kerjaan.co.id/v1/sessions/files/3bfebef8-8178-43fd-9451-ae366767afce.jpg",
            check_type: "check_in",
            force_submit: false,
            action_timestamp: timestamp.format('YYYY-MM-DDTHH:mm:ss.SSSSSSZ')
        }
    }
}

import {utils} from "core/utils";
import {Randomizer} from "core/utils/randomizer";
import moment from 'moment-timezone';
import {createAttendancesPayloadType} from "./attendances.type";

const randomizer = new Randomizer()
export class AttendancesData {
    createAttendances(data?: createAttendancesPayloadType) {
        const timestamp = moment().tz('Asia/Jakarta');
        return {
            branch_shift_id: data?.branch_shift_id !== undefined ? data.branch_shift_id : null,
            attendance_type: data?.attendance_type ? data.attendance_type : "agent_selfie_validation",
            location: data?.location ? data.location : [
                -6.2491162,
                107.013564
            ],
            notes: data?.notes !== undefined ? data.notes : null,
            code: data?.code !== undefined ? data.code : null,
            selfie_url: data?.selfie_url ? data.selfie_url : "https://file.dev.kerjaan.co.id/v1/sessions/files/3bfebef8-8178-43fd-9451-ae366767afce.jpg",
            check_type: data?.check_type ? data.check_type : "check_in",
            force_submit: data?.force_submit !== undefined ? data.force_submit : false,
            action_timestamp: timestamp.format('YYYY-MM-DDTHH:mm:ss.SSSSSSZ')
        };
    }
}

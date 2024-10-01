import {AttendancesSchema} from "./attendances.schema";
import {z} from "zod";

const schema = new AttendancesSchema()
const createAttendancesPayload = schema.createAttendancesPayload()
export type createAttendancesPayloadType = z.infer<typeof createAttendancesPayload>
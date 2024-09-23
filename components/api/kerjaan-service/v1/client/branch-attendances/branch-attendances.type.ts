import {BranchAttendancesSchema} from "./branch-attendances.schema";
import {z} from "zod";

const schema = new BranchAttendancesSchema()
const branchAttendancesSchema = schema.getBranchAttendances();
export type getBranchAttendancesType = z.infer<typeof branchAttendancesSchema>
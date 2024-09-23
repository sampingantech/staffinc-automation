import {PayrollGroupsSchema} from "./payroll-groups.schema";
import {z} from "zod";

const schema = new PayrollGroupsSchema()
const createPayrollGroup = schema.createPayrollGroupPayload()
export type createPayrollGroupType = z.infer<typeof createPayrollGroup>
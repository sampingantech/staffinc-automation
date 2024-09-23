import {branchesSchema} from "./branches.schema";
import {z} from "zod";

const schema = new branchesSchema()
const createBranchPayload = schema.createBranchPayload()
export type createBranchPayloadType = z.infer<typeof createBranchPayload>
import {agentSchema} from "./agents.schema";
import {z} from "zod";

const schema = new agentSchema()
const createBranchPayload = schema.createAgent()
export type createAgentPayloadType = z.infer<typeof createBranchPayload>
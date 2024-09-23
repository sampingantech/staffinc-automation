import {PayrollReportDetailsSchema} from "./payroll-report-details.schema";
import {z} from "zod";

const schema = new PayrollReportDetailsSchema()
const getPayrollReportDetailsSchema = schema.getReports()
export type getPayrollReportDetailType = z.infer<typeof getPayrollReportDetailsSchema>
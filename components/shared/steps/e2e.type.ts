export const stepList = [
    'createBranch',
    'createPayrollGroup',
    'createEmployee',
    'signAttendance',
    'approveAttendance',
    'createPayrollReport',
    'approvePayrollReport',
    'createDisbursement',
    'approveDisbursement'
] as const
export type checkpoint = | (typeof stepList)[number]
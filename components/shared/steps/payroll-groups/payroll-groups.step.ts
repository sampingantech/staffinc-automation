import {PayrollGroups} from "../../../api/kerjaan-service/v1/client/payroll-groups/payroll-groups.component";
import { token } from 'core/utils'
import { expect, test } from 'core'

const payrollGroups = new PayrollGroups(token.get('ADMIN'))

export async function createPayrollGroups(branchId=1846, clientId=2351) {
    let payrollGroupId: number
    await test.step('Create new payroll group', async () => {
        const createPayrollGroupsPayload = payrollGroups.data.createPayrollGroup(branchId, clientId)
        const createPayrollGroupResponse = await payrollGroups.createPayrollGroups(createPayrollGroupsPayload)
        expect(createPayrollGroupResponse).isCorrectResponse(200, payrollGroups.schema.postCreatePayrollGroup())
        payrollGroupId = createPayrollGroupResponse.data.id
    })
    return payrollGroupId
}
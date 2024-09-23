import {test} from 'core'
import {createPayrollGroups} from "components/shared/steps/payroll-groups/payroll-groups.step";

test('Craete payroll group', async () => {
    await createPayrollGroups()
})
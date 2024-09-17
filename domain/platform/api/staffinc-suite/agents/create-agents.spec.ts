import {test} from 'core'
import {createEmployee} from "components/shared/steps/employess/create.employee.step";

test('Create Employee', async () => {
    await createEmployee()
})
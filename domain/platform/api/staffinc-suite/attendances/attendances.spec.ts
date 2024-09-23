import {test} from 'core'
import {
    approveAttendances,
    createAttendances,
    getBranchAttendances
} from "components/shared/steps/attendances/attendances.step";

test('Create Attendances', async () => {
    await createAttendances({user: "MEMBER", tokenExist: true})
})

test('Get list attendances from branch that need approval', async () => {
    await getBranchAttendances(1823)
})

test('Approve attendances based on list of branch attendances', async () => {
    const data = await getBranchAttendances(1823)
    await approveAttendances(data)
})
import {Branches} from "../../../api/kerjaan-service/v1/client/branches/branches.component";
import { token } from 'core/utils'
import { expect, test } from 'core'

const branches = new Branches(token.get('ADMIN'))

export async function createBranch() {
    let branchId: number;
    await test.step('Create new branch', async () => {
        const createBranchPayload = branches.data.createBranches()
        const createBranchResponse = await branches.createBranches(createBranchPayload)
        expect(createBranchResponse).isCorrectResponse(200, branches.schema.postCreateBranches())
        branchId = createBranchResponse.data.id
    })
    return branchId
}


import {DisbursementsComponent} from "../../../api/kerjaan-service/v1/client/disbursements/disbursements.component";
import { token } from 'core/utils'
import { expect, test } from 'core'

const disbursement = new DisbursementsComponent(token.get('ADMIN'))

export async function createDisbursement(payrollReportId: number[], payrollReportDetailId: number[]) {
    let disbursementId: number
    await test.step('Create Disbursement', async () => {
        const data = disbursement.data.createDisbursement(payrollReportDetailId, payrollReportId)
        const res = await disbursement.postCreate(data)
        expect(res).isCorrectResponse(200, disbursement.schema.postCreateDisbursement())
        disbursementId = res.data.id
    })
    return disbursementId
}
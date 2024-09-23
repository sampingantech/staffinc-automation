import {Agents} from "../../../api/kerjaan-service/v1/client/agent/agents.component";
import { token } from 'core/utils'
import { expect, test } from 'core'
import {DefaultOtp} from "../../../api/kerjaan-service/v1/client/agent/default-otp/default-otp.component";

const createAgent = new Agents(token.get('ADMIN'))

export async function createEmployee(branchId?: number, payrollGropId?: number) {
    let employeeId;
    await test.step('Create Employee', async () => {
        const agentsPayload = createAgent.data.createAgent(branchId, payrollGropId)
        const createAgentResponse =
            await createAgent.postCreateAgent(agentsPayload)
        expect(createAgentResponse).isCorrectResponse(
            200,
            createAgent.schema.postCreateAgent()
        )
        employeeId = createAgentResponse.data.id;
    })
    let phoneNumber
    await test.step('Change new employee otp to default otp', async () => {
        const defaultOtp = new DefaultOtp(token.get('ADMIN'));
        const defaultOtpPayload = defaultOtp.data.defaultOtpPayload(employeeId)
        const defaultOtpResponse = await defaultOtp.postCreateAgent(defaultOtpPayload)
        expect(defaultOtpResponse).isCorrectResponse(200, defaultOtp.schema.postDefaultOtp())
        phoneNumber = defaultOtpResponse.data[0].phone_number
        console.log(`Employee dengan id ${employeeId}, phone number ${phoneNumber} memiliki otp default 8000`)
    })
    return phoneNumber
}
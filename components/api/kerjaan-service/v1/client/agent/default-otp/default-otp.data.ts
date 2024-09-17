
export class DefaultOtpData {
    defaultOtpPayload(agentId) {
        return {
            is_default_otp: true,
            agent_ids: [
                agentId
            ]
        }
    }
}

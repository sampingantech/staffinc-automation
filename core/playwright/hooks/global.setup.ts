import { token } from 'core/utils'

async function globalSetup() {
    console.log(`Running test on ${process.env.ENVIRONMENT} environment...`)

    if (token.isTokenUsable()) {
        console.log('token.json file found, skipping generate new token')
    } else {
        console.log('Generating new one...')
        await token.generateAllToken()
    }

    process.env.testToken = token.getTokenContent()
}

export default globalSetup

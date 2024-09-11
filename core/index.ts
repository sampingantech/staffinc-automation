import { config } from 'dotenv'
import { resolve } from 'app-root-path'
import MOFIRunnerCommands from './utils/custom-runner'

export * from './playwright'
export * from './conf'

if (require.main === module) {
    config({ path: resolve('.env') })
    MOFIRunnerCommands()
}

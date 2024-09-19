// @ts-ignore
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { prismaModule } from './modules/prisma'
import getEnvFile from "../consul";

function MOFIRunnerCommands() {
    yargs(hideBin(process.argv))
        .command(
            'prisma <command>',
            'Update prisma schema and generate types.',
            (yargs) => {
                yargs.positional('command', {
                    choices: ['setup', 'generate'],
                })
            },
            (yargs) => {
                const command = yargs.command as string
                prismaModule.init(command)
            }
        )
        .command(
            'get-env <environment>',
            'Generate .env files from consul.',
            (yargs) => {
                yargs.positional('environment', {
                    type: 'string',
                    demandOption: true,
                    choices: ['development', 'staging'],
                })
            },
            async (yargs) => {
                const env = yargs.environment as string
                await getEnvFile(env)
            }
        )
        .demandCommand()
        .strict()
        .parse()
}

export default MOFIRunnerCommands

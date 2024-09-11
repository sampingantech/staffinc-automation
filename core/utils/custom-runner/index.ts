// @ts-ignore
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { prismaModule } from './modules/prisma'

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
        .demandCommand()
        .strict()
        .parse()
}

export default MOFIRunnerCommands

import { utils } from 'core/utils'
import { spawnSync } from 'child_process'
import { globSync } from 'glob'

export class PrismaModule {
    init(command?: 'setup' | 'generate' | ThisType<string>) {
        if (command === undefined)
            throw new Error('Should give prisma module command!')

        if (command === 'setup') this.fullSetup()
        if (command === 'generate') this.generate()
    }

    fullSetup() {
        const prismaSchemas = globSync(`prisma/*.prisma`, {
            root: utils.rootPath,
        })

        if (prismaSchemas.length === 0)
            throw new Error('No prisma schema found!')

        prismaSchemas.forEach((schema) => {
            let pullCommand = ['prisma', 'db', 'pull', '--schema', schema]
            if (schema.includes('mongodb-')) {
                pullCommand = [
                    'prisma',
                    'db',
                    'pull',
                    '--force',
                    '--schema',
                    schema,
                ]
            }
            const dbPull = spawnSync('npx', pullCommand, {
                stdio: 'inherit',
                cwd: utils.rootPath,
                env: process.env,
                shell: true,
            })
            if (dbPull.status === 1) return

            const dbGenerate = spawnSync(
                'npx',
                ['prisma', 'generate', '--schema', schema],
                {
                    stdio: 'inherit',
                    cwd: utils.rootPath,
                    env: process.env,
                    shell: true,
                }
            )
            if (dbGenerate.status === 1) return
        })
    }

    generate() {
        const prismaSchemas = globSync('prisma/*.prisma', {
            root: utils.rootPath,
        })

        if (prismaSchemas.length === 0)
            throw new Error('No prisma schema found!')

        prismaSchemas.forEach((schema) => {
            const dbGenerate = spawnSync(
                'npx',
                ['prisma', 'generate', '--schema', schema],
                {
                    stdio: 'inherit',
                    cwd: utils.rootPath,
                    env: process.env,
                }
            )
            if (dbGenerate.status === 1) process.exit(1)
        })
    }
}

import { ProcessEnvOptions, spawn } from 'child_process'
import { PlaywrightTestProject } from '@playwright/test'
import { cwd } from 'process'
import path from 'path'

function spawnWorker(
    pwProject: string[],
    env: ProcessEnvOptions['env'],
    additionalOptions = '',
    ignoreFail = process.env.IGNORE_FAIL
) {
    spawn(
        'npx',
        [
            'playwright',
            'test',
            '--config=conf/playwright.config.ts',
            ...pwProject,
            additionalOptions,
        ],
        { env, stdio: 'inherit' }
    ).once('exit', (code) => {
        if (!process.exitCode) {
            if (!ignoreFail)
                process.exitCode = code == 1 ? code : process.exitCode
        }
    })
}

function execute(playwrightProject: PlaywrightTestProject, testOpts?: string) {
    const projectReportRoot = path.join(
        cwd(),
        'test-results',
        playwrightProject.name!
    )
    const workerEnv = {
        ...process.env,
        OUTPUTDIR: projectReportRoot,
        ADDTEST: playwrightProject.metadata?.addTest,
    }

    spawnWorker([`--project=${playwrightProject.name}`], workerEnv, testOpts)
}


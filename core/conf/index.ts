import {
    PlaywrightTestConfig,
    defineConfig as defineConfigBase,
} from '@playwright/test'
// @ts-ignore
import dotenv from 'dotenv'
import { resolve } from 'path'
import { resolve as arpresolve } from 'app-root-path'

export const defaultConfig: PlaywrightTestConfig = {
    timeout: 600 * 1000,
    expect: {
        timeout: 5000,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.IS_CI ? 2 : 0,
    workers: process.env.IS_CI ? 1 : 1,
    outputDir: resolve('test-results'),
    globalSetup: require.resolve(
        resolve(__dirname, '..', 'playwright', 'hooks', 'global.setup')
    ),
    reporter: [
        ['list'],
    ],
    grepInvert: [new RegExp('@wip'), new RegExp('@fuzzer')],
}

export const defineConfig = (config?: PlaywrightTestConfig) => {
    dotenv.config({ path: arpresolve('.env') })

    return defineConfigBase({
        ...defaultConfig,
        ...config,
    })
}

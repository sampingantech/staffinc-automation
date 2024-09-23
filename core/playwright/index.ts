import { test as baseTest, mergeExpects } from '@playwright/test'
import { customExpect } from './custom-expect'

type customFixtures = {
    allureSetup: Promise<void>
}

export const test = baseTest.extend<customFixtures>({
    allureSetup: [
        // eslint-disable-next-line no-empty-pattern
        async ({}, use) => {
            await use(undefined)
        },
        { auto: true },
    ],
})
export const expect = mergeExpects(customExpect)

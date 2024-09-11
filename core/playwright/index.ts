import { mergeExpects } from '@playwright/test'
import { customExpect } from './custom-expect'

export const expect = mergeExpects(customExpect)

import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { AxiosResponse } from 'axios'
import { expect } from '@playwright/test'

export const customExpect = expect.extend({
    /**
     * @deprecated The method should not be used
     */
    toMatchSchema(received: object, schema: Zod.ZodSchema) {
        try {
            schema.parse(received)
            return {
                message: () => 'passed',
                pass: true,
            }
        } catch (e) {
            if (e instanceof z.ZodError) {
                const zodError = e

                return {
                    message: () => fromZodError(zodError).toString(),
                    pass: false,
                }
            }

            throw e
        }
    },

    isCorrectResponse(
        received: AxiosResponse,
        statusCode: number,
        responseSchema?: Zod.ZodSchema
    ) {
        try {
            expect(
                received.status,
                JSON.stringify(received.data, null, 4)
            ).toBe(statusCode)
            if (responseSchema) responseSchema.parse(received.data)

            return {
                message: () => 'passed',
                pass: true,
            }
        } catch (err) {
            if (err instanceof z.ZodError) {
                if (process.env.SCHEMA_DEBUG === 'true') {
                    console.warn(fromZodError(err).toString())

                    return {
                        message: () => 'passed',
                        pass: true,
                    }
                }

                return {
                    message: () =>
                        fromZodError(err, {
                            maxIssuesInMessage: 10,
                            issueSeparator: ';\n',
                            prefix: 'Schema mismatch',
                            prefixSeparator: ':\n',
                        }).toString(),
                    pass: false,
                }
            }

            return {
                message: () => err as string,
                pass: false,
            }
        }
    },

    numberToBeDescending(received: string[]) {
        const getValues: string[] = received.filter(
            (value) => value !== undefined && value !== null
        )
        const isSortedDescending = getValues.every(
            (getValues: string, index: number, array: string[]) => {
                if (index === 0) {
                    return true
                }
                return getValues <= array[index - 1]
            }
        )
        if (isSortedDescending)
            return {
                message: () => 'passed',
                pass: true,
            }
        else {
            return {
                message: () => 'number is not descending',
                pass: false,
            }
        }
    },

    numberToBeAscending(received: string[]) {
        const getValues: string[] = received.filter(
            (value) => value !== undefined && value !== null
        )
        const isSortedAscending = getValues.every(
            (getValues: string, index: number, array: string[]) => {
                if (index === 0) {
                    return true
                }
                return getValues >= array[index - 1]
            }
        )
        if (isSortedAscending)
            return {
                message: () => 'passed',
                pass: true,
            }
        else {
            return {
                message: () => 'number is not ascending',
                pass: false,
            }
        }
    },

    stringToBeDescending(received: string[]) {
        const getValues: string[] = received.filter(
            (value) => value !== undefined && value !== null
        )
        const isSortedDescending = getValues.every(
            (getValues: string, index: number, array: string[]) => {
                if (index === 0) {
                    return true
                }
                return getValues.localeCompare(array[index - 1]) <= 0
            }
        )
        if (isSortedDescending)
            return {
                message: () => 'passed',
                pass: true,
            }
        else {
            return {
                message: () => 'string is not descending',
                pass: false,
            }
        }
    },

    stringToBeAscending(received: string[]) {
        const getValues: string[] = received.filter(
            (value) => value !== undefined && value !== null
        )
        const isSortedAscending = getValues.every(
            (getValues: string, index: number, array: string[]) => {
                if (index === 0) {
                    return true
                }
                return getValues.localeCompare(array[index - 1]) >= 0
            }
        )
        if (isSortedAscending)
            return {
                message: () => 'passed',
                pass: true,
            }
        else {
            return {
                message: () => 'string is not ascending',
                pass: false,
            }
        }
    },
})

/* eslint-disable @typescript-eslint/no-explicit-any */
export {}

import { z } from 'zod'

declare global {
    type IsSchema<T> = T extends z.ZodTypeAny
        ? z.infer<T>
        : T extends (...args: any) => infer R
          ? R extends z.ZodTypeAny
              ? z.infer<R>
              : never
          : T

    type IsPayload<T extends (...args: any) => any> = T extends (
        ...args: any
    ) => infer R
        ? R
        : never

    type IsParameter<T> = T extends () => infer R
        ? Partial<R>
        : T extends (params: infer R, ...args: any) => any
          ? Partial<R>
          : T extends (...args: any) => infer R
            ? Partial<R>
            : T extends object
              ? Partial<T>
              : never
}

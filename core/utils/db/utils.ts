/* eslint-disable @typescript-eslint/no-explicit-any */
export const sliceString = (data: string, charLimit: number = 1_000) => {
    if (data.length < charLimit) return data

    return (
        data.substring(0, charLimit) +
        `\n<${data.length - charLimit} more character not shown>`
    )
}

export function parseResult(target: any) {
    return JSON.stringify(
        target,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value),
        4
    )
}

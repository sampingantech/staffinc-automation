import { defaultConfig } from 'core/conf'
import { createLogger, format, transports } from 'winston'

const logPath = defaultConfig.outputDir + '/logs'
const requestFormat = format.printf(({ level, timestamp, message }) => {
    return `[${level} - ${timestamp}] ${message}`
})

// TODO: research on flag w playing nice with playwright
export const requestLogger = createLogger({
    format: format.combine(format.timestamp(), requestFormat),
    transports: [
        new transports.File({
            filename: `${logPath}/request.log`,
        }),
    ],
})

export const responseLogger = createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.File({
            filename: `${logPath}/response.log`,
        }),
    ],
})

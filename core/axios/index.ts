import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { requestLogger, responseLogger } from 'core/utils/logging'

const skipHeader = ['Accept', 'User-Agent', 'Accept-Encoding', 'Content-Length']

const axiosToCurl = (axiosResponse: AxiosResponse, multiline = true) => {
    let curl = 'curl '
    curl += `-X ${axiosResponse.config.method.toUpperCase()} ${multiline ? '\\\n' : ''}`
    curl += `'${axiosResponse.request.protocol}//${axiosResponse.request.host}${axiosResponse.request.path}' ${multiline ? '\\\n' : ''}`

    for (const [key, value] of Object.entries(axiosResponse.config.headers)) {
        if (skipHeader.includes(key)) continue

        if (value) {
            curl += `--header '${key}: ${value}' ${multiline ? '\\\n' : ''}`
        }
    }
    if (axiosResponse.config.data) {
        curl += `--data '${axiosResponse.config.data}'`
    }

    return curl
}

export const requestInterceptor = (request: InternalAxiosRequestConfig) => {
    if (process.env.IS_CI === 'true') {
        request.headers.set('mantis', 'enable')
    }

    return request
}

export const responseInterceptor = async (response: AxiosResponse) => {
    const curlRequest = axiosToCurl(response)
    const logLevel = response.status >= 400 ? 'error' : 'info'

    requestLogger.log({
        level: logLevel,
        message: axiosToCurl(response, false),
    })

    responseLogger.log({
        level: logLevel,
        message: response.data,
    })

    return response
}

axios.defaults.validateStatus = () => true

export { default as axios } from 'axios'
export * from 'axios'

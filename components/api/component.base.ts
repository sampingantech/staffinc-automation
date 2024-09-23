import {
    axios,
    requestInterceptor,
    responseInterceptor,
    type AxiosInstance,
    type AxiosRequestConfig,
} from 'core/axios'

export class BaseComponent<TData = unknown, TSchema = unknown> {
    protected request: AxiosInstance
    data = undefined as TData
    schema = undefined as TSchema

    constructor(config: AxiosRequestConfig) {
        const requestHandler = axios.create(config)
        requestHandler.interceptors.request.use(requestInterceptor)
        requestHandler.interceptors.response.use(responseInterceptor)

        this.request = requestHandler
    }
}

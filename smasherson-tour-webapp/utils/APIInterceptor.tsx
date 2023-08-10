import axios, { AxiosError, AxiosResponse } from 'axios'

const commonConfig = {
    timeout: 60 * 1000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
}

export const smashersAPI = (token?: any) => {
    const smashersInstance = axios.create({
        ...commonConfig,
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    })

    smashersInstance.interceptors.request.use(
        (config) => {
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    smashersInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        (error: AxiosError) => {
            const { response, request } = error || {}
            return response
        }
    )
    return smashersInstance
}

export const commonAPI = () => {
    const commonInstance = axios.create({
        ...commonConfig,
        baseURL: '',
    })
    commonInstance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    commonInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        (error: AxiosError) => {
            const { response, request } = error || {}
            return Promise.reject(response || request)
        }
    )
    return commonInstance
}

interface responseError extends AxiosResponse, Error {
    data: {} | string
}

export const getErrorMessage = (
    error: responseError,
    errorheader: string = ''
) => {
    const { data, message } = error || {}
    if (typeof data === 'string') {
        const FINAL_ERROR = data || message
        return FINAL_ERROR
    } else {
        const FINAL_ERROR = message
        return FINAL_ERROR
    }
}

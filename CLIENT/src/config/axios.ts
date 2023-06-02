import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError, AxiosRequestConfig } from 'axios';

//
const headers: Readonly<Record<string, string | boolean>> = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Credentials': true,
    'X-Requested-With': 'XMLHttpRequest',
};
//
enum StatusCode {
    Unauthorized = 401,
    Forbidden = 403,
    TooManyRequests = 429,
    InternalServerError = 500,
}
//
// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the store at client or any you want that we set when we authenticate
const injectToken = (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
    try {
        // Store Access Token
        // Recommend save on redux
        const token = localStorage.getItem('accessToken');
        // config for token header API
        if (token && config.headers) config.headers.Authorization = token;

        return config;
        //
    } catch (error: any) {
        throw new Error(error);
    }
};
//
class Axios {
    private instance: AxiosInstance | null = null;

    private get axios() {
        return this.instance ? this.instance : this.initHttp();
    }
    //

    //
    initHttp() {
        const http = axios.create({
            baseURL: import.meta.env.VITE_URL_API_REST,
            headers,
            withCredentials: true,
        });
        //
        http.interceptors.request.use(injectToken, (error) => Promise.reject(error));
        //
        http.interceptors.response.use(
            (response) => response,
            (error) => {
                const { response } = error;
                return this.handleError(response);
            },
        );
        //
        this.instance = http;
        return http;
    }
    //
    public request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
        return this.axios.request(config);
    }

    public get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.get<T, R>(url, config);
    }

    public post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.post<T, R>(url, data, config);
    }

    public put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.put<T, R>(url, data, config);
    }

    public delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.axios.delete<T, R>(url, config);
    }

    //
    private handleError(error: AxiosError) {
        const { status } = error;

        switch (status) {
            case StatusCode.InternalServerError: {
                // Handle InternalServerError
                break;
            }
            case StatusCode.Forbidden: {
                // Handle Forbidden
                break;
            }
            case StatusCode.Unauthorized: {
                // Handle Unauthorized
                break;
            }
            case StatusCode.TooManyRequests: {
                // Handle TooManyRequests
                break;
            }
        }

        return Promise.reject(error);
    }
}
//
export default new Axios();

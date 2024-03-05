import { HttpResponse, IHttpClient, Params } from '@/interfaces/http-client'
import axiosPublicInstance from './axios-public-instance'

export class AxiosHttpClient implements IHttpClient {
    async request(params: Params): Promise<HttpResponse> {
        const { data } = await axiosPublicInstance.request<HttpResponse>(params)

        return { data }
    }
}
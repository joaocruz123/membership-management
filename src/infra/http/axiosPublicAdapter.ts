import { HttpResponse, IHttpClient, Params } from '@/interfaces/http-client'
import axiosPublicInstance from './instancias/axios-public-instance'

export class AxiosPublicHttpClient implements IHttpClient {
    async request(params: Params): Promise<HttpResponse> {
        const { data } = await axiosPublicInstance.request<HttpResponse>(params)
        return { data }
    }
}
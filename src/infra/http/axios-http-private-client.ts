import { HttpResponse, IHttpPrivateClient, Params } from '@/interfaces/http-client'
import axiosPrivateInstance from './axios-private-instance'

export class AxiosPrivateHttpClient implements IHttpPrivateClient {
    async request(params: Params): Promise<HttpResponse> {
        const { data } = await axiosPrivateInstance.request<HttpResponse>(params)

        return { data }
    }
}
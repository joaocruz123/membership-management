export type HttpResponse<TData = any> = {
    data: TData
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type Params = {
    method: string;
    url: string;
    data?: any | null;
}
export interface IHttpClient<TData = any> {
    request(params: Params): Promise<HttpResponse<TData>>;
}

export interface IHttpPrivateClient<TData = any> {
    request(params: Params): Promise<HttpResponse<TData>>;
}
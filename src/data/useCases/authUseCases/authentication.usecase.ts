import { IAuthCrontact } from '@/domain/contracts/auth.contracts'
import { IAuthModel } from '@/domain/models/auth.model'
import { FormAuthenticationInterface } from '@/interfaces/auth'
import { IHttpClient } from '@/interfaces/http-client'

export class AuthenticationUseCase implements IAuthCrontact {
    constructor(private readonly httpClient: IHttpClient<IAuthModel>) { }
    async singin(credentials: FormAuthenticationInterface): Promise<IAuthModel> {
        const url = `/api/auth/login`
        const { data } = await this.httpClient.request({
            method: 'POST',
            url: url,
            data: credentials
        })

        return data
    }

}
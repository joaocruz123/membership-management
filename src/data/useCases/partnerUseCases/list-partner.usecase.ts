import { IPartnerCrontract } from '@/domain/contracts/partner.contracts'
import { IPartnerModel, IPartnerResponse } from '@/domain/models/partner.model'
import { IHttpPrivateClient } from '@/interfaces/http-client'

export class PartnerListUseCase implements IPartnerCrontract {
    constructor(private readonly httpPrivateClient: IHttpPrivateClient<IPartnerResponse>) { }
    async getAllPartner(): Promise<IPartnerResponse> {
        const url = `/api/partners?page=1&limit=10`
        const { data } = await this.httpPrivateClient.request({
            method: 'GET',
            url: url
        })

        return data
    }
}
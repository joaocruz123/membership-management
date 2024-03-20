import { mapAllPartners } from '@/data/dto/partnersDTO'
import { IPartnerCrontract } from '@/domain/contracts/partner.contracts'
import { IPartnersResponse } from '@/domain/models/partner.model'
import { IHttpPrivateClient } from '@/interfaces/http-client'
import { IPartnersParams } from '@/interfaces/partners'

export class PartnerListUseCase implements IPartnerCrontract {
    constructor(private readonly httpPrivateClient: IHttpPrivateClient<IPartnersResponse>) { }
    async getAllPartner(params: IPartnersParams): Promise<IPartnersResponse> {
        const { currentPage, perPage } = params

        const url = `/api/partners?page=${currentPage}&limit=${perPage}`
        const { data } = await this.httpPrivateClient.request({
            method: 'GET',
            url: url
        })

        const result = mapAllPartners(data)
        return result
    }
}
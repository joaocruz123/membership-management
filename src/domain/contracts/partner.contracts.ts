import { IPartnersParams } from '@/interfaces/partners'
import { IPartnersResponse } from '../models/partner.model'

export interface IPartnerCrontract{
    getAllPartner(params: IPartnersParams): Promise<IPartnersResponse>
}
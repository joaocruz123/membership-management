import { IPartnerResponse } from '../models/partner.model'

export interface IPartnerCrontract{
    getAllPartner(): Promise<IPartnerResponse>
}
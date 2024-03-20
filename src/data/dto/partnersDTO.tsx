import {
  IParcialPartnerModel,
  IPartnersResponse
} from '@/domain/models/partner.model'

export const mapAllPartners = (response: IPartnersResponse) => {
  const partners = response.data.map((partner: IParcialPartnerModel) => {
    return {
      id: partner.id,
      name: partner.name,
      company: partner.company,
      cpf: partner.cpf,
      rg: partner.rg,
      status: partner.status
    }
  })
  return {
    data: partners,
    link: response.link,
    meta: response.meta
  }
}

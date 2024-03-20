
import { PartnerListUseCase } from '@/data/useCases/partnerUseCases/list-partner.usecase'
import { AxiosPrivateHttpClient } from '@/infra/http/axiosPrivateAdapter'
import { IPartnersParams } from '@/interfaces/partners'
import { useQuery } from 'react-query'


const httpClient = new AxiosPrivateHttpClient()
const fetchPartners = async (params: IPartnersParams) => {
    const partnerListUseCase = new PartnerListUseCase(httpClient)
    return partnerListUseCase.getAllPartner(params)
}

export function usePartner(params: IPartnersParams) {
    const { currentPage } = params
    const query = useQuery({
        queryFn: () => fetchPartners(params),
        queryKey: ['partners-data', currentPage],
        staleTime: Infinity
    })

    return query
}
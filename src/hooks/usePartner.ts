
import { PartnerListUseCase } from '@/data/useCases/partnerUseCases/list-partner.usecase'
import { AxiosPrivateHttpClient } from '@/infra/http/axios-http-private-client'
import { useQuery } from 'react-query'

const fetchPartners = async () => {
    const partnerListUseCase = new PartnerListUseCase(new AxiosPrivateHttpClient())
    return partnerListUseCase.getAllPartner()
}

export function usePartner() {
    const query = useQuery({
        queryFn: fetchPartners,
        queryKey: ['partners-data'],
        staleTime: Infinity
    })

    return query
}
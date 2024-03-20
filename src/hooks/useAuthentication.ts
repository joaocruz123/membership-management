
import { AuthenticationUseCase } from '@/data/useCases/authUseCases/authentication.usecase'
import { AxiosPublicHttpClient } from '@/infra/http/axiosPublicAdapter'
import { useAuthStore } from '@/infra/store/useAuthStore'
import { FormAuthenticationInterface } from '@/interfaces/auth'
import { useMutation } from 'react-query'

export function useIsAuthenticated(userToken: string | undefined) {
    if (userToken && userToken !== undefined) return true
    else return false
}

const singIn = async (credentials: FormAuthenticationInterface) => {
    const authUseCase = new AuthenticationUseCase(new AxiosPublicHttpClient())
    return authUseCase.singin(credentials)
}

export function useLogin() {
    const setAuthentication = useAuthStore(state => state.setAuthentication)

    const mutate = useMutation({
        mutationFn: singIn,
        onSuccess: result => {
            setAuthentication(result)
        }
    })

    return mutate
}
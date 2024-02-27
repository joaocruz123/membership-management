import axiosPublicInstance from '@/infra/http/axiosPublicInstance'
import { FormAuthenticationInterface } from '@/interfaces/auth'
import { useAuthStore } from '@/store/useAuthStore'
import { useMutation } from 'react-query'

export function useIsAuthenticated(userToken: string | undefined) {
    if (userToken && userToken !== undefined) return true
    else return false
}

const singin = async (credentials: FormAuthenticationInterface) => {
    const url = `/api/auth/login`
    return await axiosPublicInstance.post(url, credentials)
}

export function useLogin() {
    const setAuthentication = useAuthStore(state => state.setAuthentication)

    const mutate = useMutation({
        mutationFn: singin,
        onSuccess: result => {
            setAuthentication(result.data)
        }
    })

    return mutate
}
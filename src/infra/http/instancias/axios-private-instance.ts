import axios from 'axios'

export const axiosPrivateInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PATH_URI,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getBearerToken = () => {
  const sessionRoot = JSON.parse(
    window.sessionStorage.getItem('auth') || '{}'
  )
  const sessionUser = sessionRoot.state.auth || '{}'
  return `Bearer ${sessionUser?.access_token}`
}

axiosPrivateInstance.interceptors.request.use(
  config => {
    config.headers!['Authorization'] = getBearerToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosPrivateInstance.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const codeError = 'AC007'
    const { status, data: { errors } } = error.response
    const filterErrors = errors?.filter((error: any) => error.code === codeError) || []

    switch (status) {
      case 401:
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/logout'
        throw new Error('Unauthenticated')
      case 400:
        if (filterErrors && filterErrors.length > 0) {
          sessionStorage.clear()
          localStorage.clear()
          window.location.href = '/logout'
        }
        throw new Error('Bab Request')
      case 500:
        throw new Error('Internal Server Error')
      default:
        return Promise.reject(error)
    }
  }
)

export default axiosPrivateInstance
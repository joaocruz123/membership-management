import { create } from 'zustand'
import { AuthenticationUser } from '@/interfaces/auth'
import { persist, createJSONStorage } from 'zustand/middleware'

interface State {
  auth: AuthenticationUser | null
}

interface Actions {
  setAuthentication: (Item: AuthenticationUser) => void
  logoff: () => void
}

const initialState: State = {
  auth: null
}

export const useAuthStore = create<State & Actions, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      auth: initialState.auth,
      setAuthentication: (dataAuth: AuthenticationUser) => {
        set(() => ({
          auth: dataAuth
        }))
      },
      logoff: () => {
        set(() => ({
          auth: null
        }))
      }
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
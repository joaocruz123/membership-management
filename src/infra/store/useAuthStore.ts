import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IAuthModel } from '@/domain/models/auth.model'

interface State {
  auth: IAuthModel | null
}

interface Actions {
  setAuthentication: (Item: IAuthModel) => void
  logoff: () => void
}

const initialState: State = {
  auth: null
}

export const useAuthStore = create<State & Actions, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      auth: initialState.auth,
      setAuthentication: (dataAuth: IAuthModel) => {
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
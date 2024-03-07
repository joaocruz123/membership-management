import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IPartnerModel } from '@/domain/models/partner.model'

interface State {
  partner: IPartnerModel[] | null
}

interface Actions {
  setPartner: (Item: IPartnerModel[]) => void
}

const initialState: State = {
  partner: null
}

export const usePartnerStore = create<State & Actions, [['zustand/persist', State]]>(
  persist(
    (set, get) => ({
      partner: initialState.partner,
      setPartner: (data: IPartnerModel[]) => {
        set(() => ({
          partner: data
        }))
      }
    }),
    {
      name: 'partner',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
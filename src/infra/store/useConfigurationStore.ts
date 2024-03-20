import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface State {
    theme: string | null
}

interface Actions {
    setTheme: (Item: string) => void
}

const initialState: State = {
    theme: 'dracula'
}

export const useConfigurationStore = create<State & Actions, [['zustand/persist', State]]>(
    persist(
        (set, get) => ({
            theme: initialState.theme,
            setTheme: (theme: string) => {
                set(() => ({
                    theme: theme
                }))
            }
        }),
        {
            name: 'configurations',
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)
import { create } from 'zustand'
import { UserData } from './types'

type UserStore = {
    user: UserData | null
    users: UserData[]
    setUser: (user: UserData | null) => void
    addUser: (user: UserData) => void
    deleteUser: (id: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    users: [],
    setUser: (user) => set({ user }),
    addUser: (user) =>
        set((state) => ({ users: [...state.users, user] })),
    deleteUser: (id) =>
        set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
}))
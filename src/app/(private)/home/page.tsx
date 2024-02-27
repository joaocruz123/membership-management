'use client'

import { useAuthStore } from '@/store/useAuthStore'

export default function HomePage() {
  const user = useAuthStore(state => state.auth)

  return (
    <main>
      <h1>{user?.name}</h1>
    </main>
  )
}

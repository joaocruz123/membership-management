'use client'
import { useEffect } from 'react'
import styles from './page.module.css'
import { Loading } from '@/components'
import { redirect } from 'next/navigation'
import { useAuthStore } from '@/store/useAuthStore'
import { useIsAuthenticated } from '@/hooks/useAuthentication'

export default function Home() {
  const user = useAuthStore(state => state.auth)
  const authenticated = useIsAuthenticated(user?.access_token)

  useEffect(() => {
    if (!authenticated) {
      redirect('/login')
    } else {
      redirect('/home')
    }
  }, [authenticated])

  return (
    <main className={styles.main} data-theme='dracula'>
      <Loading />
    </main>
  )
}

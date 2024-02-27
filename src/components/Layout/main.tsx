'use client'
import { ReactNode } from 'react'
import Navibar from './navibar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navibar />
      <div className='divider' />
      <div className='container mx-auto px-4'>{children}</div>
    </>
  )
}

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import ReactQueryProvider from '@/provider/react-qury.provider'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Membership Management',
  description: 'Gerenciamento de associados'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang='en' data-theme='dracula'>
        <body className={poppins.className}>{children}</body>
      </html>
    </ReactQueryProvider>
  )
}

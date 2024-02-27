import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import Layout from '@/components/Layout/main'
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
        <body className={poppins.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ReactQueryProvider>
  )
}

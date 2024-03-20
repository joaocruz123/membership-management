'use client'

import { Poppins } from 'next/font/google'
import './globals.css'
import React from 'react'
import Layout from '@/components/layout/main'
import ReactQueryProvider from '@/provider/react-qury.provider'
import { useConfigurationStore } from '@/infra/store/useConfigurationStore'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = useConfigurationStore(state => state.theme)

  return (
    <ReactQueryProvider>
      <html lang='en' data-theme={theme}>
        <body className={poppins.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </ReactQueryProvider>
  )
}

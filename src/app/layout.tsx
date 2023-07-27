import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '../components/Header'

const poppins = Poppins({ subsets: ['latin'], weight: [ '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'FSW Trip',
  description: 'Sistema de reservas de viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header/>
          
          {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}

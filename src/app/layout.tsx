// eslint-disable-next-line camelcase
import { Inter, Familjen_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const hanken = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
})

export const metadata: Metadata = {
  title: 'Guilherme Andrade',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.variable} ${hanken.variable}`}>
          <main className="w-full h-screen flex flex-col dark:bg-zinc-950 bg-zinc-100">
            <Header />
            {children}
          </main>
        </body>
      </html>
    </>
  )
}

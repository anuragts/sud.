import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sudhanshu',
  description: 'Frontend Wizard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div className='mx-40'>
        <Header />
        {children}
        </div>
      </body>
    </html>
  )
}

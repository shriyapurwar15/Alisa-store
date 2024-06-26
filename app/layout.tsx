import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-providers'

const font = Noto_Serif({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

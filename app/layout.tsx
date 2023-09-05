import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit, Raleway } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const raleway= Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FastKar',
  description: 'A taxi booking website for safe transportation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
        <html lang="en">
          <body className={outfit.className}>
            {children}
            </body>
        </html>
  )
}

import Header from '@/components/DashboardComponents/Header'
import { SideNav } from '@/components/DashboardComponents/SideNav/SideNav'
import { Inter,Outfit, Raleway } from 'next/font/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
        <html lang="en">
          <body>
            <Header/>
            <SideNav/>
            {children}
            </body>
        </html>
  )
}

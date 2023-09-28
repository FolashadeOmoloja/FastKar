import Header from '@/components/DashboardComponents/Header'
import MobileSidebar from '@/components/DashboardComponents/SideNav/MobileNav'
import { SideNav } from '@/components/DashboardComponents/SideNav/SideNav'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
        <html lang="en">
          <body >
            <Header/>
            <SideNav/>
            <MobileSidebar/>
            <section className="dashboardsection h-full w-full p-8 z-0">
            {children}
               
        </section>
            </body>
        </html>
  )
}

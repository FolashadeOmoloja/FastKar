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
            <section className="fixed w-full p-8 top-[100px] left-[268px] max-md:left-0 z-0 ">
            {children}
               
        </section>
            </body>
        </html>
  )
}

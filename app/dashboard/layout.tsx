import Header from '@/components/DashboardComponents/Header'
import MobileSidebar from '@/components/DashboardComponents/SideNav/MobileNav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
        <html lang="en">
          <body >
            <Header/>
            <MobileSidebar/>
            <section className="dashboardsection h-full w-full p-8 z-0 max-xsm:p-5">
            {children}
               
        </section>
            </body>
        </html>
  )
}

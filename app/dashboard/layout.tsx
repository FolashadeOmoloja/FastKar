import Header from '@/components/DashboardComponents/Header'
import MobileSidebar from '@/components/DashboardComponents/SideNav/MobileNav'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body >

        <Header/>
        <MobileSidebar/>
        <Suspense fallback={<Loading/>}>
        <section className="dashboardsection h-full w-full p-8 z-0 max-xsm:p-5 max-xsm:pr-[10px]">
            {children}
        </section>
        </Suspense>

      </body>
    </html>
  )
}



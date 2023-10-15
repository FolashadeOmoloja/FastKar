import CutomerSupport from '@/components/DashboardComponents/Customer-Support/CutomerSupport'
import { SideNav } from '@/components/DashboardComponents/SideNav/SideNav'
import React from 'react'

const page = () => {
  return (
    <section>
         <SideNav activeItem={5}/>
         <CutomerSupport/>
    </section>
  )
}

export default page
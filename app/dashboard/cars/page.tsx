import CarListPage from '@/components/DashboardComponents/CarListPage/CarList'
import { SideNav } from '@/components/DashboardComponents/SideNav/SideNav'
import React from 'react'

const Cars= () => {
  return (
    <section>
        <SideNav activeItem={2}/>
        <CarListPage/>
    </section>
  )
}

export default Cars
import Body from '@/components/Body'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
<section>
  <UserButton afterSignOutUrl="/"/>
    <Header/>
   <Body/>
   <Footer/>
   
</section>
  )
}

import Body from '@/components/Body'
import CopyrightSection from '@/components/Copywrite'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import 'leaflet/dist/leaflet.css'


export default function Home() {
  return (
<section className='bg-color'>
    <Header/>
   <Body/>
   <Footer/>
   <CopyrightSection/>
   
</section>
  )
}

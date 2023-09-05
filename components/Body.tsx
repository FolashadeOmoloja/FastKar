
import Process from './Process'
import { Testimonials } from './Testimonials'
import Services from './services-slider/Services'
import Contact from './Contact/Contact'

const Body = () => {
  return (
   <main className='bg-color'>
        <Process/>
        <Services/>
        <Testimonials/>
        <Contact/>
   </main>
  )
}

export default Body

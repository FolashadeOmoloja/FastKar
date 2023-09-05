import {HiOutlineMail } from 'react-icons/hi'
import CTA from '../CTA'

const Contact = () => {
  return (
   <section id='contact' className="flex  flex-col pt-[70px] items-center px-[3rem] max-xsm:px-[32px]">
    {/* <section>
        <CTA/>
    </section> */}
    <section className='bg-[#AED6EF] p-12 rounded-[20px] max-sm:p-5 max-xsm:p-3 max-xsm:bg-transparent'>
         <p className="text-[30px]  text-center font-bold mb-5 ">Subscribe To Our Newsletter</p>
         <p className='text-gray-700 text-center '>Subscribe to our newsletter to get the lastest updates and promotional offers on FastKar </p>
    <div className="relative mt-14 flex max-xsm:flex-col">
      <input
        type="email"
        placeholder="Enter Email Address"
        className="w-full bg-white rounded-lg pl-10 py-2 h-[50px] placeholder-sm focus:outline-none focus:border-blue-300 max-xsm:border-blue-300 max-xsm:border-2 focus:ring-0"
      />
      <div className="absolute inset-y-0 left-0 flex max-xsm:bottom-[50%] items-center pl-3 pointer-events-none">
        <HiOutlineMail className="text-gray-400" fontSize={18} />
      </div>
      <button className="bg-bluegradient text-white rounded-lg py-2 max-xsm:py-3 px-4 ml-3 max-xsm:mt-3 max-xsm:ml-0 max-xsm:w-full ">
        Subscribe
      </button>
    </div>
    </section>

   </section>
  )
}

export default Contact
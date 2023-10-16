import CustomerCareIcon from "../CustomerCareIcon"
import ComplaintBox from "./ComplaintBox"
import FaqBox from "./FAQ"


const CutomerSupport = () => {
  return (
   <section>
          <h3 className="text-[30px] font-semibold text-[#2387FE]">Customer Support</h3>
          <span className="text-sm mb-5 font-semibold">We're here to help!</span>
          <section className="flex max-md:flex-col">
              <div className="basis-1/2">
                 <img src="/customercare.webp" alt="img" />
              </div>
              <div className="basis-1/2">
                 <FaqBox/>
              </div>
          </section>
          <section className="mt-8 flex flex-col">
            <span className="text-[30px] font-semibold text-[#2387FE]">Have any Complaints? Let us know here</span>
            <span className="text-sm  mb-5 font-semibold">You can also talk to our representatives via whatsapp or email</span>
           <ComplaintBox/>
          </section>
          <div className="fixed right-[20px] bottom-[50px] ">
            <CustomerCareIcon/>
        </div>
   </section>
  )
}

export default CutomerSupport
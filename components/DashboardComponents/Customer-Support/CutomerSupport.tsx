import CustomerCareIcon from "../CustomerCareIcon"
import FaqBox from "./FAQ"


const CutomerSupport = () => {
  return (
   <section>
          <h3>Customer Support</h3>
          <section className="flex max-md:flex-col">
              <div className="basis-1/2">
                 <img src="/customercare.webp" alt="img" />
              </div>
              <div className="basis-1/2">
                 <FaqBox/>
              </div>
          </section>
          <div className="fixed right-[20px] bottom-[50px] ">
            <CustomerCareIcon/>
        </div>
   </section>
  )
}

export default CutomerSupport
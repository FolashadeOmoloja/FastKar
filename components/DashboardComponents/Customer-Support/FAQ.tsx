'use client'
import  {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FaqBox = () => {
  const [faqs, setfaqs] = useState([
    {id:0, 
    open: false, 
    p:'What sets FastKar apart from other taxi services?',
    ans: 'FastKar stands out with its commitment to safety, quality, and exceptional customer service, ensuring a superior travel experience.'
  },
    {id:1, 
    open: false, 
    p:'Is FastKar available 24/7 for my convenience?',
    ans: "Yes, FastKar provides round-the-clock service, ensuring that we're always available to meet your transportation needs."
  
  },
    {id:2, 
    open: false, 
    p:"How can I book a ride with FastKar?",
    ans: 'Booking a FastKar ride is easy; simply use our website to request a ride anytime, anywhere.'
  },
    {id:3, 
    open: false, 
    p:'Can I book a FastKar ride for a future date?',
    ans: 'Yes, you can schedule FastKar rides up to 8 days in advance to secure your transportation.'
  
  }, 
    {id:4, 
    open: false, 
    p:'Are FastKar drivers professionally trained?',
    ans: 'Yes, all FastKar drivers undergo professional training to ensure passenger safety.'
  
  },
    {id:5, 
    open: false, 
    p:'Can I trust FastKar for secure and convenient rides?',
    ans: 'FastKar guarantees secure and convenient transportation for all passengers.'
     
  },

])

  const toogleFAQ = (index: number) =>{
    setfaqs(faqs.map((faq, i) =>{
      if (i === index) {
        faq.open = !faq.open
        console.log('open')
      } else {
        faq.open = false;
      }

      return faq;
    }))
    }


  return (
<div className="mt-[43px]">
{
    faqs.map(({id,open,p, ans})=>{
        return(
          
          <div className="border-b-[1px] pb-[13px] pt-[25px] border-[#2387FE] text-sm " key={id}>
          <div className= 'flex justify justify-between '>
          <p>{p}</p>
           <span className='text-[#2387FE] cursor-pointer flex flex-col max-sm:justify-center' onClick = {() => toogleFAQ(id)}>{open? <AiOutlineMinus/>: <AiOutlinePlus/>}</span>
          </div>
          <div className={` ${(open ? `block` :'hidden')} mt-3`} >
            <p>{ans}</p>
          </div>
      
          
        </div>

        )
    })
}
</div>
  )
}

export default FaqBox
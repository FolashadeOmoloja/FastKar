'use client'
import  {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FaqBox = () => {
  const [faqs, setfaqs] = useState([
    {id:0, open: false, p:'Can I work on a project I started before the hackathon?'},
    {id:1, open: false, p:'What happens if I need help during the hackathon?'},
    {id:2, open: false, p:"What happens if I don't have an idea for a project?"},
    {id:3, open: false, p:'Can I join a team or do I have to come with one?'}, 
    {id:4, open: false, p:'What happens after the hackathon ends'},
    {id:5, open: false, p:'Can I work on a project I started before the hackathon'},

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
    faqs.map(({id,open,p})=>{
        return(
          
          <div className="border-b-[1px] pb-[13px] pt-[25px] border-[#D434FE] text-sm " key={id}>
          <div className= 'flex justify justify-between '>
          <p>{p}</p>
           <span className='text-[#D434FE] cursor-pointer flex flex-col max-sm:justify-center' onClick = {() => toogleFAQ(id)}>{open? <AiOutlineMinus/>: <AiOutlinePlus/>}</span>
          </div>
          <div className={` ${(open ? `block` :'hidden')} mt-3`} >
            <p>Lorem ipsum dolor sit amet consectetur. Ac lobortis bland  eros nis modo ullamcorper metus nullam sed  bland nisl. Commodo ull</p>
          </div>
      
          
        </div>

        )
    })
}
</div>
  )
}

export default FaqBox
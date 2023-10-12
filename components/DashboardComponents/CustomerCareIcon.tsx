"use client"
import { useState } from 'react';
import { TiMessages } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import {BsWhatsapp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const CustomerCareIcon = () => {
  const [showCross, setShowCross] = useState(false);

  const handleClick = () => {
    setShowCross(!showCross);
  };

  return (
    <div className='relative'>
       <div className={`bg-[#4285f4] helpline absolute  customercarediv ${showCross?'top-[-120px]':'top-[0]'}`}><MdEmail/></div> 
      <div className={`bg-[#25D366] helpline absolute customercarediv ${showCross?'top-[-60px] ':'top-[0] '}`}><BsWhatsapp/></div>
      <div className={`bg-bluegradient relative z-30 customercarediv icon-container ${showCross ? 'rotate' : ''}` } onClick={handleClick}>
        {showCross ? <ImCross /> : <TiMessages />}
      </div>
    </div>
  );
};

export default CustomerCareIcon;

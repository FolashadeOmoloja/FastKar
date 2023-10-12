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
       <div className={`bg-[#4285f4] helpline absolute  customercarediv ${showCross?'top-[0]':'top-[-120px]'}`}><MdEmail/></div> 
      <div className={`bg-[#25D366] helpline absolute customercarediv ${showCross?'top-[-0px] ':'top-[-60px] '}`}><BsWhatsapp/></div>
      <div className={`bg-bluegradient customercarediv icon-container ${showCross ? 'rotate' : ''}` } onClick={handleClick}>
        {showCross ? <ImCross /> : <TiMessages />}
      </div>
    </div>
  );
};

export default CustomerCareIcon;

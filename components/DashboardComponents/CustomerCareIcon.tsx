"use client"
import { useState } from 'react';
import { TiMessages } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';

const CustomerCareIcon = () => {
  const [showCross, setShowCross] = useState(false);

  const handleClick = () => {
    setShowCross(!showCross);
  };

  return (
    <div>
      <div className={`text-lg text-white bg-bluegradient w-[50px] h-[50px] rounded-[50%] flex items-center justify-center bg-red-400 icon-container ${showCross ? 'rotate' : ''}` } onClick={handleClick}>
        {showCross ? <ImCross /> : <TiMessages />}
      </div>
    </div>
  );
};

export default CustomerCareIcon;

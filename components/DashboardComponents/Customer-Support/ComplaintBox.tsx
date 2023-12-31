"use client"
import { useState } from 'react';

interface Iprops{
  cta?:string
  initCta?:string
  height?: string
  smWidth?:string
  div?: string
  placeholder?: string
  updateItem?: () => void;
}

const ComplaintBox:React.FC<Iprops> = ({cta='Complaint Sent', initCta='Send Complaint', height='h-[200px]', smWidth='w-[300px]', div='', placeholder='complaints', updateItem}) => {
  const [complaint, setComplaint] = useState('');
  const [complaintSent, setComplaintSent] = useState(false);

  const handleComplaintSubmit = () => {
    setComplaint('');
    setComplaintSent(!complaintSent);
    if(updateItem){
      updateItem()
    }
  };

  return (
    <div className={`${div}`}>
      <textarea
        placeholder={`Write your ${placeholder} here`}
        className={`${height} w-full resize-none overflow-y-scroll rounded-sm border-[#2387FE] outline-none border bg-transparent p-5` }
        value={complaint}
        name='complaint box'
        onChange={(e) => setComplaint(e.target.value)}
      ></textarea>
      <button
        className={`book-button sm:${smWidth} mt-7 ${
          complaintSent ? 'complaint-sent' : ''
        }`}
        onClick={handleComplaintSubmit}
      >
        {complaintSent ? (
          <>
             {cta}  <span className='text-white'>&#10004;</span>
          </>
        ) : (
          initCta
        )}
      </button>
    </div>
  );
}

export default ComplaintBox;

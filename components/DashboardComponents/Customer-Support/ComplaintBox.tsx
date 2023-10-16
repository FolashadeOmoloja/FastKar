"use client"
import { useState } from 'react';

const ComplaintBox = () => {
  const [complaint, setComplaint] = useState('');
  const [complaintSent, setComplaintSent] = useState(false);

  const handleComplaintSubmit = () => {
    setComplaint('');
    setComplaintSent(!complaintSent);
  };

  return (
    <div>
      <textarea
        placeholder="Write your complaints here"
        className="h-[200px] w-full resize-none overflow-y-scroll rounded-sm border-[#2387FE] outline-none border bg-transparent p-5"
        value={complaint}
        name='complaint box'
        onChange={(e) => setComplaint(e.target.value)}
      ></textarea>
      <button
        className={`book-button sm:w-[300px] mt-7 ${
          complaintSent ? 'complaint-sent' : ''
        }`}
        onClick={handleComplaintSubmit}
      >
        {complaintSent ? (
          <>
            Complaint Sent  <span>&#10004;</span>
          </>
        ) : (
          'Send Complaint'
        )}
      </button>
    </div>
  );
}

export default ComplaintBox;

import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import ComplaintBox from '../Customer-Support/ComplaintBox';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/app/api/firebase/config';


interface Iprop{
  propUseState?: (value: boolean) => void; 
  propSecondUseState?:(value: number) => void;
  modal?: boolean
  tripId?:string
}



const StarRating:React.FC<Iprop> = ({propUseState, modal, propSecondUseState, tripId}) => {
  const [rating, setRating] = useState(0);
  const [filledStars, setFilledStars] = useState([false, false, false, false, false]);
  console.log(tripId)


  //updating the db with the rating
  const updateItem = async() =>{
    const docRef = doc(db, "items", tripId as string);
    await updateDoc(docRef, {
    rating: rating
    });
  }

  const handleStarClick = (starIndex:any) => {
    const newRating = starIndex + 1;
    setRating(newRating);

    // Update the filledStars array to change the appearance of stars
    const updatedFilledStars = filledStars.map((_, index) => index < newRating);
    setFilledStars(updatedFilledStars);
  };

  useEffect(() => {
    if(modal){
      document.body.style.overflow = 'hidden';
    } else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  const closeModal = () =>{
    if(propUseState){
      propUseState(false)
    }
    if(propSecondUseState){
      propSecondUseState(-1)
    }
  }

  return (
    <div className='fixed inset-0 slg:left-[270px] bg-[#2386fe71] overflow-hidden flex items-center justify-center'>
          <div className='bg-white rounded-lg w-[600px] h-[350px] relative top-[10%] max-sm:w-[350px] max-xsm:w-[270px] flex flex-col justify-center items-center gap-5 p-5 text-center'>
            <span className='font-semibold'>Rate your Trip, give us your feedback</span>
            <div className="star-rating flex gap-2">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer text-[40px] max-xsm:text-[20px]`}
                  onClick={() => handleStarClick(index)}
                >
                  {filledStars[index] ? (
                    <BsStarFill color="#29AFFD"  />
                  ) : (
                    <BsStar color="#29AFFD" />
                  )}
                </span>
              ))}
             </div>
             <ComplaintBox cta='Feedback Sent' initCta='Send Feedback' height='h-[100px]' div='flex justify-center flex-col' placeholder='feedback'/>
             <div className='text-[#2386fe] text-lg absolute right-[20px] top-[10px] cursor-pointer' onClick={()=>closeModal()}><FaTimes/></div>
          </div>

    </div>
  );
};

export default StarRating;

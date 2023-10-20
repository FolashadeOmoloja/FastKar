import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import ComplaintBox from '../Customer-Support/ComplaintBox';

interface Iprop{
  propUseState?: (value: boolean) => void; 
}

const StarRating:React.FC<Iprop> = ({propUseState}) => {
  const [rating, setRating] = useState(0);
  const [filledStars, setFilledStars] = useState([false, false, false, false, false]);

  const handleStarClick = (starIndex:any) => {
    const newRating = starIndex + 1;
    setRating(newRating);

    // Update the filledStars array to change the appearance of stars
    const updatedFilledStars = filledStars.map((_, index) => index < newRating);
    setFilledStars(updatedFilledStars);
  };

  useEffect(() => {

      document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className='fixed left-[270px] max-slg:left-0 right-0 bottom-0 top-0 bg-[#2386fe34] overflow-hidden flex items-center justify-center'>
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
          </div>
    </div>
  );
};

export default StarRating;

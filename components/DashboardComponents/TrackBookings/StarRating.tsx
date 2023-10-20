import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';

const StarRating = () => {
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
    <div className='fixed left-[270px] max-slg:left-0 right-0 bottom-0 top-0 bg-[#2386fe34] overflow-hidden'>
          <div className='bg-white rounded-lg w-[300px] h-[300px] '>
            <div className="star-rating flex">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer `}
                  onClick={() => handleStarClick(index)}
                >
                  {filledStars[index] ? (
                    <BsStarFill color="#29AFFD" fontSize='14px' />
                  ) : (
                    <BsStar color="#29AFFD" fontSize='14px' />
                  )}
                </span>
              ))}
             </div>
          </div>
    </div>
  );
};

export default StarRating;

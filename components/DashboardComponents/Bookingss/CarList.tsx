import { vehicles } from "@/constants"
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const CarList = () => {
  
  return (
    <section className="mt-10">
        <div>
            <span className="font-semibold text-[#2387FE] text-lg">Select a Vehicle</span>
        </div>
        <section className="flex gap-5 overflow-x-scroll  mt-5">
               {
                vehicles.map((veh,index)=>{
                    const rating = veh.star;
                    const integerPart = Math.floor(rating);
                    const decimalPart = rating - integerPart;
                    const stars = [];
          
                    for (let i = 0; i < 5; i++) {
                      if (i < integerPart) {
                        stars.push(<BsStarFill key={i} color="#29AFFD" fontSize='14px' />);
                      } else if (i === integerPart && decimalPart >= 0.3 && decimalPart <= 0.7) {
                        stars.push(<BsStarHalf key={i} color="#29AFFD" fontSize='14px' />);
                      } else {
                        stars.push(<BsStar key={i} color="#29AFFD" fontSize='14px' />);
                      }
                    }
                    return (
                        <div key={index} className="rounded-lg h-[230px] w-[200px] bg-white flex flex-col justify-between items-center min-w-[200px]">
                            <span className="text-sm mt-2">{veh.type}</span>
                            <div className="flex">{stars}</div>
                            <div>
                                <img src={veh.image} alt="" className="w-[100px] h-[100px]"/>
                            </div>

                        </div>
                    )
                })
               }
        </section>
    </section>
  )
}

export default CarList
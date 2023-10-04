import { useState,  } from "react"
import { vehicles, calculateTripPrice } from "@/constants"
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {MdWarning} from 'react-icons/md'
import { useRouter } from "next/navigation"


interface Iprop {
 travelDistance?: any
 drop?: string
 pick?: string
 duration?:string
 distance?:string
 
}


const CarList:React.FC<Iprop> = ({travelDistance, drop, pick,duration, distance}) => {
    const [changeBg, setChangeBg] = useState(-1);
    const [tripPrice, setTripPrice]= useState('')
    const [price, setPrice] = useState(0)
    const [warning,setWarning] = useState('hidden')
    const router:any = useRouter()
    const handleItemClick = (index: number, basePrice:number) => {
        setChangeBg(index);
        const distance = calculateTripPrice(travelDistance, basePrice)
         setTripPrice(distance.totalPriceDisplay)
         setPrice(distance.totalPrice)
      };

      const collectDataButtonClick = () =>{
        if(price > 0){
          const tripData = {
            drop: drop,
            pick: pick,
            duration: duration,
            distance: distance,
            price: price.toFixed(2)
          }
  
          console.log(tripData)
        }
        else{
          setWarning('block')
          console.log('complete your booking')
        }

      }
  return (
    <section className="mt-10">
        <div>
            <span className="font-semibold text-[#2387FE] text-lg">Select a Vehicle</span>
        </div>
        <section className="flex gap-5 overflow-x-scroll  mt-5" >
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
                        <div key={index} className={`rounded-lg h-[200px] w-[200px] bg-white flex flex-col justify-between items-center min-w-[152px] cursor-pointer ${index === changeBg?'bg-bluegradient text-white': ''}`}  
                        onClick={() => handleItemClick(index, veh.basePrice)}
                        >
                            <span className="text-sm mt-2">{veh.type}</span>
                            <div className={`flex  ${index === changeBg?'hidden': ''}`}>{stars}</div>
                            <div>
                                <img src={veh.image} alt="" className="w-[100px] h-[100px]"/>
                            </div>

                        </div>
                    )
                })
               }
        </section>
        <div className="flex mt-5 justify-center w-full">
        <button className="book-button min-w-[200px] max-xsm:w-full"
        onClick={() => collectDataButtonClick()}
        >Confirm Order <span>&#8358;{tripPrice}</span> </button>
        </div>
        <p className={`text-red-500 mt-3 w-full `}>
          <span className="text-yellow-500"><MdWarning/></span> Complete your booking to proceed*
        </p>

    </section>
  )
}

export default CarList
import { useState,  } from "react"
import { vehicles, calculateTripPrice } from "@/constants"
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {MdWarning} from 'react-icons/md'
interface Iprop {
 travelDistance?: any
 drop?: string
 pick?: string
 duration?:string
 distance?:string
 propUseState?: (value: {
    pick:'',
    drop:'',
    duration: '',
    distance: '',
    price: 0,
    vehicleType: ''
  }) => void; 
 propSecondUseState?: (value: boolean) => void; 
 
}


const CarList:React.FC<Iprop> = ({travelDistance, drop, pick,duration, distance, propUseState, propSecondUseState}) => {
    const [changeBg, setChangeBg] = useState(-1);
    const [tripPrice, setTripPrice]= useState('')
    const [vehicleName, setVehicleName] = useState('')
    const [price, setPrice] = useState(0)
    const [warning,setWarning] = useState('hidden')
    const handleItemClick = (index: number, basePrice:number, vehName: string) => {
        setChangeBg(index);
        setVehicleName(vehName)
        const distance = calculateTripPrice(travelDistance, basePrice)
         setTripPrice(distance.totalPriceDisplay)
         setPrice(distance.totalPrice)
      };

      const collectDataButtonClick = () =>{
        if(price > 0){
          const tripData = {
            drop: drop as '',
            pick: pick as '',
            duration: duration as '',
            distance: distance as '',
            price: price.toFixed(2) as unknown as 0,
            vehicleType: vehicleName as ''
          }
          
         if(propUseState){
          propUseState(tripData)
         }
         if(propSecondUseState){
          propSecondUseState(false)
         }
        
          setWarning('hidden')
        }
        else{
          setWarning('block')
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
                        onClick={() => handleItemClick(index, veh.basePrice, veh.type)}
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
        <p className={`text-red-600 mt-3 w-full flex items-center justify-center ${warning}  `}>
          <span className="text-yellow-500 mr-1 text-lg"><MdWarning/></span> Complete your booking to proceed*
        </p>

    </section>
  )
}

export default CarList
"use client"
import { useRouter } from "next/navigation";
import { BsFillCheckCircleFill } from 'react-icons/bs'


interface ButtonProps{
className?:string
showIcon?:Boolean
  }

const BookRideButton:React.FC<ButtonProps>  = ({className,showIcon}) => {

    const router = useRouter();

    const handleSignInClick = () => {
      router.push('/dashboard');
    };

  return (
    <div>
        <button className={`book-button max-xsm:text-sm  flex items-center gap-3 ${className}`}    onClick={handleSignInClick}>
            <span>Book A Ride</span>
            <span className={`text-sm text-white ${showIcon?'': 'hidden'}`}><BsFillCheckCircleFill/></span>
        </button>
    </div>
  )
}

export default BookRideButton
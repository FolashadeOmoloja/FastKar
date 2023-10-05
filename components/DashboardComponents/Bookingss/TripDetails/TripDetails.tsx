


interface Iprop {
     tripDetailObject?: object 
  }

const TripDetails:React.FC<Iprop> = ({tripDetailObject}) => {

    console.log(tripDetailObject)
  return (
    <div>TripDetails</div>
  )
}

export default TripDetails
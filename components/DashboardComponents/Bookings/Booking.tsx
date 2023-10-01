import Map from "./Map"
import AutocompleteAddress from "./Autocompleteaddress"





const Booking = () => {
  return (
    <section className="flex max-md:flex-col-reverse max-md:gap-[50px]">
        <section className=' basis-[30%]'>
           <AutocompleteAddress/>
        </section>
  
           <Map/>

        

    </section>
  )
}

export default Booking
import ServiceDetails from "./ServiceDetails"
import Slider from "./Slider"


const Services = () => {
  return (
    <section id="services" className="flex flex-col pt-[100px] items-center px-[3rem] max-xsm:px-[32px]">
        <h3 className="mb-1 text-[#494949] text-sm">Our Services</h3>
        <h2 className="text-[30px] text-center font-bold mb-12">Explore our afforable vehicles, ride in comfort</h2>
        <div className="">
            <Slider/>
            <ServiceDetails/>
        </div>
    </section>
  )
}

export default Services
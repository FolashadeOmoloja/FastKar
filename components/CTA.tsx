import { FaGooglePlay, FaApple } from 'react-icons/fa';

const CTA = () => {
  return (
   <section className="flex mb-[60px] justify-between items-center px-[3rem] max-xsm:px-[20px]">
  
      <div className='basis-2/4'>
      <h2 className="text-2xl font-semibold mb-4">Download Our App</h2>
      <p className="text-gray-500 mb-4">Get the FastKar app for a seamless travel experience.</p>
      <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure illo in amet obcaecati! Sunt totam tempora mollitia animi sint laborum recusandae.</p>
      <div className="flex space-x-4">
      <a href="#" className="flex items-center bg-blue-500 max-xsm:text-sm text-white rounded-md px-4 py-2 hover:bg-blue-600">
        <FaGooglePlay className="mr-2 " size={20} />
        Download on Play Store
      </a>
      <a href="#" className="flex items-center bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-gray-700">
        <FaApple className="mr-2" size={20} />
        Download on App Store
      </a>
    </div>
      </div>
      <div className='max-md:hidden'>
      <img src="/cta.png" alt="" className="w-full h-full object-center object-cover"/>
      </div>
   </section>
  )
}

export default CTA
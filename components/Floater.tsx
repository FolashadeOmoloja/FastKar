const Floater = () => {
  return (
   <section className='flex justify-center'>
        <section className='flex md:w-[55%] max-xsm:w-[80%] justify-between bg-white relative rounded-[20px] p-5 shadow-xl shadow-black/20 dark:shadow-black/40 top-[50px]' >
        <div className="flex flex-col items-center gap-1">
              <div className="w-[3rem] h-[3rem] p-1 bg-[#b2d3e9] rounded-full">
                  <img src="/safe.png" alt="" className='w-full h-full' />
              </div>
              <span className='max-xsm:hidden'>Safe</span>
            </div> 
        <div className="flex flex-col items-center gap-1">
                 <div className="w-[3rem] h-[3rem]    p-1 bg-[#b2d3e9] rounded-full top-[55%] left-[50%]">
                      <img src="/reliable.png" alt="" className='w-full h-full' />
                 </div>
                 <span className='max-xsm:hidden'>Reliable</span>
            </div>
        <div className="flex flex-col items-center gap-1">
                   <div className="w-[3rem] h-[3rem]  p-1 bg-[#b2d3e9] rounded-full">
                        <img src="/fast.png" alt="" className='w-full h-full'  />
                    </div>
                   <span className='max-xsm:hidden'>Fast</span>
            </div> 
        <div className="flex flex-col items-center gap-1">
                    <div className="w-[3rem] h-[3rem]   p-1 bg-[#b2d3e9] rounded-full">
                            <img src="/cartooncar.png" alt=""  className='w-full h-full' />
                    </div> 
                    <span className='max-xsm:hidden'>Durable</span>
            </div>   
        </section>
   </section>
  )
}

export default Floater
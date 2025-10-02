import React from 'react'
import piles from '../../assets/images/piles.avif'

const Services = ({gutBrainAxisPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow  text-black text-center  text-2xl sm:text-4xl lg:text-5xl lg:w-[90%] m-auto lg:leading-15 font-semibold mt-10 lg:mt-30'>{gutBrainAxisPageData?.needToKnow4WhatisHeading}</h1>

            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{gutBrainAxisPageData?.needToKnow4WhatisPara}</p>

                    </div>



                     <div className=''>  
                        <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold mt-5'>{gutBrainAxisPageData?.needToKnow5WhatisHeading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{gutBrainAxisPageData?.needToKnow5WhatisPara}</p>
                    </div>


                   
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={gutBrainAxisPageData?.needToKnowImg4} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{gutBrainAxisPageData?.needToKnow6WhatisHeading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{gutBrainAxisPageData?.needToKnow6WhatisPara}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-3'>{gutBrainAxisPageData?.needToKnow7WhatisHeading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{gutBrainAxisPageData?.needToKnow7WhatisPara}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-3'>{gutBrainAxisPageData?.needToKnow8WhatisHeading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{gutBrainAxisPageData?.needToKnow8WhatisPara}</p>
                        </div>
                       
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
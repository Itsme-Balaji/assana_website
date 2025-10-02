import React from 'react'
import piles from '../../assets/images/piles.avif'

const LaserSurgeryNeedToKnow = ({laserSurgeryPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadowtext-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-5 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    {/* <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{laserSurgeryPageData?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{laserSurgeryPageData?.needToKnow1WhatisPara}</p>
                    </div> */}
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8 text-[#EC7979]'>{laserSurgeryPageData?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow1SubHeading1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow1WhatisPara1}</p>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow1SubHeading2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow1WhatisPara2}</p>
                        {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow2WhatisPara5}</p> */}
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8 text-[#EC7979]'>{laserSurgeryPageData?.needToKnow2Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow2WhatisPara1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{laserSurgeryPageData?.needToKnow2WhatisPara2}</p>

                    </div>
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={laserSurgeryPageData?.needToKnowImg} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{laserSurgeryPageData?.needToKnow3Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow3WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow3WhatisPara2}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow4WhatisPara3}</p> */}
                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{laserSurgeryPageData?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow4WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow4WhatisPara2}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{laserSurgeryPageData?.needToKnow3WhatisPara5}</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LaserSurgeryNeedToKnow
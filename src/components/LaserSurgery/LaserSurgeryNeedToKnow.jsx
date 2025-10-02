import React from 'react'
import piles from '../../assets/images/piles.avif'

const LaserSurgeryNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadowtext-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-5 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    {/* <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{problems?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.needToKnow1WhatisPara}</p>
                    </div> */}
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8 text-[#EC7979]'>The Laser Surgery Process</h1>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Process1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Process1_Para}</p>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Process2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Process2_Para}</p>
                        {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow2WhatisPara5}</p> */}
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8 text-[#EC7979]'>Advantages of Laser Surgery</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Advantages1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.LaserSurgery_Advantages2}</p>

                    </div>
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.LaserSurgery_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Conditions Treated with Laser Surgery</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Conditions_Treated_LaserSurgery_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Conditions_Treated_LaserSurgery_Para2}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow4WhatisPara3}</p> */}
                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Advantages of Laser Surgery</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.LaserSurgery_Advantages3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.LaserSurgery_Advantages4}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow3WhatisPara5}</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LaserSurgeryNeedToKnow
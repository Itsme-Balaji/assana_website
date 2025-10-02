import React from 'react'
import piles from '../../assets/images/piles.avif'
    
const AfterAnalSurgeryNeedToKnow = ({afterAnalSurgeryPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
                <h1 className='font-[Raleway] smallShadow lg:textShadow  text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%]'>{afterAnalSurgeryPageData?.needToKnow1WhatisPara1}</p>

                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{afterAnalSurgeryPageData?.needToKnow1WhatisPara2}</p>
                    </div>



                     <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow2Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow2WhatisPara}</p>
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow3Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow3WhatisPara}</p>
                    </div>
{/* 
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{afterAnalSurgeryPageData?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow4WhatisPara}</p>
                    </div> */}

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{afterAnalSurgeryPageData?.needToKnow5Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow5WhatisPara}</p>
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{afterAnalSurgeryPageData?.needToKnow6Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow6WhatisPara}</p>
                    </div>
                     <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{afterAnalSurgeryPageData?.needToKnow7Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{afterAnalSurgeryPageData?.needToKnow7WhatisPara}</p>
                    </div> */}

                   
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={afterAnalSurgeryPageData?.needToKnowImg} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow4WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow4WhatisPara2}</p>
                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow5Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow5WhatisPara}</p>

                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{afterAnalSurgeryPageData?.needToKnow6Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow6WhatisPara}</p>

                        </div>


                        {/* <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{afterAnalSurgeryPageData?.needToKnow11Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow11WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow11WhatisPara2}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{afterAnalSurgeryPageData?.needToKnow12Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow12WhatisPara}</p>

                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{afterAnalSurgeryPageData?.needToKnow13Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow13WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow13WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow13WhatisPara3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{afterAnalSurgeryPageData?.needToKnow13WhatisPara4}</p>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AfterAnalSurgeryNeedToKnow

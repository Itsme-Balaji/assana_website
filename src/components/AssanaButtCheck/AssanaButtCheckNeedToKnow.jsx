import React from 'react'
import piles from '../../assets/images/piles.avif'

const AssanaButtCheckNeedToKnow = ({assanaButtCheckPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow  text-center  text-2xl sm:text-4xl  font-semibold mt-15  lg:mt-30 lg:w-[80%] m-auto'>
                    {assanaButtCheckPageData?.needToKnowHeading}
            </h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>{assanaButtCheckPageData?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{assanaButtCheckPageData?.needToKnow1WhatisPara}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold mt-5'>{assanaButtCheckPageData?.needToKnow2Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow2WhatisPara1}</p>
                        <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow2WhatisPara2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow2WhatisPara3}</p>
                        <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow2WhatisPara4}</p>
                        {/* <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow2WhatisPara5}</p> */}
                    </div>

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{assanaButtCheckPageData?.needToKnow3Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow3WhatisPara}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{assanaButtCheckPageData?.needToKnow4Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{assanaButtCheckPageData?.needToKnow4WhatisPara}</p>
                    </div> */}

                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={piles} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{assanaButtCheckPageData?.needToKnow3Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow3WhatisPara}</p>

                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-5'>{assanaButtCheckPageData?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow4WhatisPara}</p>

                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right'>{assanaButtCheckPageData?.needToKnow5Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow5WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow5WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow5WhatisPara3}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow7WhatisPara4}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow7WhatisPara5}</p> */}

                        </div>
                         {/* <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{assanaButtCheckPageData?.needToKnow8Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow8WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow8WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow8WhatisPara3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{assanaButtCheckPageData?.needToKnow8WhatisPara4}</p>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AssanaButtCheckNeedToKnow
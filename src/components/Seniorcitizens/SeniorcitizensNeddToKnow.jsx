import React from 'react'
import piles from '../../assets/images/piles.avif'

const SeniorcitizensNeddToKnow = ({seniorcitizensPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        {/* <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{seniorcitizensPageData?.needToKnowHeading}</h1> */}
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>{seniorcitizensPageData?.needToKnow1Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{seniorcitizensPageData?.needToKnow1WhatisPara}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>{seniorcitizensPageData?.needToKnow2Heading}</h1>
                        <p className='text-base sm:text-lg  font-[Raleway] mt-2 w-[100%] '>{seniorcitizensPageData?.needToKnow2WhatisPara1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{seniorcitizensPageData?.needToKnow2WhatisPara2}</p>

                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>{seniorcitizensPageData?.needToKnow3Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{seniorcitizensPageData?.needToKnow3WhatisPara1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{seniorcitizensPageData?.needToKnow3WhatisPara2}</p>

                    </div>

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>{seniorcitizensPageData?.needToKnow4Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{seniorcitizensPageData?.needToKnow4WhatisPara}</p>

                    </div> */}


                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={seniorcitizensPageData?.needToKnowImg} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>{seniorcitizensPageData?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow4WhatisPara}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right mt-5 text-[#EC7979]'>{seniorcitizensPageData?.needToKnow5Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow5WhatisPara}</p>
                        </div>

                        
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            {/* <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{seniorcitizensPageData?.needToKnow7Heading1}</h1> */}
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right mt-5 text-[#EC7979]'>{seniorcitizensPageData?.needToKnow6Heading}</h1>

                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow6WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow6WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow6WhatisPara3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow6WhatisPara4}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{seniorcitizensPageData?.needToKnow7WhatisPara5}</p> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SeniorcitizensNeddToKnow
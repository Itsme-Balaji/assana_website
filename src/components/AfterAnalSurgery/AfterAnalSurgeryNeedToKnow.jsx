import React from 'react'
import piles from '../../assets/images/piles.avif'
    
const AfterAnalSurgeryNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
                <h1 className='font-[Raleway] smallShadow lg:textShadow  text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>General Guidelines for Post-Operative Wound Care</h1>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%]'>{problems?.General_Guidelines_Para1}</p>

                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.General_Guidelines_Para2}</p>
                    </div>



                     <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>Sitz Baths</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.SitzBaths_Para}</p>
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>Manage Pain and Discomfort</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.Manage_Pain_Para}</p>
                    </div>
{/* 
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow4Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow4WhatisPara}</p>
                    </div> */}

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow5Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow5WhatisPara}</p>
                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow6Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow6WhatisPara}</p>
                    </div>
                     <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow7Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow7WhatisPara}</p>
                    </div> */}

                   
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.AfterAnalSurgery_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Specific Tips for Each Condition</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Specific_Tips_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Specific_Tips_Para2}</p>
                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Anal Fissure</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Para}</p>

                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Anal Fistula</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFistula_Para}</p>

                        </div>


                        {/* <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{problems?.needToKnow11Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow11WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow11WhatisPara2}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{problems?.needToKnow12Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow12WhatisPara}</p>

                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{problems?.needToKnow13Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow13WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow13WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow13WhatisPara3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow13WhatisPara4}</p>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AfterAnalSurgeryNeedToKnow

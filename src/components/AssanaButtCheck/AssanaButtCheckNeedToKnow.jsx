import React from 'react'
import piles from '../../assets/images/piles.avif'

const AssanaButtCheckNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow  text-center  text-2xl sm:text-4xl  font-semibold mt-15  lg:mt-30 lg:w-[80%] m-auto'>
                    What Does the Assana Butt Check Include?
            </h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>Consultation with a Specialist Gut Doctor</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Consultation_Specialist_GutDoctor_Para}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold mt-5'>The Laser Surgery Process
</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.Laser_Surgery_Process_Para1}</p>
                        <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{problems?.Laser_Surgery_Process_Para2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.Laser_Surgery_Process_Para3}</p>
                        <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{problems?.Laser_Surgery_Process_Para4}</p>
                        {/* <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow2WhatisPara5}</p> */}
                    </div>

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow3Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow3WhatisPara}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>{problems?.needToKnow4Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow4WhatisPara}</p>
                    </div> */}

                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.Assana_ButtCheck_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Allergy Testing</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Allergy_Testing_Para}</p>

                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-5'>Gut Microbiome Testing</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Gut_Microbiome_Testing_Para}</p>

                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right'>Your Comprehensive Gut Report Card</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Comprehensive_Gut_ReportCard_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Comprehensive_Gut_ReportCard_Para2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Comprehensive_Gut_ReportCard_Para3}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow7WhatisPara4}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow7WhatisPara5}</p> */}

                        </div>
                         {/* <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{problems?.needToKnow8Heading}</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow8WhatisPara1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow8WhatisPara2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow8WhatisPara3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow8WhatisPara4}</p>

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AssanaButtCheckNeedToKnow
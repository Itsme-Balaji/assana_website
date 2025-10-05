import React from 'react'
import piles from '../../assets/images/piles.avif'

const MenoPauseNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
             <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        {/* <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{problems?.needToKnowHeading}</h1> */}
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>Hormonal Shifts and the Microbiome</h1>

                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Hormonal_Shifts}</p>
                        {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.needToKnow1WhatisPara2}</p> */}

                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>Slower Digestive Function</h1>
                        <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] '>{problems?.What_is_Slower_Digestive_para1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.What_is_Slower_Digestive_para2}</p>

                    </div>

                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>Increased Risk of GI Disorders</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.Increased_Risk_GI_Disorders_para}</p>

                    </div>

                  

                    {/* <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>{problems?.needToKnow5Heading}</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow5WhatisPara}</p>

                    </div> */}
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.Menopause_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Bone and Gut Health Link</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Bone_Gut_HealthLink_para}</p>
                        </div>


                        <div className='flex flex-col lg:items-end mt-5'>  
                            {/* <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>{problems?.needToKnow6Heading1}</h1> */}
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Dietary Adjustments</h1>

                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Dietary_Adjustments_para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Dietary_Adjustments_para2}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow6WhatisPara3}</p> */}
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow6WhatisPara4}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow6WhatisPara5}</p> */}

                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-8'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Medical Support</h1>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow7WhatisPara1}</p> */}
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow7WhatisPara2}</p> */}
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Medical_Support_para}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MenoPauseNeedToKnow
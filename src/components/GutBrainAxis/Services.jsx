import React from 'react'
import piles from '../../assets/images/piles.avif'

const Services = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow  text-black text-center  text-2xl sm:text-4xl lg:text-5xl lg:w-[90%] m-auto lg:leading-15 font-semibold mt-10 lg:mt-30'>Services to Support Gut-Brain Axis Health At Assana Personalized Gut Microbiome Analysis</h1>

            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.Services_to_Support_Details}</p>

                    </div>



                     <div className=''>  
                        <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold mt-5'>ASSANA Life Gut Wellness Program</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.ASSANA_Life_Gut_WellnessProgram}</p>
                    </div>


                   
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.Services_to_Support_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right'>Gut Nutrition & Diet Counseling</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Gut_Nutrition_DietCounseling}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-3'>Stress Management & Lifestyle Counseling</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.StressManagement_LifestyleCounseling}</p>
                        </div>

                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold lg:text-right mt-3'>Probiotic and Prebiotic Guidance</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Probiotic_PrebioticGuidance}</p>
                        </div>
                       
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
import React from 'react'

  
const GutWellnwssNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.LifestyleCounseling_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>Lifestyle Counseling</h1>
                    </div>
               </div>
               <div className='row-span-1 flex flex-col lg:justify-center col-span-2 bg-[] order-2 lg:order-2'>
                <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is it?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_LifestyleCounseling}</p>

                    <h1 className=' text-base sm:text-lg font-[Raleway] font-semibold text-[#EC7979] mt-5'>Nutritional Planning</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_NutritionalPlanning}</p>

                    <h1 className=' text-base sm:text-lg font-[Raleway] font-semibold text-[#EC7979] mt-5'>Lifestyle Coaching</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_LifestyleCoaching}</p>


               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-4 lg:order-3'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is it?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_ColonCleanse}</p>

                    <h1 className='text-base sm:text-lg font-[Raleway] font-semibold text-[#EC7979] mt-2'>Gut Microbiome Optimization</h1>
                    {/* <h1 className='text-base sm:text-lg font-[Raleway] font-semibold'>{problems?.needToKnow5WhatisHeading}</h1> */}
                    <p className='text-base sm:text-lg  font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_GutMicrobiome_Optimization}</p>

                    <h1 className='text-base sm:text-lg font-[Raleway] font-semibold text-[#EC7979] mt-2'>Fitness Coaching and Muscle Strengthening</h1>
                    {/* <h1 className='text-base sm:text-lg font-[Raleway] font-semibold'>{problems?.needToKnow6WhatisHeading}</h1> */}
                    <p className='text-base sm:text-lg  font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_FitnessCoaching_Para1}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_FitnessCoaching_Para2}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-2 w-[100%]'>{problems?.What_is_FitnessCoaching_Para3}</p>


                    

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.ColonCleanse_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>Colon Cleanse and Hydrotherapy</h1>
                         
                    </div>
               </div>



            </div>
        </div>
    </section>
  )
}

export default GutWellnwssNeedToKnow
import React from 'react'
import plevic1 from '../../assets/images/plevic1.png'
import plevic2 from '../../assets/images/plevic2.png'
import plevic3 from '../../assets/images/plevic3.png'
  
const GutCleanseProgramNeedToKnow = ({colonHydrotherapyPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
          <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg1} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow1Heading}</h1>
                    </div>
               </div>
               <div className='row-span-1 flex flex-col lg:justify-center col-span-2 bg-[] order-2 lg:order-2'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow1WhatisHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow1WhatisPara}</p>

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-4 lg:order-3'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow2WhatisHeading}</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara1}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara2}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara3}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara4}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara5}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow2WhatisPara6}</p>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg2} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow2Heading}</h1>
                         
                    </div>
               </div>



               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-5 bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg3} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow3Heading}</h1>

                    </div>
               </div>
               <div className='col-span-2 flex flex-col lg:justify-center order-6'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow3WhatisHeading}</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow3WhatisPara}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>{colonHydrotherapyPageData?.needToKnow3HelpHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow3HelpPara}</p>

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-8 lg:order-7'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow4WhatisHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow4WhatisPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow4WhatisPara2}</p>


                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>{colonHydrotherapyPageData?.needToKnow4HelpHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow4HelpPara}</p>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-7 lg:order-8  bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg4} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow4Heading}</h1>
                         
                    </div>
               </div>







                <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-9 bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg5} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow5Heading}</h1>
                    </div>
               </div>
               <div className='col-span-2 flex flex-col lg:justify-center order-10'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow5WhatisHeading}</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow5WhatisPara1}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow5WhatisPara2}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow5WhatisPara3}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow5WhatisPara4}</p>

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-12 lg:order-11'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>{colonHydrotherapyPageData?.needToKnow6WhatisHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow6WhatisPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow6WhatisPara2}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow6WhatisPara3}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{colonHydrotherapyPageData?.needToKnow6WhatisPara4}</p>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-11 lg:order-12  bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={colonHydrotherapyPageData?.needToKnowImg6} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'>{colonHydrotherapyPageData?.needToKnow6Heading}</h1>
                         
                    </div>
               </div>

            </div>
        </div>
    </section>
  )
}

export default GutCleanseProgramNeedToKnow
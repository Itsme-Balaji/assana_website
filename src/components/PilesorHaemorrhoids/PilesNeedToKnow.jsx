import React from 'react'
import plevic1 from '../../assets/images/plevic1.png'
import plevic2 from '../../assets/images/plevic2.png'
import plevic3 from '../../assets/images/plevic3.png'
  
const PilesNeedToKnow = ({pilesorHaemorrhoidsPageData}) => {
    
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
          <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={pilesorHaemorrhoidsPageData?.needToKnowImg1} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-xl sm:text-2xl text-white font-bold absolute top-7 p-2 text-center'>{pilesorHaemorrhoidsPageData?.needToKnow1Heading}</h1>
                    </div>
               </div>
               <div className='row-span-1 col-span-2 bg-[] order-2 lg:order-2'>
                    <h1 className='text-xl sm:text-3xl font-[Raleway] font-semibold'>{pilesorHaemorrhoidsPageData?.needToKnow1WhatisHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1WhatisPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1WhatisPara2}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1WhatisPara3}</p>
                    {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1WhatisPara4}</p> */}


                    <h1 className='text-[#EC7979] text-xl sm:text-3xl font-[Raleway] font-semibold mt-5'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpPara2}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpPara3}</p>
                    {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpPara4}</p> */}
                    {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow1HelpPara5}</p> */}


               </div>


               

  
               <div className='col-span-2 flex flex-col justify-center order-4 lg:order-3'>
                    <h1 className='text-xl sm:text-3xl font-[Raleway] font-semibold'>{pilesorHaemorrhoidsPageData?.needToKnow2WhatisHeading}</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow2WhatisPara1}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow2WhatisPara2}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow2WhatisPara3}</p>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow2WhatisPara4}</p>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={pilesorHaemorrhoidsPageData?.needToKnowImg2} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-xl sm:text-2xl text-white font-bold absolute top-7 p-2 text-center'>{pilesorHaemorrhoidsPageData?.needToKnow2Heading}</h1>
                         
                    </div>
               </div>




               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-5 lg:order-5'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={pilesorHaemorrhoidsPageData?.needToKnowImg3} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-xl sm:text-2xl text-white font-bold absolute top-7 p-2 text-center'>{pilesorHaemorrhoidsPageData?.needToKnow3Heading}</h1>
                    </div>
               </div>
               <div className='row-span-1 col-span-2 bg-[] order-6 lg:order-6'>
                    <h1 className='text-xl sm:text-3xl font-[Raleway] font-semibold'>{pilesorHaemorrhoidsPageData?.needToKnow3WhatisHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3WhatisPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3WhatisPara2}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3WhatisPara3}</p>


                    <h1 className='text-[#EC7979] text-xl sm:text-3xl font-[Raleway] font-semibold mt-5'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpHeading}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpPara1}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpPara2}</p>
                    {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpPara3}</p> */}
                    {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpPara4}</p>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{pilesorHaemorrhoidsPageData?.needToKnow3HelpPara5}</p> */}


               </div>



      

            </div>
        </div>
    </section>
  )
}

export default PilesNeedToKnow
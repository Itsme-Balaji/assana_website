import React from 'react'
import doc1 from '../assets/images/doc1.png'
import doc2 from '../assets/images/doc2.png'



const AboutTeam = ({aboutPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] m-auto w-[95%]'>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center lg:text-start text-3xl sm:text-4xl lg:text-6xl font-bold  mt-20'>{aboutPageData?.meetTeamHeading}</h1>
            <div className='lg:grid grid-cols-2 mt-10 w-full sm:w-[85%] m-auto'>
                <div className='bg-[] flex justify-center items-center'>
                  <div className='flex flex-col justify-center items-center' data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className='text-[#EC7979] shadow shadow-[#EC7979]  bg-[white] text-2xl inline font-semibold p-3 rounded-4xl px-9 relative md:top-20 right-0 md:right-40'>{aboutPageData?.founderHeading}</h1>
                        <img src={aboutPageData?.founder} className='h-80 w-80 sm:h-100 sm:w-100 rounded-full' alt='' />

                        <div className='bg-[black] text-[white]  text-center   p-3 px-5 sm:px-8 rounded-2xl relative bottom-6'>
                         <h1 className='text-xl'>{aboutPageData?.founderName}</h1>
                         <h1 className='text-base mt-2'>MRCS(Edin), FRCS(General Surgery & Coloproctology), CCT(UK)</h1>
                         <h1 className='text-base text-[#EC7979] mt-1 font-semibold'>Consultant Colorectal Surgeon</h1>

                        </div>
                    </div>  
                </div>

                <div className='bg-[] flex justify-center items-center mt-10 sm:mt-0'>
                  <div className='flex flex-col justify-center items-center' data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className='text-[#EC7979] shadow shadow-[#EC7979] bg-[white] text-2xl inline font-semibold p-3 rounded-4xl px-9 relative md:top-20 md:left-47'>{aboutPageData?.co_founderHeading}</h1>
                        <img src={aboutPageData?.co_founder} className='h-80 w-80 sm:h-100 sm:w-100 rounded-full' alt='' />
                        <div className='bg-[black] text-[white] text-center text-xl p-3 px-8 rounded-2xl relative bottom-6 left-2'>
                            <h1 className='text-xl'>{aboutPageData?.co_founderName}</h1>
                            <h1  className='text-base text-[#EC7979] mt-1 font-semibold'>Educationist & Lifestyle Coach</h1>
                        </div>
                          
                    </div> 

               </div>
            </div>
        </div>
    </section>
  )
}

export default AboutTeam
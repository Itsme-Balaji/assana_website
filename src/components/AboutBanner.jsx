import React from 'react'
import aboutBanner from '../assets/images/aboutBanner.png'

const AboutBanner = ({aboutPageData}) => {
  return (
    <section >
        <div className='max-w-[1600px] m-auto w-[95%] bg-[] ' >
            <div className="h-40 sm:h-50 md:h-100 lg:h-120 w-full bg-[] mt-28 rounded-4xl" style={{ backgroundImage: `url(${aboutPageData?.aboutBanner})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
               <div className='flex flex-col justify-center items-center h-full'>
                  <h1 className='font-bold  font-[Raleway] text-xl sm:text-2xl md:text-8xl text-[white]'>{aboutPageData?.bannerHeading}</h1>
                  <p className='font-bold font-[Raleway] text-base sm:text-xl tracking-wider md:text-3xl text-[white]'>{aboutPageData?.bannerSubHeading}</p>
               </div>
            </div>
        </div>
    </section>
  )
}

export default AboutBanner
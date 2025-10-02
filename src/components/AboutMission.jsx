import React from 'react'
import { BiSolidRightArrow,BiSolidLeftArrow  } from "react-icons/bi";

const AboutMission = ({aboutPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] m-auto w-[95%]'>
            <div className='lg:grid grid-cols-3 grid-rows-2 mt-15 sm:mt-30'>
                <div className='bg-[] flex justify-center  items-center'>
                    <h1 className='font-bold font-[Raleway] text-3xl sm:text-5xl'>{aboutPageData?.ourMissionHeading}</h1>
                </div>
                <div className='bg-[#] hidden lg:flex justify-center items-center' data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine" data-aos-duration="500">
                    <hr className='text-[#ED7D7D] bg-[#ED7D7D] h-1.5  w-[70%]  font-bold' /> <BiSolidRightArrow className='inline-block text-4xl text-[#ED7D7D] relative right-2' />
                </div>
                <div className='bg-[#] flex justify-center items-center mt-5 sm:mt-0 sm:p-12'>
                    <p className='font-[Raleway] text-base sm:text-xl text-center'>{aboutPageData?.ourMissionPara}</p>
                </div>


                <div className='bg-[] flex lg:hidden justify-center mt-10  items-center '>
                    <h1 className='font-bold font-[Raleway] text-3xl sm:text-5xl'>{aboutPageData?.ourVisionHeading}</h1>
                </div>
                <div className='bg-[#] flex justify-center items-center mt-5 sm:mt-0 sm:p-12 '>
                    <p className='font-[Raleway] text-base sm:text-xl text-center'>{aboutPageData?.ourVisionPara}</p>
                </div>
                 <div className='bg-[#] hidden lg:flex justify-center items-center' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="500">
                     <BiSolidLeftArrow className='inline-block text-4xl text-[#ED7D7D] relative left-2' /><hr className='text-[#ED7D7D] bg-[#ED7D7D] h-1.5  w-[70%]  font-bold' />
                </div>
                <div className='bg-[] hidden lg:flex justify-center  items-center '>
                    <h1 className='font-bold font-[Raleway] text-5xl'>{aboutPageData?.ourVisionHeading}</h1>
                </div>
               
                
              
            </div>
        </div>
    </section>
  )
}

export default AboutMission
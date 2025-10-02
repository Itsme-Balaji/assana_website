import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import womanPain from '../assets/images/womenPain.png'
import { Link } from 'react-router-dom';


const PlevicFloorBanner = ({whyAssana}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
            <div className='grid lg:grid-cols-3 mt-35 w-[95%] m-auto'>
                <div className='flex flex-col  lg:col-span-2 order-2 lg:order-1 mt-4 lg:mt-0'>
                  <h1 className='font-[Raleway] smallShadow lg:textShadow  text-center lg:text-start text-2xl sm:text-4xl lg:text-6xl font-bold mt-2 lg:mt-30'>{whyAssana?.Heading}</h1>
                  <p className='font-[Raleway] text-base sm:text-xl text-center lg:text-start w-[100%] lg:w-[90%] mt-8'>{whyAssana?.SubHeading}</p>
                  <div className="group mt-10 flex justify-center lg:justify-start items-center  ">
                   <Link onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} to={'/bookNow'}> <button className="bg-[#EC7979] text-sm sm:text-lg p-3 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Book a discreet Consultation
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </button></Link>
                </div>
                </div>

                <div className='bg-[]  flex justify-center lg:justify-end items-center order-1 lg:order-2'>
                    <div className='bg-[] h-full w-full flex justify-center items-center '>
                        <img src={whyAssana?.Image} alt='' className='bg-[] h-70 lg:h-full' />
                    </div>
                </div>
                
            </div>

        </div>

    </section>
  )
}

export default PlevicFloorBanner
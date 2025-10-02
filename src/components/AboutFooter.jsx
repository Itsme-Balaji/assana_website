import React from 'react'
import aboutFooter from '../assets/images/aboutFooter.png'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import assanaLogo from '../assets/images/assanaLogo.png'
import { FaLocationDot } from "react-icons/fa6";

const AboutFooter = () => {
  return (
    <section>
        <div className='max-w-[1600px] m-auto w-[95%]'>
            <div className='bg-[] h-90 w-full mt-25 mb-4 sm:mb-10 rounded-3xl' style={{backgroundImage: `url(${aboutFooter})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}>
                <div className='grid grid-cols-1 lg:grid-cols-3 h-full p-3 sm:p-6 lg:p-0'>
                    <div className='flex lg:justify-center items-center bg-[] order-2 lg:order-1'>
                        <div className='flex justify-center items-center bg-[white] h-9 w-9 rounded-full'>
                            <HiOutlineMailOpen className='inline-block text-2xl text-[#EC7979] bg-[white]' />
                        </div>
                            <h1 className='text-white text-base sm:text-xl ml-2'>info@assanawellness.com</h1>
                    </div>
                    <div className='flex relative flex-col justify-center lg:items-center bg-[] order-1 lg:order-2'>
                        <div className='bg-[white] h-20 w-25 rounded-2xl lg:absolute top-10 flex justify-center items-center'>
                            <img src={assanaLogo} alt='assanaLogo' className='h-10' />
                        </div>

                        <div className='flex mt-4 lg:mt-0'>
                            <div className='flex  justify-center items-center bg-[white] h-9 w-9 rounded-full'>
                                <FaPhoneVolume className='inline-block text-lg text-[#EC7979] bg-[white]' />
                            </div>
                                <h1 className='text-white text-base sm:text-xl ml-2'><span>+91 44 3505 7120</span>, <span>+91 44 3505 7120</span></h1>
                         </div>   
                    </div>
                    <div className='flex justify-center items-center bg-[] order-3 '>
                        <div className='flex justify-center items-center bg-[white] h-9 w-9 rounded-full'>
                            <FaLocationDot className='inline-block text-xl text-[#EC7979] bg-[white]' />
                        </div>
                            <h1 className='text-white text-base sm:text-xl ml-2 w-full lg:w-[70%]'>126, P.S. Sivasamy Road, Mylapore, Chennai 600004, Tamil Nadu, India</h1>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutFooter
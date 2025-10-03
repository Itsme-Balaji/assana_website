import React from 'react'
import plevic1 from '../assets/images/plevic1.png'
import plevic2 from '../assets/images/plevic2.png'
import plevic3 from '../assets/images/plevic3.png'
  
const PlevicFloorHelp = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
            <h1 className='font-[Raleway] smallShadow lg:textShadowtext-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>

            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.RectalProlapse_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-6 p-2 text-center'>Rectal Prolapse</h1>
                    </div>
               </div>
               <div className='row-span-1 flex flex-col lg:justify-center col-span-2 bg-[] order-2 lg:order-2'>
                <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_RectalProlapse}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xlfont-[Raleway] font-semibold mt-5'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_RectalProlapse}</p>


                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>Symptoms:</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.RectalProlapse_Symptoms1}</li>
                        <li>{problems?.RectalProlapse_Symptoms2}</li>
                        <li>{problems?.RectalProlapse_Symptoms3}</li>

                    </ul>

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-4 lg:order-3'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Rectocoele}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xlfont-[Raleway] font-semibold mt-5'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_Rectocoele}</p>


                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>Symptoms:</h1>
                    <ul className='font-[Raleway]text-base sm:text-lg mt-3 '>
                        <li>{problems?.Rectocoele_Symptoms1}</li>
                        <li>{problems?.Rectocoele_Symptoms2}</li>
                        <li>{problems?.Rectocoele_Symptoms3}</li>

                    </ul>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.Rectocoele_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-6 p-2 text-center'>Rectocoele</h1>
                         
                    </div>
               </div>



               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-5 bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.ODS_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-6 p-2 text-center'>Obstructed Defecation Syndrome (ODS)</h1>

                    </div>
               </div>
               <div className='col-span-2 flex flex-col lg:justify-center order-6'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_ODS}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_ODS}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>Symptoms:</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.ODS_Symptoms1}</li>
                        <li>{problems?.ODS_Symptoms2}</li>
                        <li>{problems?.ODS_Symptoms3}</li>

                    </ul>

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-8 lg:order-7'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_RectalIntussusception}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_RectalIntussusception}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5'>Symptoms:</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.RectalIntussusception_Symptoms1}</li>
                        <li>{problems?.RectalIntussusception_Symptoms2}</li>
                        <li>{problems?.RectalIntussusception_Symptoms3}</li>

                    </ul>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-7 lg:order-8  bg-[]'>
                    <div className='bg-[] relative flex justify-center h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.RectalIntussusception_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-6 p-2 text-center'>Rectal Intussusception</h1>
                         
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default PlevicFloorHelp
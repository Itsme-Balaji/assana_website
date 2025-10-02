import React from 'react'
import plevic1 from '../assets/images/plevic1.png'
import plevic2 from '../assets/images/plevic2.png'
import plevic3 from '../assets/images/plevic3.png'
  
const ColorectalSymptomsNeedToKnown = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
                <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className=' flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.RectalBleeding_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center flex'>Rectal Bleeding</h1>
                    </div>
               </div>
               <div className='row-span-1 col-span-2 bg-[] order-2 lg:order-2'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_RectalBleeding}</p>

                    <h1 className='text-[#EC7979] text-3xl font-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_RectalBleeding}</p>

                    <h1 className='text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.RectalBleeding_Symptoms1}</li>
                        <li>{problems?.RectalBleeding_Symptoms2}</li>
                        <li>{problems?.RectalBleeding_Symptoms3}</li>

                        

                    </ul>

               </div>


               



               
               <div className='col-span-2 flex flex-col order-4 lg:order-3'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Constipation}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xlfont-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_Constipation}</p>


                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway]text-base sm:text-lg mt-3 '>
                        <li>{problems?.Constipation_Symptoms1}</li>
                        <li>{problems?.Constipation_Symptoms2}</li>
                        <li>{problems?.Constipation_Symptoms3}</li>

                    </ul>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.Constipation_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className=' text-white font-bold text-2xl absolute top-7 p-2 text-center'>Constipation</h1>
                         
                    </div>
               </div>



               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-5 bg-[]'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.Diarrhoea_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className=' text-white font-bold text-2xl absolute top-7 p-2 text-center'>Diarrhoea</h1>

                    </div>
               </div>
               <div className='col-span-2 flex flex-col order-6'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Diarrhoea}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_Diarrhoea}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                       <li>{problems?.Diarrhoea_Symptoms1}</li>
                        <li>{problems?.Diarrhoea_Symptoms2}</li>
                        <li>{problems?.Diarrhoea_Symptoms3}</li>

                    </ul>

               </div>


               



               
               <div className='col-span-2 flex flex-col order-8 lg:order-7'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_IncompleteEvacuation}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_IncompleteEvacuation}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.IncompleteEvacuation_Symptoms1}</li>
                        <li>{problems?.IncompleteEvacuation_Symptoms2}</li>
                        <li>{problems?.IncompleteEvacuation_Symptoms3}</li>

                    </ul>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-7 lg:order-8  bg-[]'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.IncompleteEvacuation_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className=' text-white font-bold text-2xl absolute top-7 p-2 text-center'>IncompleteEvacuation</h1>
                         
                    </div>
               </div>







                <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-9 bg-[]'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={problems?.MucusinStool_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className=' text-white font-bold text-2xl absolute top-7 p-2 text-center'>Mucus in Stool</h1>

                    </div>
               </div>
               <div className='col-span-2 flex flex-col order-10'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg  font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_MucusinStool}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_MucusinStool}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.MucusinStool_Symptoms1}</li>
                        <li>{problems?.MucusinStool_Symptoms2}</li>
                        <li>{problems?.MucusinStool_Symptoms3}</li>

                    </ul>

               </div>


               



               
               <div className='col-span-2 flex flex-col order-12 lg:order-11'>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>What Is It?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Persistentitching}</p>

                    <h1 className='text-[#EC7979] text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>How Assana Can Help?</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.Assana_help_Persistentitching}</p>

                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-9'>Symptoms</h1>
                    <ul className='font-[Raleway] text-base sm:text-lg mt-3 '>
                        <li>{problems?.Persistentitching_Symptoms1}</li>
                        <li>{problems?.Persistentitching_Symptoms2}</li>
                        <li>{problems?.Persistentitching_Symptoms3}</li>

                    </ul>

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-11 lg:order-12  bg-[]'>
                    <div className='bg-[] flex justify-center relative h-90 sm:h-110 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={problems?.Persistentitching_Image} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className=' text-white font-bold text-2xl absolute top-7 p-2 text-center'>Persistent itching around the anus</h1>
                         
                    </div>
               </div>




             


               



               
              



            </div>
        </div>
    </section>
  )
}

export default ColorectalSymptomsNeedToKnown
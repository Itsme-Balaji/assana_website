import React from 'react'
import piles from '../../assets/images/piles.avif'

const AnalFissureNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>Symptoms of an Anal Fissure:</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.AnalFissure_Symptoms1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.AnalFissure_Symptoms2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.AnalFissure_Symptoms3}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.AnalFissure_Symptoms4}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{problems?.AnalFissure_Symptoms5}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8 text-[#EC7979]'>Causes of Anal Fissures</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{problems?.AnalFissure_Causes1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{problems?.AnalFissure_Causes2}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{problems?.AnalFissure_Causes3}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{problems?.AnalFissure_Causes4}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] '>{problems?.AnalFissure_Causes5}</p>
                    </div>
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.AnalFissure_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>Treatment</h1>
                            <p className='text-base sm:text-lg font-semibold font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment2}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow3WhatisPara3}</p> */}
                            <p className='text-base sm:text-lg font-semibold  font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment4}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment5}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.AnalFissure_Treatment6}</p>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AnalFissureNeedToKnow
import React from 'react'
import piles from '../../assets/images/piles.avif'

const BandingofPilesNeedToKnow = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>All you need to know...</h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold text-[#EC7979]'>What Is Banding of Piles?</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Banding_of_Piles_para}</p>
                    </div>



                     <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-5 text-[#EC7979]'>What to Expect During the Procedure</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.What_Expect_During_Procedure_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.What_Expect_During_Procedure_Para2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.What_Expect_During_Procedure_Para3}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.needToKnow2WhatisPara4}</p> */}
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.needToKnow2WhatisPara15}</p> */}
                    </div>

                   
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.Banding_Piles_Image} alt='' className='h-full w-full rounded-3xl object-fit' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-0'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Who Is It For?</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Who_Is_It_For_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Who_Is_It_For_Para2}</p>
                        </div>
                        <div className='flex flex-col lg:items-end mt-5 lg:mt-5'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold lg:text-right text-[#EC7979]'>Benefits of Banding at Assana</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Benefits_Banding_Assana_Para1}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Benefits_Banding_Assana_Para2}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Benefits_Banding_Assana_Para3}</p>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.Benefits_Banding_Assana_Para4}</p>
                            {/* <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.needToKnow4WhatisPara5}</p> */}

                        </div>

                        
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BandingofPilesNeedToKnow
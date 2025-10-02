import React from 'react'
import pelvicTeam from '../../assets/images/pelvicTeam.png'
import pelvicTeam1 from '../../assets/images/pelvicTeam2.png'
import pelvicTeam2 from '../../assets/images/pelvicTeam3.png'
import pelvicTeam3 from '../../assets/images/pelvicTeam4.png'


const WhyAssana = ({colonRectalCancerPageData}) => {
    
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
            <div>
                <h1 className='font-[Raleway] smallShadow lg:textShadow  text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10  lg:mt-30 lg:w-[60%] m-auto'>
                    {colonRectalCancerPageData?.whyAssanaHeading}
                </h1>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-5 lg:mt-30 gap-4 mb-10'>
                    <div className='w-full group  flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 shadow sm:w-90 bg-[#fffff]   rounded-3xl flex flex-col   items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution1Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution1Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution1Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>
                    

                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 shadow sm:w-90 bg-[#EC7979]  rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution2Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution2Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution2Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>


                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 sm:w-90 shadow bg-[] rounded-3xl flex flex-col  items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution3Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution3Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution3Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>



                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 sm:w-90 shadow  bg-[#EC7979]  rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution4Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution4Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution4Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>


                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 shadow sm:w-90 bg-[#fffff]  rounded-3xl flex flex-col   items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution5Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution5Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution5Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>
                    

                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 shadow sm:w-90 bg-[#EC7979]  rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution6Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution6Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution6Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>


                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 sm:w-90 shadow bg-[]  rounded-3xl flex flex-col  items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution7Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData.whyAssanaSolution7Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution7Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>



                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 sm:w-90 shadow  bg-[#EC7979] rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{colonRectalCancerPageData?.whyAssanaSolution8Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{colonRectalCancerPageData?.whyAssanaSolution8Para}</p>
                            <img src={colonRectalCancerPageData?.whyAssanaSolution8Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyAssana
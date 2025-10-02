import React from 'react'
import pelvicTeam from '../../assets/images/pelvicTeam.png'
import pelvicTeam1 from '../../assets/images/pelvicTeam2.png'
import pelvicTeam2 from '../../assets/images/pelvicTeam3.png'
import pelvicTeam3 from '../../assets/images/pelvicTeam4.png'


const AssanaButtCheckWhyAssana = ({assanaButtCheckPageData}) => {
    
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
            <div>
                <h1 className='font-[Raleway] smallShadow lg:textShadow text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10  lg:mt-30 lg:w-[60%] m-auto'>
                    {assanaButtCheckPageData?.whyAssanaHeading}
                </h1>

                <div className='grid lg:grid-cols-4 mt-5 lg:mt-30 gap-4 mb-10'>
                    <div className='w-full group  flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 shadow sm:w-90 bg-[#fffff]  rounded-3xl flex flex-col   items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{assanaButtCheckPageData?.whyAssanaSolution1Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{assanaButtCheckPageData?.whyAssanaSolution1Para}</p>
                            <img src={assanaButtCheckPageData?.whyAssanaSolution1Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>
                    

                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 shadow sm:w-90 bg-[#EC7979] rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{assanaButtCheckPageData?.whyAssanaSolution2Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{assanaButtCheckPageData?.whyAssanaSolution2Para}</p>
                            <img src={assanaButtCheckPageData?.whyAssanaSolution2Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>


                    <div className='w-full group  flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className=' w-70 sm:w-90 shadow bg-[]  rounded-3xl flex flex-col  items-center p-2 py-8'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{assanaButtCheckPageData?.whyAssanaSolution3Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{assanaButtCheckPageData?.whyAssanaSolution4Para}</p>
                            <img src={assanaButtCheckPageData?.whyAssanaSolution3Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>



                    <div className='w-full group flex justify-center items-center hover:scale-110 transition-transform duration-500'>
                        <div className='w-70 sm:w-90 shadow  bg-[#EC7979] rounded-3xl flex flex-col  items-center p-2 py-8 text-white'>
                            <h1 className='text-2xl text-center font-bold font-[Raleway] mt-10'>{assanaButtCheckPageData?.whyAssanaSolution4Heading}</h1>
                            <p className='text-lg font-[Raleway] text-center mt-4'>{assanaButtCheckPageData.whyAssanaSolution4Para}</p>
                            <img src={assanaButtCheckPageData?.whyAssanaSolution4Img} alt='pelvicTeam' className='h-30 mt-10 self-end ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AssanaButtCheckWhyAssana
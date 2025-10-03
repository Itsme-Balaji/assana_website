import React from 'react'
import category from '../../assets/images/category.png'
const Category = ({problems}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden w-[95%] '>
            <h1 className='font-[Raleway] smallShadow lg:textShadow text-center  text-xl sm:text-4xl  font-semibold mt-15  lg:mt-30 lg:w-[80%] m-auto'>
                    We offer a multidisciplinary approach to colorectal cancer care, ensuring personalized and effective treatment plans.

            </h1>
            <div className='grid lg:grid-cols-3 mt-10 lg:mt-30 gap-x-4'>
                <div className='flex flex-col justify-center items-start lg:items-center'>
                    <div>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>Surgery</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Surgery_Para1}</p>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%]'>{problems?.What_is_Surgery_Para2}</p>
                    </div>
                    <div className=''>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>Radiation Therapy</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] '>{problems?.What_is_RadiationTherapy_Para}</p>
                    </div>
                </div>
                <div className='hidden lg:flex justify-center items-center'>
                   <div className='bg-[] h-120 w-90 rounded-3xl'>
                        <img src={problems?.Treatment_Plan_Image} alt='' className='h-full w-full rounded-3xl object-cover' />
                    </div> 
                </div>
                <div className='flex flex-col justify-center items-center lg:items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex flex-col lg:items-end'>  
                            <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold'>Chemotherapy</h1>
                            <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.What_is_Chemotherapy_Para}</p>
                        </div>

                        
                    <div className='flex flex-col lg:items-end'>  
                        <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-8'>Robotic Surgery</h1>
                        <p className='text-base sm:text-lg font-[Raleway] mt-3 w-[100%] lg:text-right'>{problems?.What_is_RoboticSurgery_Para}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category
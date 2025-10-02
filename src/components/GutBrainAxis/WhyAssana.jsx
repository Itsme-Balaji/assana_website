import React from 'react'

const WhyAssana = ({gutBrainAxisPageData}) => {
  return (
    <section className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
        <div className='w-[95%] m-auto'>
            <h1 className='font-[Raleway] smallShadow lg:textShadow  text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10  lg:mt-30 lg:w-[60%] m-auto'>
                    {gutBrainAxisPageData?.whyAssanaHeading}
            </h1>
            <p className='text-base sm:text-lg text-center  font-[Raleway]  lg:w-[80%] m-auto mt-8'>{gutBrainAxisPageData?.whyAssanaSolution1Para1}</p>
            <p className='text-base sm:text-lg text-center  font-[Raleway] mt-5 lg:w-[80%] m-auto'>{gutBrainAxisPageData?.whyAssanaSolution1Para2}</p>
        </div>
    </section>
  )
}

export default WhyAssana
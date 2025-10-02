import React from 'react'
import treat1 from '../assets/images/treat1 (1).png'   
import treat2 from '../assets/images/treat2.png'
import treat3 from '../assets/images/treat3.png'
import treat4 from '../assets/images/treat4.png'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"


const PlevicAssanaTreat = () => {

  const [assanaTreat, setassanaTreat] = useState([]);

    
        
            useEffect(()=>{
                axios.get('https://assana-doctorwebsite-backend.vercel.app/api/assanaTreat/dataGet')
                .then((response) => {
                    setassanaTreat(response.data.data);
                })
                .catch((error) => {
                console.error("Error:", error);

  
                });
        
            },[])
  


  return (
    <section>
      <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
          <div className='w-[95%] m-auto'>
             <h1 className='font-[Raleway] smallShadow lg:textShadow text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30 '>
                    {assanaTreat?.Heading}
                </h1>

                <div className='grid lg:grid-cols-4 mt-4 lg:mt-10 bg-[]'>
                    <div className='flex flex-col justify-center items-center mt-5 lg:mt-30 bg-[]'>
                      <div className='h-65 w-full rounded-2xl bg-[] hover:scale-110 transition-transform duration-500 '>
                        <img src={assanaTreat?.TreatmentImg1} alt='' className='h-full w-full rounded-2xl' />
                      </div>
                      <h1 className='font-[Raleway] text-xl mt-2 font-semibold'>{assanaTreat?.Treatment1}</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-5 bg-[#]'>
                      <div className='h-65 w-full rounded-2xl bg-[] hover:scale-110 transition-transform duration-500 '>
                        <img src={assanaTreat?.TreatmentImg2} alt='' className='h-full w-full rounded-2xl' />
                      </div>
                      <h1 className='font-[Raleway] text-xl mt-2 font-semibold'>{assanaTreat?.Treatment2}</h1>
                    </div>
                    
                    <div className='flex flex-col justify-center items-center mt-5 lg:mt-30 bg-[]'>
                      <div className='h-65 w-full rounded-2xl bg-[] hover:scale-110 transition-transform duration-500 '>
                        <img src={assanaTreat?.TreatmentImg3} alt='' className='h-full w-full rounded-2xl' />
                      </div>
                      <h1 className='font-[Raleway] text-xl mt-2 font-semibold'>{assanaTreat?.Treatment3}</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center mt-5 lg:mt-0  bg-[#]'>
                      <div className='h-65 w-full rounded-2xl bg-[] hover:scale-110 transition-transform duration-500 '>
                        <img src={assanaTreat?.TreatmentImg4} alt='' className='h-full w-full rounded-2xl' />
                      </div>
                      <h1 className='font-[Raleway] text-xl mt-2 font-semibold'>{assanaTreat?.Treatment4}</h1>
                    </div>
                </div>
          </div>
      </div>
    </section>
  )
}

export default PlevicAssanaTreat
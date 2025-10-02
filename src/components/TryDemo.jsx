import React, { useEffect } from 'react'
import star from '../assets/images/star.png'
import axios from 'axios';
import { useState } from 'react';

const TryDemo = ({setChatBot}) => {

     const [getStartedComponentData, setSetStartedComponentData] = useState([]);
        
            useEffect(()=>{
                axios.get('https://assana-doctorwebsite-backend.vercel.app/api/getStartedComponent/dataGet')
                .then((response) => {
                    setSetStartedComponentData(response.data.data);
        
                })
                .catch((error) => {
                console.error("Error:", error);
                });
        
            },[])

 console.log("getStartedComponentData",getStartedComponentData);
 
  return (
    <section className='max-w-full m-auto overflow-hidden mt-10'>

        <div className='py-20 w-full bg-[]   bg-no-repeat bg-center bg-cover mt-10 flex flex-col justify-center items-center ' style={{
            backgroundImage: `url(${getStartedComponentData?.backgroundImg})`,
        }}>
            <div>
            <h1 className="font-[Raleway] text-3xl sm:text-4xl md:text-6xl font-semibold  text-center">{getStartedComponentData?.Heading}</h1>
            <p className='text-base sm:text-lg font-[Raleway] text-center w-[95%] sm:w-[70%] m-auto mt-6'> {getStartedComponentData?.subHeading}</p>
        </div>


            <div className="flex justify-center items-center gap-x-2 sm:gap-x-12 mt-8">
            <button onClick={()=>setChatBot((prev)=>!prev)} className="bg-[white] text-xs sm:text-lg p-3 rounded-4xl px-4 sm:px-12 font-semibold hover:text-white 
                hover:bg-[#F05A5A] flex justify-center items-center gap-x-1">
                <img src={star} alt='star' className='mt-1 ' />
                Start Free Symptom Check
            </button>

        </div>
        </div>


    </section>
  )
}

export default TryDemo
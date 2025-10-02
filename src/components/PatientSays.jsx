import React, { useEffect } from 'react'
import Slider from 'react-slick';
import { testimonialData } from '../assets/data'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useState } from 'react';
import patientFeedback from '../assets/images/patientFeedback.png'

const PatientSays = () => {


      const [patientFeedbacksComponentData, setPatientFeedbacksComponentData] = useState([]);
    
        useEffect(()=>{
            axios.get('https://assana-doctorwebsite-backend.vercel.app/api/patientFeedbackComponent/dataGet')
            .then((response) => {
                setPatientFeedbacksComponentData(response.data.data);
    
            })
            .catch((error) => {
            console.error("Error:", error);
            });
    
        },[])


      const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !right-2 z-10`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !left-2 z-10`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  };

 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  return (
    <section className='max-w-[1600px]  m-auto overflow-hidden'>
        <h1 className="font-[Raleway] text-black text-2xl smallShadow lg:textShadow sm:text-4xl lg:text-6xl font-semibold mt-6 lg:mt-30 text-center">What Our Patients Say</h1>
        <p className="font-[Raleway] text-base sm:text-xl lg:font-semibold mt-4 text-center">{patientFeedbacksComponentData?.componentHeading}</p>

        <Slider {...settings} className="w-[100%] sm:w-[85%] m-auto mt-8 p-4 bg-[] ">
        {patientFeedbacksComponentData.map((data, index) => (
          <div key={index}>
            <div className=" shadow-xl rounded-xl w-full max-w-4xl m-auto sm:grid grid-cols-3 bg-[]">
              <div className="flex justify-center  items-center  bg-[] p-2 md:p-4">
                <div className='h-60 md:h-70 w-60 md:w-70 rounded-xl'>
                <img
                  src={data?.patientImg}
                  alt="client"
                  className="h-full  w-full"
                />
                </div>
              </div>
              <div className="  col-span-2 bg-[] pl-2 p-6 sm:p-8 md:pt-18">
                <p className="text-[13px] md:text-[15px] lg:text-[16px] text-justify font-[Raleway]">
                  {data?.patientFeeback}
                </p>
                <h1 className="text-[13px] md:text-[15px] lg:text-[16px] mt-3  font-[Raleway] font-bold">
                  {data?.patientName}
                </h1>
                <p className="text-xs text-[#808080] sm:text-sm mt-1  font-[Raleway]">
                  {data?.patientProblem}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </section>
  )
}

export default PatientSays
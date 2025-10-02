import React, { useEffect, useState } from 'react'
import {faqList} from '../assets/data'
import axios from 'axios';

const FrequentlyQA = () => {

  const [askedQuestionsComponentData, setAskedQuestionsComponentData] = useState([]);
      
          useEffect(()=>{
              axios.get('https://assana-doctorwebsite-backend.vercel.app/api/askedQuestionsComponent/dataGet')
              .then((response) => {
                  setAskedQuestionsComponentData(response.data.data);
      
              })
              .catch((error) => {
              console.error("Error:", error);
              });
      
          },[])
          
          console.log('askedQuestionsComponentData',askedQuestionsComponentData);
          
 const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-[1600px] m-auto overflow-hidden w-[95%] lg:w-[75%]'>
      <h1 className="font-[Raleway] smallShadow lg:textShadow  text-black text-3xl sm:text-4xl lg:text-6xl font-semibold mt-8 lg:mt-30 text-center">{askedQuestionsComponentData[0]?.componentHeading}</h1>
      <div className='mt-14'>
        {askedQuestionsComponentData.map((faq, index) => 
          <div key={index} className="mb-4  rounded-xl overflow-hidden ">
            <button
              className="w-full flex justify-between font-medium items-center px-4 py-5 text-base sm:text-xl font-[Raleway] bg-[#F05A5A14] text-left  hover:bg-[#F05A5A14]"
              onClick={() => handleToggle(index)}
            >
              {faq.questionHeading}
              <span className={`transform transition-transform ${openIndex === index ? "rotate-45" : ""} text-3xl` }>
                +
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 bg-[#F05A5A14] font-[Raleway] text-[black] font-medium text-base ">{faq.answerPara}</div>
            )}
          </div>
        )}</div>
      

    </section>
  )
}

export default FrequentlyQA
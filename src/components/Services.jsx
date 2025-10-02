import React, { useEffect, useState } from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { serviceData } from "../assets/data";
import axios from "axios";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { Link } from "react-router-dom";

const Services = ({setChatBot}) => {

      const [servicesComponentData, setServicesComponentData] = useState([]);
    
        useEffect(()=>{
            axios.get('https://assana-website-backend.vercel.app/api/servicesComponent/dataGet')
            .then((response) => {
                setServicesComponentData(response.data.data);
    
            })
            .catch((error) => {
            console.error("Error:", error);
            });
    
        },[])


        

  const [activeBox, setActiveBox] = useState(null);

  const toggleBox = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <section className="max-w-[1600px] m-auto overflow-hidden mb-8" id="services">
      <div className='w-[95%] m-auto'>
      <h1 className="font-[Raleway] smallShadow lg:textShadow text-black text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30 text-center">
        {servicesComponentData[0]?.componentHeading}
      </h1>

      <div className="mt-12">
        {servicesComponentData.map((item, index) => {
          const isActive = activeBox === item._id;

          return (
            <div key={index}>
              {/* Service Header */}
              <div
                className="bg-[#ffd9d961] w-full h-21 sm:h-25 rounded-2xl flex justify-between items-center mt-12 cursor-pointer shadow-lg"
                onClick={() => toggleBox(item._id)}
              >
                <h1 className="text-lg sm:text-3xl lg:text-4xl font-bold font-[Raleway] ml-6 lg:ml-12">
                  {item.serviceHeading}
                </h1>

                {/* Animated Icon Circle */}
                <div
                  className={`bg-[white] flex justify-center items-center rounded-full transition-all duration-500 ease-in-out ${
                    isActive ? "h-20  sm:h-24 w-20 sm:w-24 relative top-0" : "h-24 sm:h-28 w-24 sm:w-28 relative top-3"
                  }`}
                >
                  <div
                    className={`bg-[#EC7979] flex justify-center items-center rounded-full transition-all duration-500 ease-in-out ${
                      isActive ? "h-16 sm:h-20 w-16 sm:w-20" : "h-20 sm:h-24 w-20 sm:w-24"
                    }`}
                  >
                    {isActive ? (
                      <BsArrowUpRight className="text-3xl font-extrabold transition-transform duration-500 rotate-0" />
                    ) : (
                      <BsArrowDownRight className="text-3xl font-extrabold transition-transform duration-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable Box */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isActive
                    ? "max-h-[1000px] opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#EC7979] rounded-2xl p-4 sm:p-10">
                  <h1 className="text-2xl lg:text-4xl font-bold font-[Raleway] text-white">
                    {/* {item.serviceOpenHeading} */}
                  </h1>
                  <p className="text-white text-base sm:text-lg mt-4">{item.serviceOpenPara1}</p>
                  <p className="text-white text-base sm:text-lg mt-4">{item.serviceOpenPara2}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center group  mt-10 mb-8 ">
              <button onClick={()=>setChatBot((prev)=>!prev)} className="bg-[#EC7979] text-sm sm:text-lg p-3 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                Get Started
                <IoIosArrowDroprightCircle 
                className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                />
            </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;

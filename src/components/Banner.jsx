import React, { useEffect, useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import axios from 'axios'
import { Link } from 'react-router-dom'

const Banner = () => {
  const [bannerComponentData, setBannerComponentData] = useState([]);
  const [openCross, setOpenCross] = useState(null); // ✅ Track which cross is open on mobile

  useEffect(() => {
    axios.get('https://assana-doctorwebsite-backend.vercel.app/api/bannerComponent/dataGet')
      .then((response) => {
        setBannerComponentData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // ✅ Toggle for mobile
  const handleToggle = (id) => {
    if (openCross === id) {
      setOpenCross(null);
    } else {
      setOpenCross(id);
    }
  };

  return (
    <section className="bg-transparent" id="banner">
      <div className="max-w-[1600px] m-auto w-[95%]">

        {/* Heading */}
        <h1 className="text-center mt-25 text-base sm:text-2xl font-semibold font-[Raleway] text-[#EC7979] w-[90%] sm:w-[70%] lg:w-[100%] m-auto">
          {bannerComponentData?.upperContent}
        </h1>

        <h1 className="text-6xl sm:text-9xl lg:text-[210px] text-black font-semibold text-center font-[Raleway] leading-none relative right-3 sm:right-5 lg:right-7 top-8 lg:top-20">
          {bannerComponentData?.bannerCenterHead}
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Left Column */}
          <div className="order-2 lg:order-1">
            {/* Cross 1 */}
            <div
              className="flex relative items-center gap-4 mt-15 group cursor-pointer overflow-hidden p-4"
              onClick={() => handleToggle(1)}
            >
              <div className="relative h-30 w-30 rotate-[-30deg] rounded-2xl overflow-hidden 
                transition-all duration-500 ease-in-out transform 
                group-hover:rotate-[0deg] group-hover:-translate-y-8 group-hover:scale-75 z-30">
                <img src={bannerComponentData?.bannerleftImg1} alt="cross1" className="w-full h-full object-cover" />
              </div>
              <div className={`
                border border-[#EC7979] rounded-2xl py-3 transition-all duration-500 ease-in-out
                w-60 absolute left-27 top-3 z-20 overflow-hidden
                ${openCross === 1 ? "bg-[#EC7979] max-h-40 opacity-100" : "max-h-14 opacity-100"}
                lg:group-hover:bg-[#EC7979] lg:group-hover:max-h-40 lg:group-hover:opacity-100
              `}>
                <h1 className="text-lg font-semibold text-black text-center px-3">{bannerComponentData?.bannerleftImg1Head}</h1>
                <p className="text-white px-3 text-center break-words max-h-20 overflow-y-auto hide-scrollbar">
                  {bannerComponentData?.bannerleftImg1Para}
                </p>
              </div>
            </div>

            {/* Cross 2 */}
            <div
              className="flex relative justify-end items-center gap-4 group cursor-pointer overflow-hidden p-4 mt-5 lg:mt-0"
              onClick={() => handleToggle(2)}
            >
              <div className="relative right-49 h-30 w-30 rotate-[-30deg] rounded-2xl overflow-hidden 
                transition-all duration-500 ease-in-out transform 
                group-hover:rotate-[0deg] group-hover:-translate-y-8 group-hover:scale-75 z-30">
                <img src={bannerComponentData?.bannerleftImg2} alt="cross2" className="w-full h-full object-cover" />
              </div>
              <div className={`
                border border-[#EC7979] rounded-2xl py-3 transition-all duration-500 ease-in-out
                w-60 absolute right-0 top-3 z-20 overflow-hidden
                ${openCross === 2 ? "bg-[#EC7979] max-h-40 opacity-100" : "max-h-14 opacity-100"}
                lg:group-hover:bg-[#EC7979] lg:group-hover:max-h-40 lg:group-hover:opacity-100
              `}>
                <h1 className="text-lg font-semibold text-black text-center px-3">{bannerComponentData?.bannerleftImg2Head}</h1>
                <p className="text-white px-3 text-center break-words max-h-20 overflow-y-auto hide-scrollbar">
                  {bannerComponentData?.bannerleftImg2Para}
                </p>
              </div>
            </div>

            {/* Cross 3 */}
            <div
              className="flex relative items-center gap-4 group cursor-pointer overflow-hidden p-4 mt-5 lg:mt-0"
              onClick={() => handleToggle(3)}
            >
              <div className="relative h-30 w-30 rotate-[-30deg] rounded-2xl overflow-hidden 
                transition-all duration-500 ease-in-out transform 
                group-hover:rotate-[0deg] group-hover:-translate-y-8 group-hover:scale-75 z-30">
                <img src={bannerComponentData?.bannerleftImg3} alt="cross3" className="w-full h-full object-cover" />
              </div>
              <div className={`
                border border-[#EC7979] rounded-2xl py-3 transition-all duration-500 ease-in-out
                w-60 absolute left-27 top-3 z-20 overflow-hidden
                ${openCross === 3 ? "bg-[#EC7979] max-h-40 opacity-100" : "max-h-14 opacity-100"}
                lg:group-hover:bg-[#EC7979] lg:group-hover:max-h-40 lg:group-hover:opacity-100
              `}>
                <h1 className="text-lg font-semibold text-black text-center px-3">{bannerComponentData?.bannerleftImg3Head}</h1>
                <p className="text-white px-3 text-center break-words max-h-20 overflow-y-auto hide-scrollbar">
                  {bannerComponentData?.bannerleftImg3Para}
                </p>
              </div>
            </div>

            {/* Cross 4 */}
            <div
              className="flex relative justify-end items-center gap-4 group cursor-pointer overflow-hidden p-4 mt-5 lg:mt-0"
              onClick={() => handleToggle(4)}
            >
              <div className="relative right-49 h-30 w-30 rotate-[-30deg] rounded-2xl overflow-hidden 
                transition-all duration-500 ease-in-out transform 
                group-hover:rotate-[0deg] group-hover:-translate-y-8 group-hover:scale-75 z-30">
                <img src={bannerComponentData?.bannerleftImg4} alt="cross4" className="w-full h-full object-cover" />
              </div>
              <div className={`
                border border-[#EC7979] rounded-2xl py-3 transition-all duration-500 ease-in-out
                w-60 absolute right-0 top-3 z-20 overflow-hidden
                ${openCross === 4 ? "bg-[#EC7979] max-h-40 opacity-100" : "max-h-14 opacity-100"}
                lg:group-hover:bg-[#EC7979] lg:group-hover:max-h-40 lg:group-hover:opacity-100
              `}>
                <h1 className="text-lg font-semibold text-black text-center px-3">{bannerComponentData?.bannerleftImg4Head}</h1>
                <p className="text-white px-3 text-center break-words max-h-20 overflow-y-auto hide-scrollbar">
                  {bannerComponentData?.bannerleftImg4Para}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex justify-center order-1 lg:order-2">
            <img src={bannerComponentData?.bannerImg} alt="humanBody" className="h-130 mt-4 sm:mt-0 sm:h-[100%]" />
          </div>

          {/* Right Column */}
          <div className="hidden lg:flex flex-col justify-end items-end order-3">
            <h1 className="font-[Raleway] text-xl text-end w-[95%] mt-13">
              <span className="font-semibold">{bannerComponentData?.bannerrightParaHighlight}</span>{bannerComponentData?.bannerrightPara}
            </h1>
           
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner

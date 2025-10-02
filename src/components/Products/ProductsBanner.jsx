import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
// import productBanner from '../assests/images/productBanner.jpg'

const ProductsBanner = ({ productPageData }) => {
  return (
    <div
  className="mt-24 h-60 sm:h-110 md:h-140 lg:h-170 rounded-4xl w-full flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${productPageData?.productBannerImg})` }}
>
      <h1 className='text-xl sm:text-5xl lg:text-7xl font-bold text-center text-white sm:w-[90%] lg:w-[70%] smallShadow lg:textShadow'>
        {productPageData?.bannerHeading}
      </h1>

      <h1 className='text-sm sm:text-xl lg:text-2xl font-bold text-center text-white w-[90%] sm:w-[80%] lg:w-[50%] mt-2 sm:mt-6 smallShadow'>
        {productPageData?.bannerPara}
      </h1>

      <div className='mt-5 group'>
        <Link to={'/bookNow'}>
          <button className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
            Book Now
            <IoIosArrowDroprightCircle
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductsBanner

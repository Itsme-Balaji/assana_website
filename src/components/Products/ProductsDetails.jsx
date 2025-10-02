import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

import productImg1 from '../../assets/images/productImg1.png'
import productImg2 from '../../assets/images/productImg2.png'
import productImg3 from '../../assets/images/productImg3.png'
import productImg4 from '../../assets/images/productImg4.png'

  
const ProductsDetails = ({productPageData}) => {
  return (
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden'>
          <h1 className='font-[Raleway] smallShadow lg:textShadow text-black text-center  text-3xl sm:text-4xl lg:text-6xl font-semibold mt-10 lg:mt-30'>{productPageData?.productCommonHeading}</h1>
            <div className='grid grid-cols-1   lg:grid-cols-3 lg:grid-rows-2 gap-y-10 lg:gap-y-30 bg-[] w-[95%] lg:w-[85%] m-auto mt-10 lg:mt-25'>
               <div className='flex col-span-2 lg:col-span-1  justify-center lg:justify-start items-center bg-[] w-full order-1 lg:order-1'>
                    <div className='bg-[] relative flex justify-center h-70 sm:h-90 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={productPageData?.productImg1} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'></h1>
                    </div>
               </div>
               <div className='row-span-1 flex flex-col lg:justify-center col-span-2 bg-[] order-2 lg:order-2'>
                    <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold text-[#EC7979] '>{productPageData?.product1}</h1>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-2'>{productPageData?.productName1}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{productPageData?.productPara1}</p>

                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] font-semibold'>Price: <span className='text-[#0fc70f]
                    font-bold'>${productPageData?.productPrice1}</span></p>


                  <div className='mt-5 group flex  w-fit'>
                    <a href={productPageData?.productLink1} target='_blank' className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Buy Now
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </a>
                  </div>  

               </div>


               



              
               <div className='col-span-2 flex flex-col lg:justify-center order-4 lg:order-3'>
                    <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold text-[#EC7979] '>{productPageData?.product2}</h1>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-2'>{productPageData?.productName2}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{productPageData?.productPara2}</p>

                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] font-semibold'>Price: <span className='text-[#0fc70f]
                    font-bold'>${productPageData?.productPrice2}</span></p>


                  <div className='mt-5 group flex  w-fit'>
                    <a href={productPageData?.productLink2} target='_blank' className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Buy Now
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </a>
                  </div>  

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-end items-center h-full bg-[#] order-3 lg:order-4'>
                    <div className='bg-[] relative flex justify-center h-70 sm:h-90 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={productPageData?.productImg2} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'></h1>
                         
                    </div>
               </div>



               <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-5 bg-[]'>
                    <div className='bg-[] relative flex justify-center h-70 sm:h-90 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={productPageData?.productImg3} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'></h1>

                    </div>
               </div>
               <div className='col-span-2 flex flex-col lg:justify-center order-6'>
                    <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold text-[#EC7979] '>{productPageData?.product3}</h1>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-2'>{productPageData?.productName3}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{productPageData?.productPara3}</p>

                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] font-semibold'>Price: <span className='text-[#0fc70f]
                    font-bold'>${productPageData?.productPrice3}</span></p>


                  <div className='mt-5 group flex  w-fit'>
                    <a href={productPageData?.productLink3} target='_blank' className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Buy Now
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </a>
                  </div> 

               </div>


               



               
               <div className='col-span-2 flex flex-col lg:justify-center order-8 lg:order-7'>
                    <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold text-[#EC7979] '>{productPageData?.product4}</h1>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-2'>{productPageData?.productName4}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{productPageData?.productPara4}</p>

                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] font-semibold'>Price: <span className='text-[#0fc70f]
                    font-bold'>${productPageData?.productPrice4}</span></p>


                  <div className='mt-5 group flex  w-fit'>
                    <a href={productPageData?.productLink4} target='_blank' className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Buy Now
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </a>
                  </div> 

               </div>
               <div className='flex col-span-2 lg:col-span-1 justify-center  lg:justify-end items-center order-7 lg:order-8  bg-[]'>
                    <div className='bg-[] relative flex justify-center h-70 sm:h-90 w-80 rounded-3xl' data-aos="fade-left" data-duration="1000">
                        <img src={productPageData?.productImg4} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'></h1>
                         
                    </div>
               </div>





                <div className='flex col-span-2 lg:col-span-1 justify-center lg:justify-start items-center order-9 bg-[]'>
                    <div className='bg-[] relative flex justify-center h-70 sm:h-90 w-80 rounded-3xl' data-aos="fade-right" data-duration="1000">
                        <img src={productPageData?.productImg5} className='h-full w-full rounded-3xl' alt='' />
                        <h1 className='text-2xl text-white font-bold absolute top-7 p-2 text-center'></h1>
                    </div>
               </div>
               <div className='col-span-2 flex flex-col lg:justify-center order-10'>
                    <h1 className='text-lg sm:text-xl font-[Raleway] font-semibold text-[#EC7979] '>{productPageData?.product5}</h1>
                    <h1 className='text-2xl sm:text-3xl font-[Raleway] font-semibold mt-2'>{productPageData?.productName5}</h1>
                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%]'>{productPageData?.productPara5}</p>

                    <p className='text-base sm:text-lg font-[Raleway] mt-2 w-[100%] font-semibold'>Price: <span className='text-[#0fc70f]
                    font-bold'>${productPageData?.productPrice5}</span></p>


                  <div className='mt-5 group flex  w-fit'>
                    <a href={productPageData?.productLink5} target='_blank' className="bg-[#EC7979] text-sm sm:text-lg p-2 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                        transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                        Buy Now
                        <IoIosArrowDroprightCircle 
                        className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                        />
                    </a>
                  </div> 

               </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsDetails
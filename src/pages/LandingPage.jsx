import React, { useEffect, useState } from 'react'
import frame from '../assets/images/frame.png'
import { FaStar } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoTriangleSharp } from "react-icons/io5";
import { ImMail4 } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import frontBackground from '../assets/images/frontBackground.png'
import assanaLandingLogo from '../assets/images/assanaLandingLogo.png'
import doctor from '../assets/images/doctor.png'
import Spinner from '../components/Spinner';

const LandingPage = () => {

    const [expertise, setExpertise] = useState(false);
    const [landingPageData, setLandingPageData] = useState([]);
      const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://assana-doctorwebsite-backend.vercel.app/api/landPage/dataGet')
        .then((response) => {
            setLandingPageData(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        });
    },[])

    //  Scroll detection to navigate when reaching bottom
 //  Scroll detection to navigate when reaching bottom
//  Scroll detection to navigate when reaching bottom
useEffect(() => {
  // Always reset flag when entering LandingPage
  sessionStorage.removeItem("landingRedirected");

  // Reset scroll to top
  window.scrollTo({ top: 0, behavior: "auto" });

  let redirected = false;

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (
      !redirected &&
      scrollTop + clientHeight >= scrollHeight - 50 &&
      !sessionStorage.getItem("landingRedirected")
    ) {
      redirected = true;

      window.scrollTo({ top: scrollHeight, behavior: "smooth" });

      setTimeout(() => {
        sessionStorage.setItem("landingRedirected", "true");
        navigate("/home");
      }, 1000);
    }
  };

  // Delay attaching listener so "already at bottom" won’t trigger instantly
  const timer = setTimeout(() => {
    window.addEventListener("scroll", handleScroll);
  }, 300);

  return () => {
    clearTimeout(timer);
    window.removeEventListener("scroll", handleScroll);
  };
}, [navigate]);






    console.log("landingPageData",landingPageData);

  if (loading || !landingPageData) {
    return <Spinner />;  // <-- Show spinner until data loads
  }
    

  return (
    <section className='overflow-hidden' style={{
            backgroundImage: `url(${landingPageData?.background})`,backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"
        }}>
        <div className="fixed inset-0 z-20">

</div>
 
        <div className='bg-[] overflow-y-auto   sm:bg-[#] md:bg-[#] lg:bg-[] relative min-h-screen  z-40 max-w-[1600px]  w-[95%] lg:w-[90%] m-auto  hide-scrollbar [@media(min-width:1024px)_and_(max-width:1450px)]:w-[95%]'>
            <div className='flex justify-center '>
                <img src={landingPageData?.logo} alt='assanaLandingLogo' className='h-15 sm:h-20' />
            </div>

            <div className='lg:grid grid-cols-2 mt-10 lg:mt-0 w-[95%] md:w-[90%] lg:w-[85%] m-auto [@media(min-width:1024px)_and_(max-width:1678px)]:w-[99%]'>
                <div className='bg-[] '>
                    <div className='text-white text-6xl sm:text-8xl lg:text-9xl font-bold leading-[1.1] [@media(min-width:1024px)_and_(max-width:1450px)]:text-8xl'>
                        <h1 className=''>{landingPageData?.leftContent1}</h1>
                        <h1>{landingPageData?.leftContent2}</h1>
                        <h1>{landingPageData?.leftContent3}</h1>
                    </div>
                    <div className='text-white text-3xl sm:text-5xl lg:text-6xl font-semibold mt-5 lg:mt-10'>
                        <h1 className='tracking-wide'>{landingPageData?.leftPara1}</h1>
                        <div className='hidden lg:flex items-center mt-10 gap-x-2 '>
                            <img src={frame} alt='frame' className='h-10' />
                            <span className='text-2xl font-normal'>{landingPageData?.leftPara2}</span> 
                        </div>
                    </div>

                </div>

                
                <div className='bg-[]'>
                    <div className='flex flex-col items-start lg:items-end'>
                        <h1  className='text-lg sm:text-2xl font-normal text-white w-[75%] text-left lg:text-right mt-6 lg:mt-30'>{landingPageData?.rightPara1}</h1>
                        <p className='text-base sm:text-lg text-white mt-4'>4.9 <FaStar className="inline text-[#FD8B5D] relative bottom-0.5" /> ON Google Reviews</p>
                        <div className="inline-flex items-center group mt-5">
                         <Link to={'/bookNow'}>  <button className="bg-[#FF5815] text-base sm:text-xl p-3 rounded-4xl pr-0 sm:pr-3 px-6 sm:px-12 group-hover:pr-8 font-semibold text-white 
                                transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center ">
                                Book a discreet Consultation
                                <IoIosArrowDroprightCircle 
                                className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                                transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                                />
                            </button></Link> 
                        </div>
                        <h1 className='text-lg text-white w-[47%] text-right mt-5 hidden lg:block'>{landingPageData?.rightPara2}</h1>
                    </div>

                    <div className='bg-[] w-[70%] ml-auto flex flex-col justify-center items-center mt-5'>
                        <div className='h-30 sm:h-35 w-30 sm:w-35'>
                            <img src={landingPageData?.doctorImage} className=' rounded-full object-cover' alt='doctor' />
                        </div>
                         <div className='bg-white p-1 pt-2 sm:pt-0 sm:p-2 md:p-4 w-53 sm:w-100 md:w-110 rounded-2xl' onClick={()=>setExpertise((prev)=>!prev)}>
                            <h1 className='text-center text-sm sm:text-lg font-bold'>{landingPageData?.doctorName}</h1>
                            <h1 className='text-center text-[9px] sm:text-sm mt-0.5 sm:mt-1'> {landingPageData?.doctorQualification}</h1>
                            <h1 className='text-center text-[9px] sm:text-sm mt-0.5 sm:mt-1 text-[#EC7979]'>{landingPageData?.doctorWork}</h1>
                         </div>
                        {expertise && (
                         <div className='flex flex-col relative'>
                            <div className='absolute top-0 right-[-100px] sm:right-[-180px]'>
                                <IoTriangleSharp className='text-white ml-10 '/>
                            <div className='bg-white p-2 h-25 w-50 sm:w-90 rounded-2xl overflow-y-auto'>
                                <h1 className='font-bold text-center'>Expertise</h1>
                                <p className='p-2 sm:p-3 break-words whitespace-normal text-sm sm:text-base'></p>
                            </div>
                         </div> </div>)}
                    </div>
                </div>

            </div>

            <div className='bg-[] lg:grid grid-cols-4 h-20 w-[100%] mt-30'>
                <div className='bg-[#] hidden lg:flex gap-x-2 items-end'>
                    <ImMail4 className='inline-block text-2xl mb-5 text-[#FF5815]'/>
                    <span className='text-white text-lg mb-5'>{landingPageData?.email}</span>
                </div>
                <div className='bg-[#] flex col-span-2 flex-col justify-center items-center'>
                  <Link to={"/home"}>  <div className='bg-[black] flex flex-col justify-center  items-center h-15 md:h-15 w-15 md:w-15 rounded-full'>
                        <MdKeyboardDoubleArrowDown className='inline text-white text-3xl md:text-4xl relative font-bold bottom-4 arrow1Animation'/>
                        
                    </div></Link>
                    <h1 className='text-sm sm:text-xl text-white mt-6 mb-5'>{landingPageData?.scrollPara}</h1>
                    
                </div>
                <div className='bg-[#] hidden lg:flex justify-end items-end gap-x-2'>
                    <div className=''>
                      <ImLocation2 className='inline-block text-2xl mb-10 text-[#FF5815]'/>
                    </div>
                    <p className='text-white text-lg mb-5'>{landingPageData?.address}</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default LandingPage

import axios from 'axios';
import React, { useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";


const PlevicBooking = () => {

      const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone:"",
    userMessage: '',
  });

     
  const [submittedStatus, setSubmittedStatus] = useState("");

  const inputHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.replace(/^\s+/, ''),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://medora-ai-website-backend.vercel.app/form/dataAdd', formData)
    .then((response) => {
      const message = response.data.message;
      console.log("Server Response:", message);
      if (message==="Submitted") {
        toast.success("Form Submitted")
        setSubmittedStatus("Submitted");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    console.log('Form Data:', formData);
  };


  return (
    
    <section>
        <div className='max-w-[1600px] bg-[] m-auto overflow-hidden mt-20'>
            <div className="mt-4 lg:mt-12 w-[95%] max-w-[1600px] m-auto mb-8 grid lg:grid-cols-2 gap-6 bg-[#ec79795b] rounded-3xl">
        {/* Text Side */}
        <div className="flex flex-col justify-center items-center px-4 sm:px-12 py-6">
          <div>
            <h1 className="font-[Raleway] font-bold text-3xl sm:text-5xl lg:text-6xl ">
              Ready to Feel Better—Naturally?
            </h1>
            <p className="font-[Raleway] text-lg sm:text-xl mt-7 text-[#] text-">
              Take the first step toward a healthier gut and a balanced life. Our certified wellness team is here to guide you with personalized care, natural therapies, and modern diagnostics.
            </p>
            <p className='font-[Raleway] text-lg sm:text-xl mt-7'>Call <span className='text-[#EC7979] font-[Sora] font-bold'>+91 8035735721</span> to book an appointment instantly through our AI voice system.</p>
          </div>
        </div>

        {/* Form Side */}
        <div>
          {!submittedStatus?
          <>
          <h1 className="font-[Sora] font-bold text-center text-2xl lg:text-3xl mt-6 lg:mt-12">
            Get in Touch
          </h1>
       
          <form onSubmit={handleSubmit} className="mt-4 lg:mt-8 space-y-4 px-4 sm:px-8">
            <input type="text" name="userName" value={formData.userName} onChange={inputHandler} placeholder="Name" required className="bg-white h-12 lg:h-16 w-full rounded-xl px-4 border border-gray-300"/>
            <input type="email" name="userEmail" value={formData.userEmail} onChange={inputHandler} placeholder="E-mail" required className="bg-white h-12 lg:h-16 w-full rounded-xl px-4 border border-gray-300" />
            <input
              type="text"
              name="userPhone"
              value={formData.userPhone}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, ""); // keep only numbers
                if (onlyNums.length <= 10) {
                  setFormData((prev) => ({
                    ...prev,
                    userPhone: onlyNums,
                  }));
                }
              }}
              placeholder="Phone Number"
              required
              maxLength={10} // also prevents more than 10 digits
              className="bg-white h-12 lg:h-16 w-full rounded-xl px-4 border border-gray-300"
            />
            <textarea name="userMessage" value={formData.userMessage} onChange={inputHandler} placeholder="Message (optional)"  rows={5} className="bg-white lg:h-30 w-full rounded-xl px-4 py-3 border border-gray-300"></textarea>
            <div className="text-center  lg:mt-0 ">
               <div className=" flex flex-col lg:flex-row justify-center gap-y-4 gap-x-4 items-center  mb-8">
                <div className='group'>
                <button className="bg-[#EC7979] text-sm sm:text-lg p-3 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                    transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                    Book a discreet Consultation
                    <IoIosArrowDroprightCircle 
                    className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                    />
                </button>
                </div>
                <div className='group'>
                <button className="bg-[#EC7979] text-sm sm:text-lg p-3 rounded-4xl pr-0 sm:pr-3 px-8 sm:px-12 group-hover:pr-8 font-semibold group-hover:text-white 
                    transition-all duration-300 ease-in-out group-hover:bg-[#F05A5A] flex items-center">
                    AI Voice call
                    <IoIosArrowDroprightCircle 
                    className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-300 ease-in-out text-3xl sm:text-4xl ml-3"
                    />
                </button>
               </div> 
            </div>
            </div>
          </form>
          </>
          :<div className='bg-[] sm:h-20 lg:h-130 mb-10 flex justify-center items-center'>
            <h1 className='font-[Righteous] text-[#18a89d] font-bold text-3xl sm:text-5xl lg:text-7xl leading-[50px] tracking-[1px] lg:tracking-[5px] sm:leading-[70px] lg:leading-[80px] text-center'>We will Contact Soon...</h1>
            </div>}
        </div>
      </div>
            
        </div>
    </section>
  )
}

export default PlevicBooking
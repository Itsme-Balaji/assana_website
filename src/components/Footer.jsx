import React from 'react'
import assanaLogo from '../assets/images/assanaLogo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerOuickLinks,footerServices,footerContact } from '../assets/data';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
  return (
    <section className='max-w-[1600px] m-auto overflow-hidden'>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 mt-8 lg:mt-20 ml-6 sm:ml-16 md:ml-0 w-[95%] m-auto'>
          <div className=' bg-[] flex flex-col justify-center items-start md:items-center'>
            <Link to={'/'} onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}><img  src={assanaLogo} alt='assanaLogo' className='h-15' /></Link>
            <div className='flex gap-x-4 mt-10 text-2xl text-[#ED7D7D]'>
              <FaFacebookSquare />
              <FaInstagram />
              <FaXTwitter />

            </div>
          </div>
          <div className='bg-[] font-[Raleway] flex flex-col '>
            <h1 className='font-bold mb-2 mt-10'>Quick Links</h1>
            {footerOuickLinks.map((item,index)=>(
              <Link to={item.link}><h1 key={index} className='font-[Raleway] text-[#00000094] font-semibold mt-1 cursor-pointer'>{item.title}</h1></Link>
            ))}
          </div>
          <div className='bg-[] font-[Raleway]'>
            <h1 className='font-bold mb-2 mt-10'>Services</h1>
            {footerServices.map((item,index)=>(
              <HashLink  key={index} smooth to="/home#services" ><h1 key={index} className='font-[Raleway] text-[#00000094] font-semibold mt-1 cursor-pointer hover:text-[8d454594]'>{item.title}</h1></HashLink>
            ))}
          </div>
          <div className='bg-[] font-[Raleway]  '>
            <h1 className='font-bold mb-2 mt-10'>Contact Info</h1>
            {footerContact.map((item,index)=>(

              <div className='flex items-center gap-x-2'>
                {item.icon}
                <h1 key={index} className='font-[Sora] text-[#00000094] font-semibold mt-1 w-[95%]'>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
        <hr className='text-[#ED7D7D] mt-10 w-[80%] m-auto' />
        <h1 className='font-bold text-center mt-10 mb-10 text-[#ED7D7D] md:text-black'>©2025 by Assana</h1>
    </section>
  )
}

export default Footer
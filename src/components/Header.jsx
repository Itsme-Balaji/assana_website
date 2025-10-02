import React, { useState, useEffect } from "react";
import assanaLogo from "../assets/images/assanaLogo.png";
import { RiMenuFold2Fill, RiMenuUnfold2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [colorectalClinic, setColorectalClinic] = useState(false);
  const [gutWellness, setGutWellness] = useState(false);
  const [wellnessProgram, setWellnessProgram] = useState(false);


  // disable background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <header className="bg-[#EC7979] fixed top-0 w-full rounded-b-full z-50">
      {/* Desktop menu */}
      <div className="hidden lg:flex mediaQuery">
        <div className="flex items-center justify-between max-w-[1600px] m-auto p-2 w-[95%]">
          <div className="bg-white h-15 w-30 rounded-full flex justify-center items-center logoMedia">
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/"}>
              <img src={assanaLogo} alt="assanaLogo" className="h-10 cursor-pointer logoMediaImg" />
            </Link>
          </div>

          <ul className="flex text-white text-lg font-semibold gap-x-6 font-[Raleway] cursor-pointer mediaQuery">
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/home"} className="hover:text-[#636060]">Home</Link>
            </li>
            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/aboutus"} className="hover:text-[#636060]">About Us</Link>
            </li>

            {/* Colorectal Clinic */}
            <li
              className="relative group hover:text-[#636060]"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) }
            >
              Colorectal Clinic
              <ul className="absolute bg-[#f1babad3] p-4 text-black w-80 text-center hidden flex-col gap-y-2 top-7 group-hover:flex rounded-xl">
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/colorectalsymptoms"} className="hover:text-[#636060]">Colorectal Symptoms</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/pilesorhaemorrhoids"} className="hover:text-[#636060]">Piles or Haemorrhoids</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/bandingofpiles"} className="hover:text-[#636060]">Banding Of Piles/Haemorrhoids</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/lasersurgery"} className="hover:text-[#636060]">Laser Surgery For Piles</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/analfissure"} className="hover:text-[#636060]">Anal Fissure</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/analfistula"} className="hover:text-[#636060]">Anal Fistula</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/afteranalaurgery"} className="hover:text-[#636060]">After Anal Surgery Wound Care</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/pelvicfloorproblems"} className="hover:text-[#636060]">Pelvic Floor Problems</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/colonrectalcancer"} className="hover:text-[#636060]">Colon & Rectal Cancer</Link></li>
              </ul>
            </li>

            {/* Gut Wellness */}
            <li className="relative group flex gap-x-4 hover:text-[#636060]">
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/gutWellnwssPage"} >
                Gut Wellness
              </Link>
              <ul className="absolute bg-[#f1babad3] p-4 text-black w-80 text-center hidden flex-col gap-y-2 top-7 group-hover:flex rounded-xl">
                <li className="hover:text-[#636060]">
                  <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/gutbrainaxis"}>
                    Gut Brain Axis & The Gut Microbiome
                  </Link>
                </li>
              </ul>
            </li>

            {/* Wellness Programmes */}
            <li className="relative group flex gap-x-4 hover:text-[#636060]">
              Wellness Programmes
              <ul className="absolute bg-[#f1babad3] p-4 text-black w-80 text-center hidden flex-col gap-y-2 top-7 group-hover:flex rounded-xl">
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/gutcleanseprogram"} className="hover:text-[#636060]">Colon Hydrotherapy & Gut Cleanse Program</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/assanabuttcheck"} className="hover:text-[#636060]">Assana Butt Check</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/newmomsprogramme"} className="hover:text-[#636060]">The New Moms Programme</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/menopause"} className="hover:text-[#636060]">The Menopause Programme</Link></li>
                <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/seniorcitizens"} className="hover:text-[#636060]">The Senior Citizens Programme</Link></li>
              </ul>
            </li>

            <li>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/products"} className="hover:text-[#636060]">Products</Link>
            </li>
          </ul>

          <div className="flex gap-x-4 font-[Raleway]">
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/bookNow"}>
              <button className="bg-white py-2 px-6 rounded-4xl cursor-pointer shadow-md  hover:bg-black hover:text-white">Book Now</button>
            </Link>
            <button
              onClick={() =>
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
              }
              className="bg-white py-2 px-6 rounded-4xl cursor-pointer shadow hover:bg-black hover:text-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex top-0 lg:hidden items-center justify-between max-w-[1600px] m-auto p-2 w-[80%]">
        <div className="bg-white h-15 w-30 rounded-full flex justify-center items-center">
          <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/"}>
            <img src={assanaLogo} alt="assanaLogo" className="h-10 cursor-pointer" />
          </Link>
        </div>

        <div>
          {menuOpen ? (
            <RiMenuUnfold2Fill className="text-4xl font-bold cursor-pointer text-white" onClick={() => setMenuOpen((prev) => !prev)} />
          ) : (
            <RiMenuFold2Fill className="text-4xl font-bold cursor-pointer text-white" onClick={() => setMenuOpen((prev) => !prev)} />
          )}
        </div>

        {/* Mobile sliding menu */}
        <div
          className={`fixed left-0  overflow-y-auto top-0 h-screen bg-[#EC7979] w-[70%] sm:w-[65%] md:w-[50%] 
          transform transition-transform duration-500 ease-in-out z-50
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Logo */}
          <div className="flex justify-center items-center mt-4">
            <div className="bg-white h-15 w-30 rounded-full flex justify-center items-center">
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                <img src={assanaLogo} alt="assanaLogo" className="h-10 cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Menu list */}
          <ul className="mt-6 flex flex-col text-white text-lg font-semibold gap-y-6 font-[Raleway] text-center cursor-pointer">
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/home"} className="hover:bg-[#F05A5A] p-3 block">Home</Link></li>
            <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/aboutus"} className="hover:bg-[#F05A5A] p-3 block">About Us</Link></li>

            {/* Mobile colorectal */}
            <li onClick={() => { document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); setColorectalClinic((prev) => !prev); }} className="hover:bg-[#F05A5A] p-3 relative">
             <span className="flex justify-center items-center gap-x-2">Colorectal Clinic {colorectalClinic ?<MdOutlineKeyboardArrowUp className="inline-block text-2xl"/>:<MdOutlineKeyboardArrowDown className="inline-block text-2xl"/>}</span> 
              {colorectalClinic && (
                <ul className="bg-[#ec9898] p-4 text-white text-center flex flex-col gap-y-2 rounded-xl">
                  <li><Link to={"/colorectalsymptoms"} className="hover:bg-[#F05A5A] p-2 block">Colorectal Symptoms</Link></li>
                  <li><Link to={"/pilesorhaemorrhoids"} className="hover:bg-[#F05A5A] p-2 block">Piles or Haemorrhoids</Link></li>
                  <li><Link to={"/bandingofpiles"} className="hover:bg-[#F05A5A] p-2 block">Banding Of Piles/Haemorrhoids</Link></li>
                  <li><Link to={"/lasersurgery"} className="hover:bg-[#F05A5A] p-2 block">Laser Surgery For Piles</Link></li>
                  <li><Link to={"/analfissure"} className="hover:bg-[#F05A5A] p-2 block">Anal Fissure</Link></li>
                  <li><Link to={"/analfistula"} className="hover:bg-[#F05A5A] p-2 block">Anal Fistula</Link></li>
                  <li><Link to={"/afteranalaurgery"} className="hover:bg-[#F05A5A] p-2 block">After Anal Surgery Wound Care</Link></li>
                  <li><Link to={"/pelvicfloorproblems"} className="hover:bg-[#F05A5A] p-2 block">Pelvic Floor Problems</Link></li>
                  <li><Link to={"/colonrectalcancer"} className="hover:bg-[#F05A5A] p-2 block">Colon & Rectal Cancer</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile gut wellness */}
            <li onClick={() => setGutWellness((prev) => !prev)} className="hover:bg-[#F05A5A] p-3 relative">
              <Link to={"/gutWellnwssPage"} className="block"><span>Gut Wellness {gutWellness ?<MdOutlineKeyboardArrowUp className="inline-block text-2xl"/>:<MdOutlineKeyboardArrowDown className="inline-block text-2xl"/>}</span></Link>
              {gutWellness && (
                <ul className="bg-[#ec9898] p-4 text-white text-center flex flex-col gap-y-2 rounded-xl">
                  <li><Link to={"/gutbrainaxis"} className="hover:bg-[#F05A5A] p-2 block">Gut Brain Axis & The Gut Microbiome</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile wellness programmes */}
            <li onClick={() => setWellnessProgram((prev) => !prev)} className="hover:bg-[#F05A5A] p-3 relative">
              <span>Wellness Programmes {wellnessProgram ?<MdOutlineKeyboardArrowUp className="inline-block text-2xl"/>:<MdOutlineKeyboardArrowDown className="inline-block text-2xl"/>}</span>
              {wellnessProgram && (
                <ul className="bg-[#ec9898] p-4 text-white text-center flex flex-col gap-y-2 rounded-xl">
                  <li><Link to={"/gutcleanseprogram"} className="hover:bg-[#F05A5A] p-2 block">Colon Hydrotherapy & Gut Cleanse Program</Link></li>
                  <li><Link to={"/assanabuttcheck"} className="hover:bg-[#F05A5A] p-2 block">Assana Butt Check</Link></li>
                  <li><Link to={"/newmomsprogramme"} className="hover:bg-[#F05A5A] p-2 block">The New Moms Programme</Link></li>
                  <li><Link to={"/menopause"} className="hover:bg-[#F05A5A] p-2 block">The Menopause Programme</Link></li>
                  <li><Link to={"/seniorcitizens"} className="hover:bg-[#F05A5A] p-2 block">The Senior Citizens Programme</Link></li>
                </ul>
              )}
            </li>
             <li><Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/products"} className="hover:bg-[#F05A5A] p-3 block">Products</Link></li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col gap-y-6 mt-6 font-[Raleway] w-[90%] m-auto">
            <Link to={"/bookNow"}>
              <button className="bg-white py-4 px-5 w-full shadow rounded-4xl  cursor-pointer hover:bg-black hover:text-white">Book Now</button>
            </Link>
            <button className="bg-white py-4 px-5 rounded-4xl shadow  cursor-pointer hover:bg-black hover:text-white">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import mobileLogo from "../assets/ambitio_logo.png";
import desktopLogo from "../assets/ambitio.png";
import university from "../assets/university.png";
import diamond from "../assets/diamondIcon.51e058ae.png";
import AmbitioEliteIcon from "../assets/ph_crown-fill.svg"
import DropdownArrowIcon from "../assets/chevron-down.svg";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-4 font-inter">
        <div className="flex items-center">
          <a href="/" className="text-[#c41230] font-bold text-2xl">
            <img 
              src={isMobile ? mobileLogo : desktopLogo} 
              alt="Logo" 
              className={`object-contain ${isMobile ? "h-8" : "h-16 w-auto"}`}
            />
          </a>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <button className="border border-[#c41230] text-[#c41230] rounded-full px-4 py-1 text-sm mr-4">
              Speak to our experts
            </button>
            <button className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Study-abroad
                <img src={DropdownArrowIcon} alt="Drop Arrow Icon" className="h-5 w-5" />
              </button>
            </div>

            <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-gray-900 !font-inter">
  Bootcamps
  <img src={DropdownArrowIcon} alt="Dropdown Arrow" className="h-4 w-4 ml-1" />
</button>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Products
                <img src={DropdownArrowIcon} alt="Drop Arrow Icon" className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center">
              <img src={diamond} alt="Ambitio Pro Icon" className="h-5 w-5" />
              <span className="text-gray-700 ml-1">Ambitio Pro</span>
            </div>

            <div className="flex items-center">
              <img src={AmbitioEliteIcon} alt="Ambitio Elite Icon" className="h-5 w-5" />
              <span className="text-gray-700 ml-1">Ambitio Elite</span>
            </div>

            <button className="border border-[#c41230] text-[#c41230] rounded-full px-6 py-2 hover:bg-[#c41230] hover:text-white transition-colors">
              Speak with our Experts
            </button>
          </div>
        )}
      </nav>


      <div className="flex justify-center mt-8">
        <img src={university} alt="Hero Image" className="max-w-full h-auto" />
      </div>
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight font-poppins">
            Give the best shot
            <br />
            at your <span className="text-[#c41230] font-poppins">Dream University</span>
          </h1>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-inter">
            Get expert help, personalised guidance, and all the support you need to
            <span className="font-medium"> increase your chances of success with Ambitio Elite.</span>
          </p>

          <button className="mt-6 md:mt-8 bg-[#1a1a1a] text-white rounded-md px-6 py-3 font-medium hover:bg-black transition-colors">
            10x your chances with Ambitio
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-12 md:mt-16 bg-[#ffeef0] rounded-xl p-6 md:p-10 max-w-4xl mx-auto" > <div className="text-center"> <h2 className="text-xl md:text-2xl font-medium font-poppins"> We let <span className="text-[#c41230]">our numbers</span> do the talking </h2> <p className="text-gray-600 text-sm md:text-base mt-2 font-inter"> Our users love us and we know you will too! Explore our products. </p> </div>

<div className={`mt-6 md:mt-10 grid ${isMobile ? "grid-cols-1 gap-8" : "grid-cols-3 gap-4"}`}>
      {isMobile ? (
        <>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">4.96</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">98.2%</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">got into their Target Program</div>
          </div>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">5000+</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">Students Assisted</div>
          </div>
        </>
      ) : (
        <>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">98.2%</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">got into their Target Program</div>
          </div>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">4.96</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="text-[#c41230] text-4xl font-bold font-poppins">5000+</div>
            <div className="text-gray-600 text-sm mt-1 font-inter">Students Assisted</div>
          </div>
        </>
            )}
          </div>
        </motion.div>
      </div>
   
  )
}

export default HeroSection
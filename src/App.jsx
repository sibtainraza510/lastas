import React from "react";
import { useState } from "react";
import Chatwidget from "./pages/Chatwidget";
import Contactform from "./pages/Formss";
import { FaFileUpload } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { FaUserClock } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { FaBars, FaTimes } from "react-icons/fa";


const App = () =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    
    <div id="home" className="font-sans text-gray-800 bg-gradient-to-b from-sky-100 via-sky-200 to-sky-300">

        <div className="fixed top-0 w-full z-50 h-16  rounded-sm border-b-2 bg-sky-500 border-black grid grid-cols-2 justify-items-center items-center px-6 shadow-md">
              <div> <img src="/images/softsell.webp" className="h-10 w-25 cursor-pointer rounded-2xl" /></div> 
              <div className=" grid justify-items-end ">
              <ul className=" hidden md:flex gap-5 text-white font-semibold">
              <li className="hover:underline  cursor-pointer"><a href="#home">HOME</a></li> 
              <li className="hover:underline cursor-pointer"><a href="#about">ABOUT</a></li> 
              <li  className="hover:underline cursor-pointer"><a href="#contact">CONTACT US</a></li>
              </ul>  

              <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl z-50">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              </div>            
              </div>

              {isMenuOpen && (
        <div  className={`md:hidden fixed top-16 right-0 w-2/3 h-full bg-sky-500 text-white font-semibold text-center shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <ul className="flex flex-col gap-4 py-4">
            <li onClick={() => setIsMenuOpen(false)}><a href="#home">HOME</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#about">ABOUT</a></li>
            <li onClick={() => setIsMenuOpen(false)}><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      )}
        </div>

        <div className="py-20 pt-50 px-6 text-center bg-gradient-to-r from-sky-400 to-blue-500 text-white">
          <h1 className="text-4xl mb-4 font-bold">Turn unused software into cash </h1>
          <p className="text-lg mb-6">Softsell helps bussinesses sell unused software licenses securely and quickly</p>
          <button className="cursor-pointer px-6 py-2 rounded bg-white text-blue-600 font-semibold hover:bg-gray-300 transition">Sell my licenses</button>
        </div>

       
        <hr className="my-8 border-blue-300"></hr>

        <div className="px-6 py-16 text-center bg-gradient-to-r from-sky-200 to-sky-100">
          <h1 className="mb-10 text-2xl font-bold text-gray-700">How It Works</h1>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <FaFileUpload  className="mx-auto mb-4 h-10 w-10 text-blue-600"/>
            <h3 className=" text-lg font-semibold">Upload License</h3>
            <p>Send us your unused license details.</p>
          </div>
          <div>
            <FaMoneyCheck className="mx-auto mb-4 h-10 w-10 text-blue-600"/>
            <h3 className="text-lg font-semibold">Get Valuation</h3>
            <p>We evaluate the market value of your license.</p>
          </div>
          <div>
            <TbMoneybag  className="mx-auto mb-4 h-10 w-10 text-blue-600"/> 
            <h3 className=" text-lg font-semibold">Get Paid</h3>
            <p>Receive your payment securely and fast.</p>
          </div>
        </div>

        </div>

        <hr className="my-8 border-blue-300"></hr>
        
        <div id="about"  className="px-6 py-16 text-center bg-gradient-to-r from-blue-100 to-blue-200">
          <h2 className="text-2xl mb-10 font-bold text-gray-700">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div>
              <MdOutlineSystemSecurityUpdateGood className="mx-auto mb-4 h-10 w-10 text-blue-700"/>
              <p className="font-semibold">Secure Transfers</p>
            </div>

            <div>
              <IoPricetags className="mx-auto mb-4 h-10 w-10 text-green-700"/>
              <p className="font-semibold">Low Commision Fees</p>
            </div>

            <div>
              <FaUserClock className="mx-auto mb-4 h-10 w-10 text-yellow-700"/>
              <p className="font-semibold">Fast Turnaround</p>
            </div>

            <div>
              <FcCustomerSupport className="mx-auto mb-4 h-10 w-10 "/>
              <p className="font-semibold">24/7 Customer Support </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-blue-300"></hr>


        <div className="px-16 py-16 text-center bg-gradient-to-r from-blue-200 to-sky-300">
          <h2 className="mb-10 font-bold text-2xl text-gray-700">What Our Services Say</h2>
          <div className="grid grid-cols-2 gap-8 mx-auto max-w-5xl">
            <div className="p-6 rounded-lg bg-white shadow hover:bg-sky-100 transition">
              <p className="italic">"Softsell helped us turn unused tools into real cash. The process was seamless."</p>
              <p className="mt-4 font-semibold">Mohd Arshad, IT Manager, Digiidunia </p>
            </div>

            <div className="card p-6 rounded-lg bg-white shadow hover:bg-sky-100  transition">
              <p className="italic">"Amazing service and support. Highly recommend for any bussiness with extra licenses."</p>
              <p className="mt-4 font-semibold">Deepak Yadav, Tech Lead, Bluestocks </p>
            </div>

            <div className="card p-6 rounded-lg bg-white shadow hover:bg-sky-100  transition">
              <p className="italic">"Softsell made the whole license selling process incredibly easy. We recovered funds we didn`t know we could!"</p>
              <p className="mt-4 font-semibold">Rahul Sharma, Director, SoftTide Solutions </p>
            </div>

            <div className="card p-6 rounded-lg bg-white shadow hover:bg-sky-100  transition">
              <p className="italic">Their support team guided us through every step. We highly recommend Softsell to any tech firm."</p>
              <p className="mt-4 font-semibold"> Neha Joshi, CEO, Innovates </p>
            </div>
          </div>
        </div>

        <Contactform />

        <Chatwidget/>

        

    </div>
  )

}

export default App;
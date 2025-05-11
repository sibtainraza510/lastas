import React from "react";
import{motion} from "framer-motion"
import {useState} from "react";


 const Contactform = () =>{
    
    const[user,setuser] = useState({name: "", email: "",company:"" , message : ""});

    const handleinputchange = (e) =>{
        const {name, value} = e.target
        setuser((prev)=>({
            ...prev , [name] : value
        }));
    };

    const handlesubmit = (e) =>{
        e.preventDefault();
        alert("Form submitted successfully")
        setuser({name: "", email: "", message : "" , company: ""});
    }
    return(
        <>
        <div id="contact" className="flex flex-row justify-center align-middle pb-20 pt-20">
        <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity:0, y: -150}} transition={{duration: 1}}  className=" w-[60%]   bg-[#0d1b2a] text-white border border-indigo-500 shadow-[0_0_15px_rgba(99,102,238,0.6)] rounded-lg p-6  ">
        <div className="flex flex-row justify-center align-middle pt-10">
            <h1 className="text-3xl"><b>Contact Us!</b></h1>
        </div>
        <form onSubmit={handlesubmit} className="grid grid-rows-3 justify-items-center pt-15 pb-10 gap-y-6" >

        

            <label htmlFor="firstName">
                <b className="pr-50 text-2xl"> Name</b>
            </label>
            <input  className="nameinput  h-[40px] w-[30%] border-2 rounded-sm border-solid " type="text" name="name" value={user.name} placeholder="enter your name" required autoComplete="off" onChange={handleinputchange} />


            <label htmlFor="email">
                <b className="pr-50 text-2xl">Email</b>
            </label>
            <input className="emailinput  h-[40px] w-[30%] border-2 rounded-sm border-solid " type="email" name="email" value={user.email} placeholder="enter your email" required autoComplete="off" onChange={handleinputchange} />
        


			<label htmlFor="company">
                <b className="pr-40 text-2xl">Company</b>
            </label>
            <input className="emailinput h-[40px] w-[30%] border-2 rounded-sm border-solid " type="text" name="company" value={user.company} placeholder="enter your company" required autoComplete="off" onChange={handleinputchange} />

            <label htmlFor="message">
                <b className="pr-40 text-2xl">Message</b>
            </label>
            <textarea className="messageinput h-[100px] w-[30%] border-2 rounded-sm border-solid "  type="text" name="message" value={user.message} placeholder="what do you want to say?" required autoComplete="off" onChange={handleinputchange} />

            <button className="btnsend h-[30px] w-[90px] border-2 rounded-sm border-solid mt-10"  type="submit">Send</button>
        </form>
        </motion.div>
        </div>
        </>
    )
};

export default Contactform;
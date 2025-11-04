import { IoMailOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { TfiInfoAlt } from "react-icons/tfi";

const Contactus = () => {
  return (
    <div className='w-full pt-8'>
        <div className="md:text-5xl text-2xl font-serif text-center">
  <span className="relative inline-block">
    <span className="text-red-900">Get in</span>
   <span className="relative  bg-linear-to-r from-red-900 to-blue-900 bg-clip-text text-transparent"> Touch</span>
    <span className="text-blue-900"> With Us!</span>
    <span className="absolute left-0 bottom-0 w-full h-1 bg-linear-to-r from-red-900 to-blue-900 rounded-full"></span>
  </span>
</div>
    <p className="mb-6 md:pl-8 pl-0 flex justify-center pt-8 md:text-base text-sm">We’d love to hear from you. Visit us at our office:</p>


<div className='flex md:flex-row p-8 w-full h-full gap-4 flex-col'>
         <div className="md:w-1/2 w-full rounded-xl overflow-hidden shadow-lg p-8">
            <div className="flex items-center gap-4 pb-8 justify-center">
                <div className="size-10 rounded-full bg-blue-200 flex justify-center items-center p-2"> 
                    <p className=" text-blue-500 text-2xl"><TfiLocationPin /></p></div>
                
                <p className="md:text-3xl text-2xl font-bold font-playfair  text-blue-900">Our Location</p>
            </div>
             
     <div className="md:h-7/8 h-full" >
        <iframe
          title="MSFIN Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2123.5054363136182!2d75.7758487512818!3d26.960615135077184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b488a5c3d1%3A0xd5ba54a1d251271f!2sTime%20square%2C%20Sector%202%2C%20Central%20Spine%2C%20Vidyadhar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302039!5e0!3m2!1sen!2sin!4v1762072246707!5m2!1sen!2sin"
          width="100%"
            height="100%"
            style={{ borderRadius:10  }}
          loading="lazy"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div >
    <div  className='md:w-1/2 w-full shadow-lg p-8 rounded-lg'>
     <div className="flex items-center gap-4 pb-8 justify-center">
                <div className="size-10 rounded-full bg-red-200 flex justify-center items-center p-2"> 
                    <p className=" text-red-900 text-2xl"><TfiInfoAlt/></p></div>
                
                <p className="md:text-3xl text-2xl font-bold font-playfair  text-red-900">Our Information </p>
            </div>
   
    <div className='flex flex-col gap-4 justify-between'>
<div className="bg-blue-50 h-20 rounded-md hover:bg-blue-100">
    <div className="flex gap-4  items-center p-2"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-blue-600 text-lg "><IoMailOutline  /></div>
    <div className=" ">
        <div  className="text-2xl text-blue-700 ">Email Id</div>
        <div>info@msfin.in</div>
        </div></div>
    
</div>
<div className="bg-red-50 h-20 hover:bg-red-100 rounded-md p-2"> 
    <div className="flex gap-4  items-center"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-red-600 text-lg "> <FaPhone /></div>
    <div className=" p-2">
        <div  className="text-2xl text-red-600 ">Phone</div>
        <div>0141 2339468</div>
        </div></div></div>
        <div className="bg-blue-50 md:h-20 h-32 hover:bg-blue-100 rounded-md p-2">
             <div className="flex gap-4  items-center"> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-blue-600 text-lg "><FaWhatsapp  /></div>
    <div className="p-4">
        <div  className="text-2xl text-blue-600 ">Whatsapp No.</div>
        <div>+91 7230032601</div>
        </div></div></div>
<div className="bg-red-50 md:h-26 h-44 hover:bg-red-100 rounded-md ">
     <div className="flex gap-4  items-center pl-2 "> 
        <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-red-600 text-lg "><TfiLocationPin /></div>
    <div className=" p-4">
        <div  className="text-2xl text-red-700 ">Office</div>
        <div>F-109-112, 1st Floor, Time Square, Central Spine, Vidhyadhar Nagar, Jaipur JAIPUR, Rajasthan India 302039</div>
        </div></div></div>
    </div>
    <div className="pt-4 ">
        <div className="text-xl py-4">Follow Us On:</div>
        <div>
        <div className="text-3xl hover:text-gray-500 cursor-pointer"><FaLinkedin /></div>
        <div></div>
        </div>
    </div>
    </div>


    </div>
      
    </div>
  )
}

export default Contactus;


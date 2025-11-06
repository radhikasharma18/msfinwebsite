import Card from "../card/Card";
import { SiTransmission } from "react-icons/si";
import { IoLogoXing } from "react-icons/io";
import Services from "./Services";
import CustomerRev from "../card/CustomerRev";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Svg from "./Svg";




const testimonials = [
  {
    star: "★★★★★",
    name: "David Ali",
    description:
      "Sleekix has been an amazing investment partner for me. Their services are easy to use and accessible from any device.Sleekix has been an amazing investment partner for me. Their services are easy to use and accessible from aSleekix has been an amazing investment partner for me. Their services are easy to use and accessible from any device.ny device.",
    designation: "Investor",
  },
  {
    star: "★★★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer for our business growth.",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },  {
    star: "★★★★★",
    name: "David Ali",
    description:
      "Their services are easy to use and accessible from any device.",
    designation: "Investor",
  },
  {
    star: "★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer..",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },
    {
    star: "★★★★★",
    name: "Jack Frost",
    description:
      "The platform has been a game-changer..",
    designation: "Manager",
  },
  {
    star: "★★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  },
    {
    star: "★★★★",
    name: "Olivia Wattson",
    description:
      "Switching to Sleekix was one of our best decisionsSwitching to Sleekix was one of our best decisions. Amazing support!. Amazing support!Switching to Sleekix was one of our best decisions. Amazing support!",
    designation: "Operations Head",
  }
  ];


const Home = () => {
  const [displayCount, setDisplayCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);

  const rounded1 = useTransform(count1, (latest) => latest.toFixed(0));
  const rounded2 = useTransform(count2, (latest) => latest.toFixed(0));

   

  useEffect(() => {
    // First counter: 0 → 70000
    const unsubscribeDisplay = rounded1.onChange((v) => setDisplayCount(v));
    const controls1 = animate(count1, 70000, {
      duration: 1,
      ease: "easeOut",
    });

    // Second counter: 0 → 400
    const unsubscribeCustomer = rounded2.onChange((v) => setCustomerCount(v));
    const controls2 = animate(count2, 400, {
      duration: 2,
      ease: "easeOut",
    });

    // Cleanup
    return () => {
      unsubscribeDisplay();
      unsubscribeCustomer();
      controls1.stop();
      controls2.stop();
    };
  }, []);  

  return (
    <>    <div className=" w-full flex  flex-col items-center justify-center ">
      <div>
      <div>
        <div className="flex p-32">
        <motion.div 
          initial={{ opacity: 0,x: 0}}   
      whileInView={{ opacity: 1, x: -20}}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} 
className="w-10 h-10 bg-red-900 rounded-2xl rotate-12  "></motion.div>
        <motion.div
         initial={{ opacity: 0, y: 50}}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}

         className="">welcome to <span className="text-7xl">MS Fin Creditors.</span>build your business.
</motion.div>
        <motion.div 
         initial={{ opacity: 0,x: 0}}   
      whileInView={{ opacity: 1, x: -20}}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} 
        className="size-50 bg-blue-900 rounded-4xl rotate-12 "></motion.div></div>
        
        <div >
       
          
        <motion.div className="flex justify-between">
          <div>
          <div>Satsfied  user Globally</div>
          <motion.div className="text-6xl">
            {displayCount}k</motion.div>
      </div>
       <div>
         <div></div>
         <div></div>
         <div></div>
      </div>
       <div>
          <div>Live Loan</div>
          <motion.div className="text-6xl">
            {customerCount}+</motion.div>
      </div>
             
        </motion.div>
        </div>
        </div>
       
</div>

      <div className=" h-screen  bg-white">
        <div className="flex flex-col justify-center items-between text-center p-8 m-8 gap-16 w-full">
          <div className="flex justify-center">
            {" "}
            <div className="bg-blue-100 rounded-full w-32">How it work</div>
          </div>

          <div className="text-6xl font-semibold text-blue-900">
            Super convenient online banking
          </div>
          <div>
            Our online banking platform is protected with the latest encryption
            technology and multi-factor authentication.
          </div>
        </div>
        <div className="flex gap-4 justify-around m-4">
          <div>
            {" "}
            <Card
              icon={<IoLogoXing />}
              title="Mission Statement"
              description="Our mission is to provide compatible and trusted financial assistance to a huge untapped market of people living or working in the rural areas to catalyze economic development by identification of commercially viable individuals/businesses and rendering of funds to them through a professional."
            />
          </div>
          <div>
            {" "}
            <Card
              icon={<SiTransmission />}
              title="Vision Statement"
              description="Our vision is to make a professionally managed, dynamic, vibrant and value based organization that stands as the most preferred financier, provides customized and speedy financial solutions to rural, along with the ‘upcoming urban areas’ with confidence to secure customer trust and satisfaction."
            />
          </div>
          <div>
            {" "}
            <Card
              icon={<SiTransmission />}
              title="Core Values"
              description="Client Focused: Providing a high quality, timely and effective service with fair dealings is a priority for our organization in order to provide the utmost level of Customer satisfaction"
              // buttonText="Read More"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-1/2">
          <p className="text-red-900 font-semibold text-3xl pb-16">
            We Are Ms Financers
          </p>
          <div>
            Company was originally incorporated with the name Arpit Credits
            Private Limited under the Companies Act, 1956 as private limited
            company on 26th of December, 1990. The company has been granted a
            certificate to carry on the business of Non-Banking Financial
            Institution without accepting public deposits. The company, in the
            light of its main object, pursued the business of finance by
            offering unsecured lending such as personal loans and micro loans.
            The company has been changed from Arpit Credits Private Limited to
            MSFIN Credit Private Limited with effect from 13th of July, 2018.
            The company has shifted its focus to secured lending by adding
            products like commercial vehicle lending, 2-wheelers lending and
            Loan against property.
          </div>
        </div>
        <div className="w-1/2 rounded-full size-100 bg-red-100 flex flex-wrap justify-center gap-8 p-16 text-3xl">
          <div>Micro Loan</div>
          <div>Personal Loan</div>
          <div>Vehicle Loan</div>
          <div>Mortage Loan</div>
          <div>Two Wheeler Loan</div>
        </div>
      </div>
      <Services />
      {/* <Catcard /> */}
     
       <div className="w-full h-full">
  <div>
    <motion.div 
     initial={{ opacity: 0, y: 50}}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="text-4xl font-semibold text-center p-8">
      5000+ Happy Customers
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: 50}}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}className="text-center text-lg text-gray-600">
      Hear What Our Customers Say About Us.
    </motion.div>
  </div>

 <div 
 className=" columns-3 row-1 gap-6 p-8"
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(full, 1fr))",
  }}>
  {testimonials.map((item, index) => (
    <CustomerRev
      key={index}
      star={item.star}
      name={item.name}
      description={item.description}
      designation={item.designation}
    />
    
    
  ))}
</div>

</div>

<div>hii
  
</div>
</div>

      
      </>

    
  );
};

export default Home;

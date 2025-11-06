import React from "react";
import { motion } from "framer-motion";

interface CustomerRevProps {
  star: string;
  name: string;
  description: string;
  designation: string;
  image?: string;
}

const CustomerRev: React.FC<CustomerRevProps> = ({
  star,
  name,
  description,
  designation,
  image,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50}}   
      whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    className=" break-inside-avoid bg-white rounded-2xl p-6  mb-10 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300">
      <div className="text-yellow-500 text-lg mb-2">{star}</div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center gap-3">
        {image && <img src={image} alt={name} className="w-10 h-10 rounded-full" />}
        <div>
          <p className="font-semibold text-blue-900">{name}</p>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerRev;

import React from 'react'

interface ServicesCradProps {
  icon?:React.ReactNode;
  title: string;
  description: any;
  
}

const ServicesCrad: React.FC<ServicesCradProps> = ({ icon, title, description }) => {
  return (
    <div>
        <div className="max-w-sm bg-transparent border-2px-solid-black rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
        <div className="text-blue-500 text-5xl flex justify-center items-center p-4 w-full">{icon} </div>
        <div className=" text-white text-2xl flex  flex-col justify-center items-center  ">{title}
        <p className=" text-sm  text-white">{description}</p>
        </div>
    </div>
    </div>
  )
}

export default ServicesCrad;



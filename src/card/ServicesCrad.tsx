import React from 'react'

interface ServicesCradProps {
  icon?: ReactNode;
  title: string;
  description: any;
  
}

const ServicesCrad = (icon,title,description) => {
  return (
    <div>
        <div className="max-w-sm bg-white border-2px-solid-black p-4 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-64">
        <div className="text-blue-800 text-3xl flex justify-center items-center w-full">{icon} </div>
        <div className="p-4">{title}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>
    </div>
    </div>
  )
}

export default ServicesCrad;
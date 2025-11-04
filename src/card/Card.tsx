import React, { ReactNode } from "react";


interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="max-w-sm bg-white border-2px-solid-black p-4 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-64">
      <div className="text-blue-800 text-3xl flex justify-center items-center w-full">{icon} </div> 

      <div className="p-4">
        <h2 className="text-xl  text-blue-900 font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {/*  */}
      </div>
    </div>
  );
};

export default Card;

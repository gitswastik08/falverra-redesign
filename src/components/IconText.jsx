// src/components/IconText.jsx
import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 flex items-center justify-center bg-[#ede2f9] rounded-lg">
        <img src={icon} alt="icon" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
      </div>
      <p className="text-gray-800 sm:text-xl font-[400] font-sans">{text}</p>
    </div>
  );
};

export default IconText;

import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 text-sm sm:text-xl sm:px-6 sm:py-3 font-medium rounded-[10px] sm:w-[220px] sm:h-[58px] border transition-all
       border-black
        
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;

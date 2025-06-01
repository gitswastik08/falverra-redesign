import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navItems = ["Home", "Services", "Pricing", "How It Works", "Blog"];

  return (
    <nav className="sm:px-16 px-6 w-full static sm:fixed z-50  bg-[#fffbf4] h-20 flex items-center justify-between font-yourfont">
      <h1 className="text-4xl font-medium text-[#8c8b87]">LOGO</h1>

      <ul className="hidden md:flex gap-10 text-gray-600 text-base font-normal">
        {navItems.map((item) => (
          <li
            key={item}
            className="hover:text-black cursor-pointer transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex gap-4">
        <button className="px-6 py-2 text-[#c88f00e3] font-medium rounded-[10px] ">
          Login
        </button>
        <button className="px-6 py-2 text-[#c88f00e3] font-medium border-2 border-[#c88f00e3] rounded-[10px] transition-all">
          Signup
        </button>
      </div>

      <div className="sm:hidden flex items-center">
        <i
          className={`ri-${
            toggle ? "close-large-line" : "menu-line"
          } text-2xl cursor-pointer`}
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6 ">
          <div className="w-full flex items-center justify-end">
            <i
              className="ri-close-large-line text-2xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
          {navItems.map((item) => (
            <p
              key={item}
              className="text-lg text-gray-700 font-medium hover:text-black cursor-pointer transition-all"
            >
              {item}
            </p>
          ))}

          <hr className="border-gray-200" />

          <button className="px-4 py-2 text-[#c89100]  hover:bg-[#c89100] hover:text-white font-semibold border border-[#c89100] rounded-[14px]">
            Login
          </button>
          <button className="px-4 py-2 text-[#c89100] font-semibold border border-[#c89100]  hover:bg-[#c89100] hover:text-white rounded-[14px]">
            SignUp
          </button>
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;

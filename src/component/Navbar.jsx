import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "about",
    },
    {
      id: 3,
      text: "portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-15 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between item-center py-3 h-16">
          <div className="flex  space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-x1 cursor-pointer">
              <span className="text-blue-500 text-2xl">S</span>HREYA
              <p className="text-sm">web Developer</p>
            </h1>
          </div>
          <div>
            {/* desktop */}
            <ul className=" hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <FiMenu size={24} /> : <IoMdClose size={24} />}
            </div>
          </div>
        </div>
        {/* mobile */}
        {menu && (
          <div>
            <ul className="md:hidden flex-col  h-screen items-center justify-center space-y-3 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

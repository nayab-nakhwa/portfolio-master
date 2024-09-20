import React, { useState } from "react";
import pic from "/mypic.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { useEffect } from "react";
import '../components/Navbar.css'
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Education",
    },
    {
      id: 3,
      text: "About",
    },
    {
      id: 4,
      text: "Portfolio",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <>
      <div className="max-w-screen-2x dark container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-slate-100">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={pic} className="h-12 w-12 object-cover object-top rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer  hover:text-purple-700 duration-500">
              NAYAB NAKHWA
              <p className="text-sm  hover:text-purple-700">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div className="links p-0 z-500">
            <ul className="hidden dark md:flex space-x-8 p-0">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 hover:text-purple-700 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              <button className="dark-mode-toggle hover:text-purple-700 !p-0" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
            </ul>
            
            
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white light z-500" >
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
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

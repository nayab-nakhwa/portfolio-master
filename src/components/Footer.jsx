import React from "react";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
            <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/nayab.nakhwa/"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-3xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nayabnakhwa/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-3xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nayab_nakhwa"
                      target="_blank"
                    >
                      <FaInstagram className="text-3xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/nayab_nakhwa" target="_blank">
                      <FaTelegram className="text-3xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                </ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 | All rights reserved.
              </p>
              <p className="text-sm">Nayab Nakhwa❤️</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

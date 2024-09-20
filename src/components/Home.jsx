import React from "react";
import { Link, Element } from "react-scroll";

import pic from "/bg.png";

import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import "./Home.css";

function Home() {
  return (
    <>
      <div
      id="Home"
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-purple-700 font-bold"
                strings={[" Developer", " Programmer", " Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Enthusiastic and detail-oriented Computer Science graduate with
              hands-on experience in full-stack web development. As a highly
              skilled Full Stack Web Developer, I offer a diverse skill set in
              HTML, CSS, JavaScript, MongoDB, SQL, Reactjs, Nodejs, PHP and
              Wordpress. With a strong background in developing and maintaining
              dynamic websites and applications.
            </p>
            <br />
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a href="Nayab-resume.pdf" target="_blank">
                <button class="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span class="text">Hire Me!</span>
                  <span class="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </a>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <button class="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span class="text">Contact Me?</span>
                  <span class="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    class="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/nayab.nakhwa/"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nayabnakhwa/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nayab_nakhwa"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/nayab_nakhwa" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer  hover:text-purple-700 hover:scale-125 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <a href="https://www.mongodb.com/" target="_blank">
                    {" "}
                    <SiMongodb className="text-2xl md:text-3xl hover:scale-125 hover:text-purple-700 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </a>
                  <a href="https://expressjs.com/" target="_blank">
                    {" "}
                    <SiExpress className="text-2xl md:text-3xl hover:scale-125 hover:text-purple-700 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </a>
                  <a href="https://react.dev/" target="_blank">
                    {" "}
                    <FaReact className="text-2xl md:text-3xl hover:scale-125 hover:text-purple-700 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </a>
                  <a href="https://nodejs.org/en" target="_blank">
                    {" "}
                    <FaNodeJs className="text-2xl md:text-3xl hover:scale-125  hover:text-purple-700 duration-200 rounded-full border-[2px] cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

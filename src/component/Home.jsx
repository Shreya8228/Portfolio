import React from "react";
import pic from "../../public/photo.avif";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-5 md:px-21 my-24 bg-blue">
        <div className="flex  flex-col md:flex-row">
          <div className="md:w-1/2  mt-10 md:mt-24 space-y-2 space-x-3 md:space-x-8 order-2 md:order-1">
            <span className="text-xl ">Welcome to MY feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm </h1>
              {/* <span className="text-red-700 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              commodi accusantium ratione iusto beatae hic reprehenderit earum
              fugit, fugiat iure? Eaque ex, adipisci illum ad error cumque
              exercitationem! Architecto, rerum. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Molestias cumque cupiditate fugit.
              Soluta distinctio sed, nam vero uae vel ipsa eos quis!
            </p>
            <br />
            {/* social media */}
            <div className="flex items-center flex-col md:flex-row justify-between  space-y-6  md:space-y-0">
              <div className="space-y-2 ">
                <h1 className="font-bold ">Available on</h1>
                <ul className="flex  space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="blank">
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shreya-gupta-383081296/"
                      target="blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/" target="blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://telegram.com/" target="blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* next social */}
              <div className="space-y-2">
                <h1 className="font-bold ">Currently working on</h1>
                <div className="flex space-x-5 ">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2pxl}" />

                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2pxl}" />

                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2pxl}" />

                  <FaTelegram className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-{2pxl}" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-13 mt-3 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] h-[450px]"
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

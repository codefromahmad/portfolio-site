import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto lg:mx-auto md:mx-10 flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mx-auto pt-28 sm:pt-22">
          <h2 className="text-white text-4xl sm:text-7xl font-bold text-center md:text-start">
            I am a Full Stack Developer!
          </h2>
          <p className="text-gray-500 py-4 md:max-w-md sm:py-6 text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group flex items-center self-center md:self-start text-white px-6 py-3 my-2 w-fit rounded-md bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-500"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-200">
              <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
            </span>
          </Link>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="my profile"
            src={heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

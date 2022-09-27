import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      image: arrayDestruct,
    },
    {
      id: 2,
      image: installNode,
    },
    {
      id: 3,
      image: navbar,
    },
    {
      id: 4,
      image: reactParallax,
    },
    {
      id: 5,
      image: reactSmooth,
    },
    {
      id: 6,
      image: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="md:h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white pt-20 sm:pt-0 md:pt-32"
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl inline border-b-gray-500 border-b-4 font-bold">
            Portfolio
          </h1>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, image }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-lg hover:scale-105 duration-500 "
              />
              <div className="flex justify-between mx-10 py-5">
                <button className="duration-200 hover:scale-105">Demo</button>
                <button className="duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

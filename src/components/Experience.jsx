import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import html from "../assets/html.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      name: "html",
      image: html,
      shadow: "shadow-orange-500",
    },
    {
      id: 2,
      name: "css",
      image: css,
      shadow: "shadow-blue-500",
    },
    {
      id: 3,
      name: "react",
      image: react,
      shadow: "shadow-blue-600",
    },
    {
      id: 4,
      name: "graphql",
      image: graphql,
      shadow: "shadow-pink-400",
    },
    {
      id: 5,
      name: "nextjs",
      image: nextjs,
      shadow: "shadow-white",
    },
    {
      id: 6,
      name: "node",
      image: node,
      shadow: "shadow-green-500",
    },
    {
      id: 7,
      name: "tailwind",
      image: tailwind,
      shadow: "shadow-sky-400",
    },
    {
      id: 8,
      name: "github",
      image: github,
      shadow: "shadow-gray-500",
    },
    {
      id: 9,
      name: "javascript",
      image: javascript,
      shadow: "shadow-yellow-500",
    },
  ];
  return (
    <div
      name="experience"
      className="md:h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20 sm:pt-0 md:pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl inline border-b-gray-500 border-b-4 font-bold">
            Experience
          </h1>
          <p className="py-6">These are the technologies I've worked with!</p>
        </div>
        <div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-8 px-12 sm:px-0">
          {experiences.map(({ id, name, image, shadow }) => (
            <div
              key={id}
              className={
                "hover:scale-105 duration-500 shadow-md flex flex-col items-center rounded-lg" +
                " " +
                shadow
              }
            >
              <img src={image} alt="" className="w-20 mx-auto" />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

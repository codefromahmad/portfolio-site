import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen w-full mx-auto bg-gradient-to-b from-gray-800 to-black text-white pt-20 sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl inline border-b-gray-500 border-b-4 font-bold">
            About
          </h1>
        </div>
        <p className="text-xl mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
        <br />
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
};

export default About;

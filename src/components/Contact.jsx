import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b to-gray-800 from-black pt-20 sm:pt-0 md:pt-16"
    >
      <div className=" max-w-screen-lg p-4 flex flex-col mx-auto text-white">
        <div className="pb-8">
          <h1 className="text-4xl font-bold border-b-4 inline border-gray-400">
            Contact
          </h1>
          <p className="text-xl py-6">
            Submit the form below to get in touch with me!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ea295fae-4485-4854-9b09-20fd794c630a"
            method="POST"
            className="flex flex-col sm:w-1/2 w-full px-10 md:px-0 sm:px-0"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 rounded-md focus:outline-none bg-transparent border-2 text-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 rounded-md focus:outline-none bg-transparent border-2 text-white"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 rounded-md focus:outline-none bg-transparent border-2 text-white"
            ></textarea>
            <button className=" bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center hover:scale-110 duration-300 rounded-md">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

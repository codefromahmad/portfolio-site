import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const SocialLinks = [
    {
      id: 1,
      name: "Linkedin",
      path: "/",
      icon: <FaLinkedin size={30} />,
      style: "rounded-tr-md",
    },
    {
      id: 1,
      name: "Github",
      path: "/",
      icon: <FaGithub size={30} />,
    },
    {
      id: 1,
      name: "Mail",
      path: "/",
      icon: <HiOutlineMail size={30} />,
    },
    {
      id: 1,
      name: "Resume",
      path: "/",
      icon: <BsFillPersonLinesFill size={30} />,
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex fixed top-[35%]">
      <ul>
        {SocialLinks.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 bg-gray-600 text-white ml-[-100px] hover:ml-[-10px] hover:rounded-tr-md hover:rounded-br-md duration-500 px-3" +
              " " +
              link.style
            }
          >
            <a
              href="https://www.google.com"
              download={link.download}
              className="flex justify-between items-center w-full"
            >
              <span>{link.name}</span>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center px-4 bg-black text-white h-20 fixed w-full">
      <div>
        <h1 className="font-signature text-5xl ml-2">Ahmad</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:text-gray-500 hover:scale-105 duration-200 capitalize"
          >
            <Link to={link} smooth={link}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="pr-4 cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 w-full h-screen items-center justify-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-4xl capitalize cursor-pointer hover:text-gray-500 hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

"use client";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const menus = [
  { title: "Home", path: "/your-path" },
  { title: "Blog", path: "/your-path" },
  { title: "About Us", path: "/your-path" },
  { title: "Contact Us", path: "/your-path" },
];

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="bg-white w-full border-b ">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              width={140}
              height={140}
              alt="Logo"
              src={"/images/epixelap_logo.png"}
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center transition-all  items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-primary">
                <Link className="text-[.9rem]" href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <form className=" md:hidden flex items-center  space-x-2 border rounded-full p-2">
                <Search className="h-5 w-5 flex-none text-gray-300" />
                <input
                  className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                  type="text"
                  placeholder="Search"
                />
              </form>
            </li>
          </ul>
        </div>

        <div className=" hidden flex items-center justify-between py-3 md:py-5 md:block">
          <form className="flex items-center  space-x-2 border rounded-full p-2">
            <Search className="h-5 w-5 flex-none text-gray-300" />
            <input
              className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
              type="text"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import UserIcon from "./ui/userIcon";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { signOut, useSession } from "next-auth/react";

const menus = [
  { title: "Home", path: "/your-path" },
  { title: "Blog", path: "/your-path" },
  { title: "About Us", path: "/your-path" },
  { title: "Contact Us", path: "/your-path" },
];

const Navbar = () => {
  const [state, setState] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);
  const user = session?.user;

  React.useEffect(() => {
    if (session?.status === "authenticated") {
      console.log(session?.status);
      location.reload();
    } else {
      console.log(session);
      console.log("somthing is wrong");
    }
  }, [session]);

  return (
    <nav className="bg-white w-full border-b ">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center gap-5 py-3 md:py-5 md:block">
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
          <Link href="/">
            <Image
              width={140}
              height={140}
              alt="Logo"
              src={"/images/epixelap_logo.png"}
            />
          </Link>
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
          </ul>
        </div>

        <div className="  flex items-center justify-between py-3 md:py-5 md:block">
          {user ? (
            <>
              <UserIcon />
            </>
          ) : (
            <>
              <div className="flex gap-4">
                <Button onClick={() => setOpenLogin(true)} variant="ghost">
                  Login
                </Button>
                <Login open={openLogin} setOpen={setOpenLogin} />

                <Button
                  onClick={() => setOpenSignup(true)}
                  className="text-white"
                  variant="default"
                  size="lg"
                >
                  Signin
                </Button>
                <Signup open={openSignup} setOpen={setOpenSignup} />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

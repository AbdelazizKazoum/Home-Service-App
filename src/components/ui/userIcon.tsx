"use client";

import React from "react";
import { Button } from "./button";
import Image from "next/image";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserIcon = () => {
  return (
    <div className="flex">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className="cover
        rounded-full overflow-hidden
       "
            >
              <Image
                src="/images/alan.jpg"
                alt="user icon"
                width={40}
                height={50}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-6">
            <DropdownMenuLabel className="text-sm font-medium ">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="" />
            <DropdownMenuItem className="  text-gray-600 cursor-pointer hover:text-primary ">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-gray-600 cursor-pointer hover:text-primary ">
              <Link href="/bookings">My bookings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="  text-gray-600 cursor-pointer hover:text-primary "
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserIcon;

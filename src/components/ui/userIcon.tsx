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
            <DropdownMenuItem className=" text-gray-600 ">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-gray-600 ">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className=" text-gray-600 ">
              Team
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut()}
              className=" cursor-pointer text-gray-600 "
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

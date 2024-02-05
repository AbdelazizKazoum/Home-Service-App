import React from "react";
import { Button } from "./button";
import Image from "next/image";

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
            <Button variant="ghost">
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
            </Button>
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
            <DropdownMenuItem className=" text-gray-600 ">
              Subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserIcon;
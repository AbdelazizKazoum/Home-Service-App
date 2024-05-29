import { CategoryMenu } from "@/components/CategoryMenu";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: any }) {
  return (
    <div className="grid grid-cols-4 gap-2   w-full mt-4">
      <div className=" lg:mr-6 hidden md:block ">
        <CategoryMenu />
      </div>
      <div className=" col-span-3  ">{children}</div>
    </div>
  );
}

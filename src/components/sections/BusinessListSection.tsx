import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";

const BusinessListSection = () => {
  return (
    <div className=" flex-row justify-center mt-[100px] ">
      <div className="flex m-auto gap-3 max-w-screen-sm ">
        <Input placeholder="Search" type="text" className=" text-gray-600" />
        <Button variant="default" size="icon" className=" cursor-pointer">
          <CiSearch color="white" className="  " />
        </Button>
      </div>
    </div>
  );
};

export default BusinessListSection;

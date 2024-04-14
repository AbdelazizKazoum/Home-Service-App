import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const categoryList = [
  {
    label: "Cleaning",
    icon: "/images/categoryList/paintbrush.png",
  },
  {
    label: "Repair",
    icon: "/images/categoryList/support.png",
  },
  {
    label: "Painting",
    icon: "/images/categoryList/paintbrush.png",
  },
  {
    label: "Shifting",
    icon: "/images/categoryList/cargo-truck.png",
  },
  {
    label: "Plumbing",
    icon: "/images/categoryList/mop.png",
  },
  {
    label: "Electric",
    icon: "/images/categoryList/paintbrush.png",
  },
];

const CategoryListSection = () => {
  return (
    <div className=" flex-row justify-center m-[80px] ">
      <div className="flex m-auto gap-3 max-w-screen-sm ">
        <Input placeholder="Search" type="text" className=" text-gray-600" />
        <Button variant="default" size="icon" className=" cursor-pointer">
          <CiSearch color="white" className="  " />
        </Button>
      </div>
      <div className="mt-10 max-w-4xl m-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-5 place-content-center">
          {categoryList.length > 0
            ? categoryList.map((item, i) => (
                <div className=" flex flex-col gap-3 w-[130px]  h-[120px] items-center bg-orange-200 p-5 rounded-sm cursor-pointer hover:scale-110 translate-all ease-in-out  ">
                  <Image alt="image" width={50} height={50} src={item.icon} />
                  <h3 className=" md:text-sm text-xs text-gray-800 ">
                    {item.label}
                  </h3>
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, i) => (
                <div className=" flex  flex-col gap-3 w-[130px]  h-[120px] items-center animate-pulse bg-slate-200 p-5 rounded-sm cursor-pointer hover:scale-110 translate-all ease-in-out  ">
                  <h3 className=" md:text-sm text-xs text-gray-800 "> </h3>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryListSection;

"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const CategoryMenu = () => {
  const params = usePathname();
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

  const [selectedGroup, setSelectedGroup] = useState<string>("");

  useEffect(
    function () {
      setSelectedGroup(params.split("/")[2]);
      console.log("selected :", selectedGroup);
    },
    [params]
  );

  return (
    <div>
      <h1 className=" font-bold text-lg mb-3 text-primary ">Categories :</h1>

      {categoryList.map(function (item, index) {
        return (
          <div className="">
            <Link
              className={cn(
                " w-full flex flex-row gap-3 items-center mb-2 p-2 cursor-pointer hover:shadow-sm hover:shadow-primary hover:text-primary hover:bg-orange-200 border rounded-sm",
                selectedGroup === item.label
                  ? " bg-orange-200 text-primary shadow-lg"
                  : ""
              )}
              href={`/search/${item.label}`}
            >
              <Image
                width={40}
                height={40}
                alt="Category logo"
                src={item.icon}
              />
              <h2 className="">{item.label}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

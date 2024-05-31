"use client";
import Image from "next/image";
import React, { useState } from "react";
import { businessList } from "@/db/businessListDB";
import { CiMail, CiMap, CiLocationOn } from "react-icons/ci";
import { Button } from "../ui/button";
import { Share1Icon } from "@radix-ui/react-icons";
import { Upload } from "lucide-react";
import { BusinessListType } from "@/types/businessTypes";

const BusinessInfo = ({ item }: { item: BusinessListType }) => {
  return (
    <div className="md:flex my-12 gap-6 justify-between items-center w-full">
      <div className="flex flex-col md:flex-row md:items-start items-center gap-5 w-full">
        <Image
          alt={`${item?.name}`}
          width={150}
          height={200}
          src={`${item?.image}`}
          className=" rounded-full  h-[150px] object-cover "
        />
        <div className="flex flex-col gap-3 items-center md:items-baseline">
          <span className=" text-sm bg-orange-200 text-primary px-2 py-0.5 rounded-md">
            {item?.category}{" "}
          </span>
          <span className=" text-2xl font-bold">{item?.name}</span>
          <span className=" text-gray-500 flex items-center gap-2 text-sm">
            {" "}
            <CiLocationOn /> {item?.adress}
          </span>

          <span className=" text-gray-500  flex items-center gap-2 text-sm">
            {" "}
            <CiMail /> {item?.contactPerson}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center  md:items-end mt-10 md:mt-0 gap-3 w-full">
        <Button className=" w-12 h-8 text-sm  ">
          <Upload className=" text-white" />
        </Button>

        <span className=" text-sm text-gray-500"> {item?.contactPerson} </span>
        <span className=" text-sm text-gray-500">
          Available 8:00 AM to 10:PM{" "}
        </span>
      </div>

      <div></div>
    </div>
  );
};

export default BusinessInfo;

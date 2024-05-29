"use client";
import Image from "next/image";
import React, { useState } from "react";
import { businessList } from "@/db/businessListDB";
import { CiMail, CiMap, CiLocationOn } from "react-icons/ci";
import { Button } from "../ui/button";
import { Share1Icon } from "@radix-ui/react-icons";
import { Upload } from "lucide-react";

const BusinessInfo = ({ businessId }: { businessId: string }) => {
  const [item, setItem] = useState(
    businessList.find((item) => businessId === item.id)
  );

  console.log(item);
  return (
    <div className="md:flex m-5 gap-6 justify-between items-center w-full">
      <div className="flex gap-5">
        <Image
          width={150}
          height={150}
          src={item?.image}
          className=" rounded-full "
        />
        <div className="flex flex-col gap-3 items-baseline">
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
      <div className="flex flex-col md:items-baseline items-center mt-10 md:mt-0 gap-3">
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

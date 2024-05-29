"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CiCalendar } from "react-icons/ci";
import { businessList } from "@/db/businessListDB";
import Image from "next/image";

const SuggestedBusnissList = ({ category }: { category: string }) => {
  const [list, setList] = useState(
    businessList.filter((item) => item.category === category)
  );
  return (
    <div className="">
      <Button className=" text-white">
        {" "}
        <CiCalendar className=" text-lg mr-2" /> Book Apointment
      </Button>
      <div>
        {list.map((item, id) => (
          <div className="flex gap-2 m-2">
            <Image
              height={80}
              width={80}
              src={item.image}
              className=" h-[100px] object-cover rounded-md "
            />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold">{item.name}</span>
              <span className="text-sm text-primary">{item.contactPerson}</span>
              <span className="text-sm text-gray-500">{item.adress}</span>
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedBusnissList;
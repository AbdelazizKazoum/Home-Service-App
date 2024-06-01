"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CiCalendar } from "react-icons/ci";
import { businessList } from "@/db/businessListDB";
import Image from "next/image";
import { AppointmentSheet } from "../sheets/AppointmentSheet";
import { BusinessListType } from "@/types/businessTypes";

const SuggestedBusnissList = ({ item }: { item: BusinessListType }) => {
  const [list, setList] = useState(
    businessList.filter((item) => item.category === item.category)
  );
  return (
    <div className="">
      <AppointmentSheet businessItem={item}>
        <Button className=" text-white w-full mb-5">
          {" "}
          <CiCalendar className=" text-lg mr-2" /> Book Apointment
        </Button>
      </AppointmentSheet>
      <div>
        {list.map((item, id) => (
          <div className="flex gap-3 mb-5 m-2">
            <Image
              alt={item.name}
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

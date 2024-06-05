"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CiCalendar } from "react-icons/ci";
import { businessList } from "@/db/businessListDB";
import Image from "next/image";
import { AppointmentSheet } from "../sheets/AppointmentSheet";
import { BusinessListType } from "@/types/businessTypes";
import api from "@/lib/axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { getBusinessList } from "@/redux/business/businessThunk";

const SuggestedBusnissList = ({ item }: { item: BusinessListType }) => {
  const [list, setList] = useState<BusinessListType[]>([]);
  const [loaded, setLoaded] = useState(false);
  const { items, http } = useSelector((state: RootState) => state.business);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (items.length > 0) {
      setList(
        items?.filter((el: BusinessListType) => el.category == item.category)
      );
      setLoaded(true);
    } else {
      dispatch(getBusinessList());
    }
  }, [items]);

  console.log("items of business", items);

  return (
    <div className="">
      <AppointmentSheet businessItem={item}>
        <Button className=" text-white w-full mb-5">
          <CiCalendar className=" text-lg mr-2" /> Book Apointment
        </Button>
      </AppointmentSheet>
      {http.loaded ? (
        <div>
          {list.map((item: BusinessListType, id: number) => (
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
                <span className="text-sm text-primary">
                  {item.contactPerson}
                </span>
                <span className="text-sm text-gray-500">{item.adress}</span>
              </div>{" "}
            </div>
          ))}
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default SuggestedBusnissList;

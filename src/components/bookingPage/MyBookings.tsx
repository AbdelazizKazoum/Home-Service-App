"use client";
import { useAppDispatch } from "@/app/hooks/reduxHooks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import api from "@/lib/axios";
import { fetchBookingsByEmail } from "@/redux/booking/bookingThnak";
import { RootState } from "@/redux/rootReducer";
import { BookingType } from "@/types/bookingTypes";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CiCalendarDate,
  CiLocationArrow1,
  CiLocationOn,
  CiTimer,
  CiUser,
} from "react-icons/ci";
import { useSelector } from "react-redux";

export function MyBookings() {
  const [bookings, setBookings] = useState<BookingType[]>();
  const [loaded, setLoaded] = useState(false);
  const { data, status } = useSession();
  const route = useRouter();
  const dispatch = useAppDispatch();
  const { items, http } = useSelector((state: RootState) => state.bookings);

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(fetchBookingsByEmail(data?.user?.email));
    }
  }, [data]);

  if (status === "loading") {
    return <div>Loading....</div>;
  }
  if (status === "unauthenticated") {
    route.push("/?page=login&error=Login is required for booking!");
  }

  console.log("bookings :", items);

  // Render bookings function
  function renderBookings(status: string) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items?.map((item, id) => {
          if (item.status === status) {
            return (
              <div className="flex gap-3  p-3 w-full border">
                <Image
                  width={80}
                  height={80}
                  alt={item.business.name}
                  src={item.business.image}
                  className=" object-cover rounded-sm  "
                />
                <div className="flex flex-col gap-2">
                  {" "}
                  <span className=" font-bold ">{item.business.name}</span>
                  <span className=" text-sm text-primary flex gap-1 ">
                    <CiUser className=" w-5 h-5 text-primary" />
                    {item.business.contactPerson}
                  </span>
                  <span className=" text-sm flex gap-1">
                    <CiLocationOn className=" w-5 h-5 text-primary" />

                    {item.business.adress}
                  </span>
                  <span className=" text-sm flex gap-1 items-start">
                    <CiCalendarDate className="  w-5 h-5 text-primary" />
                    Service on :
                    <span className=" font-semibold ">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </span>
                  <span className=" flex gap-1 text-sm">
                    <CiTimer className=" w-5 h-5 text-primary" />
                    Service on :{" "}
                    <span className=" font-semibold text-sm">
                      {" "}
                      {item.time}
                    </span>{" "}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }

  return (
    <Tabs defaultValue="booked" className="">
      <TabsList className="w-full flex justify-start bg-gray-200">
        <TabsTrigger value="booked">Booked</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      {http.loaded == true ? (
        <>
          <TabsContent value="booked">{renderBookings("booked")}</TabsContent>
          <TabsContent value="completed">
            {renderBookings("completed")}
          </TabsContent>
        </>
      ) : (
        "loading..."
      )}
    </Tabs>
  );
}

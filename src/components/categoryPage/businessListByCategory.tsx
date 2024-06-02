"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import { BusinessListType } from "@/types/businessTypes";
import api from "@/lib/axios";

export const BusinessListByCategory = ({ category }: { category: string }) => {
  const router = useRouter();

  const [businessList, setBusinessList] = useState<BusinessListType[]>();

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/business");
      setBusinessList(
        data.filter((item: BusinessListType) => item.category === category)
      );

      console.log("category :", category);

      setLoaded(true);
      console.log("list is loaded");
    })();
  }, []);

  console.log(businessList);

  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold text-[22px] mb-4 ">
          {category ? category : "Popular Business"}
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loaded ? (
            <>
              {[0, 1, 2, 3].map((item, id) => (
                <div className="flex flex-col gap-3 ">
                  <Skeleton className="h-[125px]  rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {businessList.map((item, index) => (
                <div
                  onClick={() => router.push(`/details/${item._id}`)}
                  className=" shadow-md rounded  hover:shadow-sm hover:shadow-primary cursor-pointer "
                >
                  <Image
                    width={500}
                    height={200}
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-[150px] md:h-[200px]  rounded"
                  />

                  <div className="flex flex-col items-baseline mt-2 gap-2 p-3  ">
                    <h2 className=" text-xs text-primary  bg-orange-200 rounded-full p-2     ">
                      {item.category}
                    </h2>
                    <h2 className=" font-bold   "> {item.name} </h2>
                    <h2 className=" font-sm text-primary">
                      {" "}
                      {item.contactPerson}{" "}
                    </h2>
                    <h2 className=" text-xs"> {item.adress} </h2>
                    <Button
                      variant={"default"}
                      className="text-white cursor-pointer"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

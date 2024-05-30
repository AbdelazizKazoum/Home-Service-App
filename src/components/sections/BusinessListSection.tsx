"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import { BusinessListType } from "@/types/businessTypes";

const data = [
  {
    id: 1,
    name: "Senior Editor",
    category: "Cleaning",
    contactPerson: "Neile Knoller",
    adress: "2 Debra Lane",
    image: "/images/businessList/house_cleaning.jpg",
  },
  {
    id: 1,

    name: "Nurse",
    category: "Plumbing",
    contactPerson: "Haven Gussie",
    adress: "3 Spaight Drive",
    image: "/images/businessList/houss_reparing.jpg",
  },
  {
    id: 1,

    name: "Sales Associate",
    category: "Repair",
    contactPerson: "Alina Langabeer",
    adress: "9 Ruskin Center",
    image: "/images/businessList/washing_clouthes.jpg",
  },
  {
    id: 1,

    name: "Tax Accountant",
    category: "Plumbing",
    contactPerson: "Howey Bulloch",
    adress: "729 Basil Court",
    image: "/images/businessList/house_cleaning.jpg",
  },
  {
    id: 2,

    name: "Research Associate",
    category: "Painting",
    contactPerson: "Hermine Sallowaye",
    adress: "93 Mayer Center",
    image: "/images/businessList/washing_clouthes.jpg",
  },
  {
    id: 3,

    name: "Staff Accountant III",
    category: "Shifting",
    contactPerson: "Kerry Anscott",
    adress: "0635 New Castle Pass",
    image: "/images/businessList/houss_reparing.jpg",
  },
  {
    id: 4,

    name: "Senior Financial Analyst",
    category: "Repair",
    contactPerson: "Horten Bleythin",
    adress: "4670 Dottie Pass",
    image: "/images/businessList/house_cleaning.jpg",
  },
  {
    id: 5,

    name: "Administrative Assistant I",
    category: "Plumbing",
    contactPerson: "Kingsley McFie",
    adress: "71 Trailsway Alley",
    image: "/images/businessList/houss_reparing.jpg",
  },
  {
    id: 6,

    name: "Cost Accountant",
    category: "Cleaning",
    contactPerson: "Gannie Shoebridge",
    adress: "275 Jenna Junction",
    image: "/images/businessList/house_cleaning.jpg",
  },
  {
    id: 7,

    name: "VP Accounting",
    category: "Electric",
    contactPerson: "Isahella Alchin",
    adress: "91002 Haas Street",
    image: "/images/businessList/house_cleaning.jpg",
  },
];

export const BusinessListSection = ({ category }: { category: string }) => {
  const router = useRouter();

  console.log("get catory :", category);
  const [businessList, setBusinessList] = useState<BusinessListType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      // const {data} = await api
    })();
  });

  useEffect(
    function () {
      if (category) {
        setBusinessList(
          data.filter(function (item, index) {
            return item.category === category;
          })
        );

        setLoaded(true);
      } else {
        setBusinessList(data);
        setLoaded(true);
      }
    },
    [category]
  );

  return (
    <>
      <div className="mb-5">
        <h1 className="font-bold text-[22px] mb-4 ">
          {category ? category : "Popular Business"}
        </h1>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
          {!loaded ? (
            <>
              {[0, 1].map((item, id) => (
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
                  onClick={() => router.push(`/details/${item.id}`)}
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

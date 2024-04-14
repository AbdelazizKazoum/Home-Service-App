import Image from "next/image";
import React from "react";

export const BusinessListSection = () => {
  const businessList = [
    {
      name: "Senior Editor",
      category: "Cleaning",
      contactPerson: "Neile Knoller",
      adress: "2 Debra Lane",
      image: "/images/businessList/house_cleaning.jpg",
    },
    {
      name: "Nurse",
      category: "Plumbing",
      contactPerson: "Haven Gussie",
      adress: "3 Spaight Drive",
      image: "/images/businessList/houss_reparing.jpg",
    },
    {
      name: "Sales Associate",
      category: "Repair",
      contactPerson: "Alina Langabeer",
      adress: "9 Ruskin Center",
      image: "/images/businessList/washing_clouthes.jpg",
    },
    {
      name: "Tax Accountant",
      category: "Plumbing",
      contactPerson: "Howey Bulloch",
      adress: "729 Basil Court",
      image: "/images/businessList/house_cleaning.jpg",
    },
    {
      name: "Research Associate",
      category: "Painting",
      contactPerson: "Hermine Sallowaye",
      adress: "93 Mayer Center",
      image: "/images/businessList/washing_clouthes.jpg",
    },
    {
      name: "Staff Accountant III",
      category: "Shifting",
      contactPerson: "Kerry Anscott",
      adress: "0635 New Castle Pass",
      image: "/images/businessList/houss_reparing.jpg",
    },
    {
      name: "Senior Financial Analyst",
      category: "Repair",
      contactPerson: "Horten Bleythin",
      adress: "4670 Dottie Pass",
      image: "/images/businessList/house_cleaning.jpg",
    },
    {
      name: "Administrative Assistant I",
      category: "Plumbing",
      contactPerson: "Kingsley McFie",
      adress: "71 Trailsway Alley",
      image: "/images/businessList/houss_reparing.jpg",
    },
    {
      name: "Cost Accountant",
      category: "Cleaning",
      contactPerson: "Gannie Shoebridge",
      adress: "275 Jenna Junction",
      image: "/images/businessList/house_cleaning.jpg",
    },
    {
      name: "VP Accounting",
      category: "Electric",
      contactPerson: "Isahella Alchin",
      adress: "91002 Haas Street",
      image: "/images/businessList/house_cleaning.jpg",
    },
  ];

  return (
    <div className="mb-5">
      <h1 className="font-bold text-[22px] mb-4 ">Popular Business :</h1>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
        {businessList.map((item, index) => (
          <div className=" shadow-md rounded cursor-pointer hover:shadow-lg hover:shadow-primary ">
            <Image
              width={500}
              height={200}
              src={item.image}
              alt={item.name}
              className="object-cover h-[150px] md:h-[200px]  rounded  "
            />

            <div className="flex flex-col items-baseline mt-2 gap-1 p-2  ">
              <h2 className=" text-xs text-primary  bg-orange-200 rounded-full p-2     ">
                {item.category}
              </h2>
              <h2 className=" font-bold   "> {item.name} </h2>
              <h2 className=" font-sm text-primary"> {item.contactPerson} </h2>
              <h2 className=" text-xs"> {item.adress} </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

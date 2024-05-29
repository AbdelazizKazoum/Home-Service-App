"use client";
import BusinessDescription from "@/components/businessDetails/BusinessDescription";
import BusinessInfo from "@/components/businessDetails/BusinessInfo";
import SuggestedBusnissList from "@/components/businessDetails/SuggestedBusnissList";
import { businessList } from "@/db/businessListDB";
import React, { useState } from "react";

const page = ({ params }: { params: { businessId: string } }) => {
  const [item, setItem] = useState(
    businessList.find((item) => params.businessId === item.id)
  );
  return (
    <div className="w-full">
      <BusinessInfo businessId={params.businessId} />
      <div className="flex flex-row gap-5 justify-between">
        <BusinessDescription businessItem={item} />
        <SuggestedBusnissList category={item?.category} />
      </div>
    </div>
  );
};

export default page;

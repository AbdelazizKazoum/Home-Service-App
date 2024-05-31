"use client";
import BusinessDescription from "@/components/businessDetails/BusinessDescription";
import BusinessInfo from "@/components/businessDetails/BusinessInfo";
import SuggestedBusnissList from "@/components/businessDetails/SuggestedBusnissList";
import { businessList } from "@/db/businessListDB";
import api from "@/lib/axios";
import { BusinessListType } from "@/types/businessTypes";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { businessId: string } }) => {
  const [item, setItem] = useState<BusinessListType>();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/business/${params.businessId}`);

      console.log(data);

      setItem(data);
    })();
  }, []);

  return (
    <div className="w-full">
      <>
        {item ? (
          <>
            {" "}
            <BusinessInfo item={item} />
            <div className=" flex-col flex md:flex-row gap-5 justify-between">
              <BusinessDescription businessItem={item} />
              <SuggestedBusnissList category={item?.category} />
            </div>
          </>
        ) : (
          "loading...."
        )}
      </>
    </div>
  );
};

export default page;

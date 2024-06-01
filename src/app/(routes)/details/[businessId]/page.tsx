"use client";
import BusinessDescription from "@/components/businessDetails/BusinessDescription";
import BusinessInfo from "@/components/businessDetails/BusinessInfo";
import SuggestedBusnissList from "@/components/businessDetails/SuggestedBusnissList";
import api from "@/lib/axios";
import { BusinessListType } from "@/types/businessTypes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";

const page = ({ params }: { params: { businessId: string } }) => {
  //hooks
  const [item, setItem] = useState<BusinessListType>();
  const { data, status } = useSession();
  const route = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/business/${params.businessId}`);
      console.log(data);
      setItem(data);
    })();
  }, []);

  if (status === "loading") {
    return <div>Loading....</div>;
  }
  if (status === "unauthenticated") {
    route.push("/?page=login&error=Login is required for booking!");
  }

  return (
    <>
      {status === "authenticated" && (
        <div className="w-full">
          <>
            {item ? (
              <>
                {" "}
                <BusinessInfo item={item} />
                <div className=" flex-col flex md:flex-row gap-5 justify-between">
                  <BusinessDescription businessItem={item} />
                  <SuggestedBusnissList item={item} />
                </div>
              </>
            ) : (
              "loading...."
            )}
          </>
        </div>
      )}
    </>
  );
};

export default page;

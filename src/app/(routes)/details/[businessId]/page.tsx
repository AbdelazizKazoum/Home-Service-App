"use client";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import BusinessDescription from "@/components/businessDetails/BusinessDescription";
import BusinessInfo from "@/components/businessDetails/BusinessInfo";
import SuggestedBusnissList from "@/components/businessDetails/SuggestedBusnissList";
import api from "@/lib/axios";
import { getBusinessById } from "@/redux/business/businessThunk";
import { RootState } from "@/redux/rootReducer";
import { BusinessListType } from "@/types/businessTypes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { useSelector } from "react-redux";

const page = ({ params }: { params: { businessId: string } }) => {
  //hooks
  const [item, setItem] = useState<BusinessListType>();
  const { data, status } = useSession();
  const route = useRouter();

  const { selected, http } = useSelector((state: RootState) => state.business);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBusinessById(params.businessId));
  }, []);

  console.log(selected);

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
            {selected ? (
              <>
                <BusinessInfo item={selected} />
                <div className=" flex-col flex md:flex-row gap-5 justify-between">
                  <BusinessDescription businessItem={selected} />
                  <SuggestedBusnissList item={selected} />
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

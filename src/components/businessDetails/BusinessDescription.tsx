"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BusinessListType } from "@/types/businessTypes";

const BusinessDescription = ({
  businessItem,
}: {
  businessItem: BusinessListType;
}) => {
  return (
    <div className="flex-1">
      <h2 className=" mb-4 text-xl font-bold"> Description</h2>
      <span className=" text-gray-600 ">{businessItem?.description}</span>
      <h2 className="mt-4 text-xl font-bold">Gallary</h2>
      <Image
        alt="image"
        height={200}
        width={200}
        src={businessItem?.image}
        className="mt-5 rounded"
      />
    </div>
  );
};

export default BusinessDescription;

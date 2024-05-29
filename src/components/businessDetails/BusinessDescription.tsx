"use client";

import React, { useState } from "react";
import { businessList } from "@/db/businessListDB";
import Image from "next/image";

const BusinessDescription = ({ businessItem }: { businessItem: any }) => {
  return (
    <div className="flex-1 max-w-[500px]">
      <h2 className=" mb-4 text-xl font-bold"> Description</h2>
      <span className=" text-gray-600 ">{businessItem?.description}</span>
      <h2 className="mt-3 text-xl font-bold">Gallary</h2>
      <Image
        alt="image"
        height={200}
        width={200}
        src={businessItem?.image}
        className="mt-4 rounded"
      />
    </div>
  );
};

export default BusinessDescription;

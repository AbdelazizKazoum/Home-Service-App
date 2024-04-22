"use client";
import { BusinessListSection } from "@/components/sections/BusinessListSection";
import CategoryListSection from "@/components/sections/CategoryListSection";
import HeroSection from "@/components/sections/HeroSection";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const Home = () => {
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    console.log("login from page :", session);
  }, [sessionStatus]);
  return (
    <div className=" mt-5 ">
      <HeroSection />
      <CategoryListSection />
      <BusinessListSection category="" />
    </div>
  );
};

export default Home;

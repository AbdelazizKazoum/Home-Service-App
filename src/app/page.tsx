"use client";
import { BusinessListSection } from "@/components/sections/BusinessListSection";
import CategoryListSection from "@/components/sections/CategoryListSection";
import HeroSection from "@/components/sections/HeroSection";
import store from "@/redux/store";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { Provider } from "react-redux";

const Home = () => {
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    console.log("login from page :", session);
  }, [sessionStatus]);
  return (
    <Provider store={store}>
      <div className=" mt-5 ">
        <HeroSection />
        <CategoryListSection />
        <BusinessListSection category="" />
      </div>
    </Provider>
  );
};

export default Home;

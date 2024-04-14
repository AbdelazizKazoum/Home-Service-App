import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className="">
        <h1 className="font-[850]  md:text-[3.575rem] text-[2rem]  m-2 text-darkBlue ">
          Find Home Service/Repair Near You{" "}
        </h1>
        <p className="text-[0.9rem] md:text-[1.1rem]  font-sm  my-5 m-2">
          Our goal is top at the heart of creativity services industry as a
          digitale creator. In has after comment
        </p>
        <div className="flex  sm:flex-row gap-5 items-center flex-wrap">
          <Button
            color=""
            className="rounded-full text-white px-8 py-5   md:px-12 font-sm md:py-6"
          >
            Get Started
          </Button>
          <div className="flex items-center cursor-pointer gap-3">
            <Image
              src={"/images/fancy_play_icon.png"}
              alt="image"
              width={50}
              height={50}
            />
            <p className=" text-[.9rem] md:text-[1rem] ">Learn more</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          width={900}
          height={900}
          src={"/images/happy_guy.png"}
          alt="huppy huy sourrended with action icons"
        />
      </div>
    </section>
  );
};

export default HeroSection;

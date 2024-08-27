"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HomePagePartTwo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
          </>
        }
      >
        <Image
          src={`/homePage/hi_4.jpg`}
          alt="hero"
          height={520}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

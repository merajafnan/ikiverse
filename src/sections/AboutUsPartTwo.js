"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";
const people = [
  {
    id: 1,
    name: "Shreen Chand",
    designation: "Cheif Executive Officer",
    image:
      "/aboutUs/as_pp_1.jpg",
  },
  {
    id: 2,
    name: "Meraj Hassan",
    designation: "Advisor",
    image:
      "/aboutUs/as_pp_2.jpg",
  },
];

export function AboutUsPartTwo() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 sm:items-center gap-8">
          <div class="sm:order-2 ">
            <div class="relative pt-[50%] sm:pt-[100%] rounded-lg ">
              <img class="size-full absolute top-0 start-0 object-cover rounded-full shadow-2xl " src="/ikiHireLogo.jpg" alt="Blog Image"></img>
            </div>
          </div>
          <div class="sm:order-1">

            <h2 class="text-3xl font-bold md:text-3xl lg:text-5xl lg:leading-tight xl:text-7xl xl:leading-tight text-gray-800 dark:text-neutral-200 mb-5">
              <a class="hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-300 dark:hover:text-white dark:focus:text-white" href="#">
                Who we are
              </a>
            </h2>
            <p class="lg:text-xl mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
              At LunaTeKK, we are dedicated to transforming organizations by connecting them with top-tier talent. With a commitment to excellence and innovation, we deliver customized HR Solutions & Web Development that drive success and foster growth. Our mission is to empower businesses and professionals alike, ensuring that every partnership thrives.
              Our mission is to bridge the gap between exceptional talent and leading organizations.
            </p>


            <div className="flex flex-row items-center mb-5 w-full">
              <AnimatedTooltip items={people} />
            </div>

            <div class="mt-5">
              <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="https://www.linkedin.com/in/shreen-chand-7286a1145/">
                Want to connect
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
}

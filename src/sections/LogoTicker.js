"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const LogoTicker = () => {
  return (

    <div className="pt-[50px] pb-[50px]">
      <div class="mb-5">
        <h1 class="flex items-center justify-center block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
          Our
          <span class="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent" style={{ marginLeft: "10px" }}>
            clients
          </span>
        </h1>
        <div>
          <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
            <h2 class="text-gray-800 dark:text-neutral-400 lg:text-xl">
              Trusted by a diverse set of customers
            </h2>
          </div>
        </div>
      </div>


      <div className="py-8 bg-white md:py-12">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }}
            >
              <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={echoLogo}
                alt="echoLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="logo-ticker-image"
              ></Image>
              {/* Second Set of logos for animations*/}
              <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={echoLogo}
                alt="echoLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="logo-ticker-image"
              ></Image>
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="logo-ticker-image"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  );
};

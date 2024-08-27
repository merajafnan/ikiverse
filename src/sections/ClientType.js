"use client";
// import CheckIcon from "@/assets/check.svg";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

import { twMerge } from "tailwind-merge";

const clientTiers = [
  {
    title: "Educational Service",
    clientTypeAnchor: "/eduService",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Multi-domain educational service",
      "Various tasks and projects",
      "Build your own setup",
      "DevOps",
      "NetOps",
      "Networking",
      "Network Protocol Testing",
    ],
  },
  {
    title: "HR and Staffing",
    clientTypeAnchor: "/hrService",
    buttonText: "Know more",
    popular: true,
    inverse: true,
    features: [
      "IT and non-IT recruitment",
      "Mutliple years of expertise",
      "Located in multiple states",
      "One stop solution for manpower",
      "Priority support",
      "Dedicated executive",
      "Budget friendly",
    ],
  },
  {
    title: "Web Development",
    clientTypeAnchor: "/webDevService",
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Custom Website Design",
      "E-commerce Solutions",
      "SEO Optimization Services",
      "Responsive Web Development",
      "Performance Optimization",
      "UI/UX Design",
      "Maintenance & Support",
    ],
  },
];

export const ClientType = () => {
  return (
    <section className="pb-10 bg-white ">
      <div className="container ">
        <div className="section-heading">
          <h2 className="section-title pb-2"><span class="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">Grow</span> along with us</h2>
          <p className="section-description mt-5">
            "We prioritize building connections with talented individuals,
            recognizing how crucial a job is to one's life."
          </p>
        </div>

        <div className="lg:flex-row lg:items-end lg:justify-center flex flex-col gap-6 items-center mt-10">
          {clientTiers.map(
            ({
              title,
              clientTypeAnchor,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-center">
                  <motion.div
                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    animate={{
                      backgroundPositionX: '100%',
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 4,
                      ease: "linear"
                    }}
                  >
                    <h3
                      className={twMerge(
                        "text-3xl font-bold text-black/50 text-center",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                  </motion.div>

                </div>

                <a href={clientTypeAnchor}>
                  <button
                    className={twMerge(
                      "btn btn-primary w-full mt-[30px] text-lg",
                      inverse === true && "bg-white text-black text-lg"
                    )}
                  >
                    {buttonText}
                  </button>
                </a>

                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <div className="h-6 w-6">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3367 8.43697L10.7367 18.037C10.6531 18.1209 10.5538 18.1875 10.4444 18.2329C10.335 18.2783 10.2177 18.3017 10.0992 18.3017C9.98079 18.3017 9.8635 18.2783 9.75411 18.2329C9.64471 18.1875 9.54535 18.1209 9.46174 18.037L5.26174 13.837C5.17802 13.7533 5.11162 13.6539 5.06631 13.5445C5.021 13.4351 4.99768 13.3179 4.99768 13.1995C4.99768 13.0811 5.021 12.9638 5.06631 12.8545C5.11162 12.7451 5.17802 12.6457 5.26174 12.562C5.34546 12.4783 5.44485 12.4118 5.55423 12.3665C5.66361 12.3212 5.78085 12.2979 5.89924 12.2979C6.01764 12.2979 6.13487 12.3212 6.24425 12.3665C6.35364 12.4118 6.45302 12.4783 6.53674 12.562L10.1 16.1252L19.0632 7.16348C19.2323 6.9944 19.4616 6.89941 19.7007 6.89941C19.9399 6.89941 20.1692 6.9944 20.3382 7.16348C20.5073 7.33255 20.6023 7.56187 20.6023 7.80098C20.6023 8.04008 20.5073 8.2694 20.3382 8.43848L20.3367 8.43697Z" fill="currentColor" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

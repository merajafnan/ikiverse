"use client";
// import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";


export const WebDevPartOne = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (

        <div className="pl-5 pr-5">
            <div >
                <a class="inline-flex items-center  gap-x-1 py-4 text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    Back to Home
                </a>
            </div>
            <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-r from-neutral-100 to-gray-300 overflow-x-clip">
                <div className="container">
                    <div className="md:flex items-center">
                        <div className="md:w-[478px]">

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text mt-24">Efficient Methods for <span className="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">Deploying</span> a Website</h1>
                            <p className="text-xl text-[#010D3E] tracking-tight mt-6">"Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers."</p>
                            <div className="flex gap-1 items-center mt-[30px]">

                                <a href="/contactUs">
                                    <button className="btn btn-text gap-1 border-1 border-gray-400 bg-gray-100">
                                        <span>Request Demo</span>
                                        {/* <ArrowIcon className="h-5 w-5" /> */}
                                        <svg className="h-5 w-5" width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor" />
                                        </svg>

                                    </button>
                                </a>

                            </div>
                        </div>
                        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                            <motion.img
                                src={cogImage.src}
                                alt="Cog Image"
                                className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                                animate={{
                                    translateY: [-30, 30],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 4,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.img
                                src={cylinderImage.src}
                                alt="cylinder Image"
                                width={220} height={220}
                                className="hidden md:block -top-8 -left-32 md:absolute"
                                style={{
                                    translateY: translateY,
                                }}
                            />
                            <motion.img
                                src={noodleImage.src}
                                alt="Noodle Image"
                                width={220}
                                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                                style={{
                                    rotate: 30,
                                    translateY: translateY,
                                }}
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>


    );
};

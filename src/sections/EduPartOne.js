"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { HoverButtonGradient } from "./HoverButtonGradient";


export function EduPartOne() {
    return (
        (
            <div>
                <div className="pl-5 pr-5">
                    <a class="inline-flex items-center  gap-x-1 py-4 text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        Back to Home
                    </a>
                </div>


                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
                        Learn industrial skills <br /> the right way
                    </motion.h1>
                    <div class="text-center pt-5">
                        <a
                            class="inline-flex justify-center items-center gap-x-3 text-center py-3 pl-5 pr-5 bg-gradient-to-r from-slate-900 to-slate-500 rounded-full text-white text-md font-medium hover:shadow-blue-700/50 focus:outline-none focus:shadow-blue-700/50 shadow-lg shadow-transparent"
                            href="/contactUs"
                        // inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-slate-900 to-slate-500 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-md font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6
                        >
                            Contact us now
                            <svg
                                class="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div>
                </LampContainer>
            </div>




        )
    );
}

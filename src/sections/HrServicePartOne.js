"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";
// import { SparklesCore } from "../ui/sparkles";

export function HrServicePartOne() {
    return (
        (
            <div className="pl-5 pr-5">
                <div>
                    <a class="inline-flex items-center  gap-x-1 py-4 text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        Back to Home
                    </a>
                </div>

                <div
                    className="h-[60rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <h1
                        className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative ">
                        Looking to recruit for your <span className="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">organization?</span>
                    </h1>
                    <p className="pb-5 pt-5 md:text-xl text-xl lg:text-3xl text-center text-white relative ">
                        Looking to recruit for your organization? Let us help you find the right talent quickly and efficiently.
                    </p>
                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div
                            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div
                            className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div
                            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div
                            className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={3}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF" />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div
                            className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                </div>
            </div>


        ));
}

"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function HomePagePartOne() {
    const words = [
        {
            text: "Now",
        },
        {
            text: "it's",
        },
        {
            text: "easier",
        },
        {
            text: "than",
        },
        {
            text: "ever",
        },
        {
            text: "to",
        },
        {
            text: "find",
        },
        {
            text: "right",
        },
        {
            text: "Talent",
            className: "text-slate-500 dark:text-slate-500 font-extrabold",
        },
    ];
    return (

        <div className="flex flex-col items-center justify-center pt-[130px]">
            <div className="">
                <div className="max-w-[150rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                    <div className="max-w-5xl text-center mx-auto">
                        <TypewriterEffect words={words} />
                        <h2 className="block font-medium text-xl sm:text-xl md:text-xl lg:text-2xl mt-10">
                            Discover top talent effortlessly with streamlined tools and advanced matching technology.
                        </h2>
                    </div>

                    {/* <div className="text-center">
                        <a
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-slate-900 to-slate-500 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-md font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                            href="/contactUs"
                        >
                            Contact us now
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            // stroke="currentColor"
                            // stroke-width="2"
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </a>
                    </div> */}
                    <div className="text-center">
                        <a href="">
                            <button className="">
                            Contact us now {'>'}
                            </button>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
}
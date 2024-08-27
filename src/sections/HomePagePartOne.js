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

                    <div className="text-center">
                        <a href="">
                            <button className="btn-home-page">
                            Contact us now {'>'}
                            </button>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
}
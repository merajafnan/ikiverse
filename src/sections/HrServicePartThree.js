import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HrServicePartThree() {
    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Fill up the form</time>
                    <p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">Provide us with details about your staffing needs using the form. Your request is non-binding and completely free of charge.</p>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Contact</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">We'll review your request and respond to you quickly. We can then discuss how we can assist in filling your vacancies.</p>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Candidate Search</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">We explore a broad range of candidates, post job listings, or reach out to individuals who may be suitable for the position.</p>
                </div>
            ),
        },
        {
            title: "Step 4",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Best Match</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">We will connect you with the most fitting candidates. You will then have the opportunity to choose whom you wish to meet and ultimately hire.</p>
                </div>
            ),
        },
    ];
    return (
        (<div className="w-full">
            <Timeline data={data} />
        </div>)
    );
}

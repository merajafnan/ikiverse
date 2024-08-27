import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EduPartThree() {
    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Fill up the form</time>
                    <p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">We will connect you with the most recent industrial training courses. You will have the opportunity to choose wide range of training and educational services.</p>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Contact</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">We'll review your request and respond to you ASAP. We can then discuss how we can assist in providing you the best of industry trainings and educational services.</p>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Certification</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">Get certified after completing your trainings with one of the industry top teachers, who have the best experience in their field.</p>
                </div>
            ),
        },
        {
            title: "Step 4",
            content: (
                <div>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 lg:text-xl">Career guidance included with certification</time>
                    <p class="text-base font-normal text-gray-600 dark:text-gray-400 lg:text-xl">At LunaTekk, we believe that your journey does not end with certification. That's why we offer personalized job related guidance at no extra cost once you have completed your training programs. Our expert advisors are here to help you navigate the job market, refine your resume, and prepare for interviews, ensuring you make the most of your new credentials and secure the career opportunities you deserve.</p>
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

"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import React from "react";

export function EduPartTwo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        (<div className="w-full h-full py-20">
            <h2
                className="text-3xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white">
                Unlock Your Potential with Our <span class="bg-gradient-to-r from-cyan-400 to-indigo-600 bg-clip-text text-transparent">Expert Education</span> Services
            </h2>
            <p className="pt-5 max-w-7xl pl-4 mx-auto text-xl md:text-xl font-medium text-neutral-800 dark:text-neutral-200 font-sans">
            At IkiVerse, we are dedicated to empowering learners of all ages with top-notch educational resources and personalized guidance. Whether you're seeking professional development, or skill enhancement, our comprehensive range of services is designed to help you achieve your goals and excel in your pursuits.
            </p>
            

            <Carousel items={cards} />
        </div>)
    );
}

const DummyContent = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            "DevOps"
                        </span>{" "}
                        is a blend of development (Dev) and operations (Ops) practices aimed at improving collaboration and productivity by automating infrastructure, workflows, and continuously measuring application performance. The goal is to shorten development cycles, increase deployment frequency, and create more dependable releases, in close alignment with business objectives.
                    </p>
                    <img src="/IT_Training/DevOps_3.jpg" alt="" className="pt-5 rounded-lg" />
                </div>)
            );
        })}
    </>);
};

const DummyContentTwo = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            "Unlock new career opportunities"
                        </span>{" "}
                        with our in-depth network training and certification programs. Our expert-led courses provide the knowledge and hands-on experience needed to master networking skills. Earn industry-recognized credentials to stand out and advance in the tech world.
                    </p>
                    <br />
                    <ul className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <li><span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Associate:
                        </span>{" "}
                            CCNA / JNCIA
                        </li>
                        <li><span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Professional:
                        </span>{" "}
                            CCNP / JNCIP
                        </li>
                        <li><span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Expertise:
                        </span>{" "}
                            CCIE / JNCIE
                        </li>

                    </ul>
                    <img src="/IT_Training/Networking_1.jpg" alt="" className="pt-5 rounded-lg" />
                </div>)
            );
        })}
    </>);
};

const DummyContentThree = () => {
    return (<>
        {[...new Array(1).fill(1)].map((_, index) => {
            return (
                (<div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
                    <p
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Deepen your expertise with our Network Protocol Testing
                        </span>{" "}
                        course. Learn to analyze and validate network protocols to ensure optimal performance and security. Gain practical skills and insights to excel in network quality assurance.
                    </p>
                    <img src="/IT_Training/ProtocolTesting_3.jpg" alt="" className="pt-5 rounded-lg" />
                </div>)
            );
        })}
    </>);
};
const data = [
    {
        category: "DevOps",
        title: "Master DevOps to streamline development, enhance collaboration, and accelerate software delivery.",
        src: "/IT_Training/DevOps_1.jpg",
        content: <DummyContent />,
    },
    {
        category: "Network Training",
        title: "Achieve expertise with our network training and certification programs to boost your career and technical skills.",
        src: "/IT_Training/Networking_3.jpg",
        content: <DummyContentTwo />,
    },
    {
        category: "Software Testing",
        title: "Master Network Protocol Testing with our expert-led course to ensure robust and reliable network performance.",
        src: "/IT_Training/ProtocolTesting_1.jpg",
        content: <DummyContentThree />,
    },

    // {
    //     category: "Product",
    //     title: "Maps for your iPhone 15 Pro Max.",
    //     src: "",
    //     content: <DummyContent />,
    // },
    // {
    //     category: "iOS",
    //     title: "Photography just got better.",
    //     src: "",
    //     content: <DummyContent />,
    // },
    // {
    //     category: "Hiring",
    //     title: "Hiring for a Staff Software Engineer",
    //     src: "",
    //     content: <DummyContent />,
    // },
];

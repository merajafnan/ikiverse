"use client";

import { useState } from "react";

export default function ContactForm() {
    const [fullName, setfullName] = useState("");
    const [businessEmail, setbusinessEmail] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [designation, setdesignation] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [needServiveIn, setneedServiveIn] = useState("");
    const [accountDiscussion, setaccountDiscussion] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmitEmployeerForm = async (e) => {
        e.preventDefault();

        console.log("Full name: ", fullName);
        console.log("Email: ", companyName);
        console.log("Message: ", phoneNumber);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullName,
                businessEmail,
                companyName,
                designation,
                phoneNumber,
                needServiveIn,
                accountDiscussion,
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setfullName("");
            setbusinessEmail("");
            setcompanyName("");
            setdesignation("");
            setphoneNumber("");
            setneedServiveIn("");
            setaccountDiscussion("");
        }
    };





    return (
        <div>

            <div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">

                <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
                    <div class="mb-8">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-neutral-200 lg:text-4xl">
                            Employer
                        </h2>
                        <p class="text-sm text-gray-600 dark:text-neutral-400 lg:text-xl">
                            I'm an employer looking to hire.
                        </p>
                    </div>

                    <form onSubmit={handleSubmitEmployeerForm}>

                        <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            <div class="sm:col-span-3">

                            </div>


                            <div class="sm:col-span-9">
                            </div>


                            <div class="sm:col-span-3">
                                <label for="fullName" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Full Name
                                </label>
                            </div>
                            <div class="sm:col-span-9">
                                <div class="sm:flex">
                                    <input onChange={(e) => setfullName(e.target.value)} value={fullName} id="fullName" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Maria Boone" />
                                </div>
                            </div>


                            <div class="sm:col-span-3">
                                <label for="businessEmail" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Business Email
                                </label>
                            </div>
                            <div class="sm:col-span-9">
                                <input onChange={(e) => setbusinessEmail(e.target.value)} value={businessEmail} id="businessEmail" type="email" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="maria@site.com" />
                            </div>


                            <div class="sm:col-span-3">
                                <label for="companyName" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Company Name
                                </label>
                            </div>
                            <div class="sm:col-span-9">
                                <input onChange={(e) => setcompanyName(e.target.value)} value={companyName} id="companyName" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Your Company" />
                            </div>


                            <div class="sm:col-span-3">
                                <label for="designation" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Designation
                                </label>
                            </div>
                            <div class="sm:col-span-9">
                                <input onChange={(e) => setdesignation(e.target.value)} value={designation} id="designation" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Your Designation" />
                            </div>


                            <div class="sm:col-span-3">
                                <label for="phoneNumber" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Phone Number
                                </label>
                            </div>
                            <div class="sm:col-span-9">
                                <div class="sm:flex">
                                    <input onChange={(e) => setphoneNumber(e.target.value)} value={phoneNumber} id="phoneNumber" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="+XX-XXXXXXXXXX" />
                                </div>
                            </div>


                            <div class="sm:col-span-3">
                                <label for="needServiveIn" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Need Service In
                                </label>
                            </div>

                            <div class="sm:col-span-9">
                                <div class="sm:flex">
                                    <input onChange={(e) => setneedServiveIn(e.target.value)} value={needServiveIn} id="needServiveIn" type="text" class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Services like: IT Staffing / Permanent Recruitem / Diversity Hiring " />


                                </div>
                            </div>








                            <div class="sm:col-span-3">
                                <label for="accountDiscussion" class="inline-block text-sm lg:text-xl text-gray-800 mt-2.5 dark:text-neutral-200">
                                    Please specify your point of discussion (for callback request)
                                </label>
                            </div>


                            <div class="sm:col-span-9">
                                <textarea onChange={(e) => setaccountDiscussion(e.target.value)} value={accountDiscussion} id="accountDiscussion" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="6" placeholder="Type your message..."></textarea>
                            </div>

                        </div>


                        <div class="mt-5 flex justify-end gap-x-2">

                            <div>
                                <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" type="submit" onClick={openModal}>
                                Contact Us Now
                                </button>

                                {isOpen && (
                                    <dialog open className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Status!</h3>
                                            <p className="py-4">
                                                {error &&
                                                    error.map((e) => (
                                                        <div
                                                            className={`${success ? "text-green-800" : "text-red-600"
                                                                } px-5 py-2`}
                                                        >
                                                            {e}
                                                        </div>
                                                    ))}
                                            </p>
                                            <button
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                        <div
                                            className="modal-backdrop"
                                            onClick={closeModal}
                                        ></div>
                                    </dialog>
                                )}
                            </div>


                        </div>
                    </form>



                </div>

            </div>


        </div>

    )
}
// Add this at the very top of your file
"use client";
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When I provide hiring requirements, am I making any obligations?",
      answer: "No, you aren't obligated to anything. Our policy is: pay only for results, meaning you only start paying once the new employee has begun working. If we can't find a suitable candidate for you, there's no cost involved.",
    },
    {
      question: "Is it possible to register all profiles through an online process?",
      answer: "Absolutely! You can register any profile you need with us. For each new vacancy, we will provide customized advice to suit your needs.",
    },
    {
      question: "What are the benefits of requesting a call back?",
      answer: "If you're interested in learning more about our staffing services or how we can address your talent requirements, or if you’re uncertain about the next steps, please complete the ‘request a call back’ form. Our representative will contact you to discuss your needs and guide you to the appropriate solutions.",
    },
    {
      question: "Who will reach out to me after I request a call back?",
      answer: "Once we review your request, an expert in your industry will get in touch with you.",
    },
    {
      question: "How soon after submitting my request can I expect a call back?",
      answer: "Typically, you should receive a call back within one business day.",
    },
    {
      question: "Is it possible to schedule a specific time for the call back?",
      answer: "You can specify your preferred time slot in the comments section of the form. However, availability is subject to our operating hours and the availability of our agents. We will try to accommodate your preferences if possible.",
    },
    {
      question: "Can I request a call back outside of regular business hours?",
      answer: "Yes, you can request a call back outside regular business hours, although this will depend on the availability of our resources.",
    },
    {
      question: "What happens if I miss the scheduled call back?",
      answer: "If you miss the call back, we will generally try to contact you again and follow up with an email providing further instructions. You may need to make a new request if you miss the initial call.",
    },
    {
      question: "Am I able to attach extra documents when posting a job vacancy?",
      answer: "Yes, you can include additional documents when submitting a vacancy by attaching them via the provided option on the form.",
    },
    {
      question: "If I already have my requirements clearly defined, is it still necessary to complete the form?",
      answer: "Even if you are already clear about your requirements, you still need to provide those details by filling out the form instead of just submitting a vacancy.",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white lg:text-5xl">
              Frequently<br />asked <span class="text-gray-400">questions</span>
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400 lg:text-xl">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="divide-y divide-gray-200 dark:divide-neutral-700">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6 pb-3">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start lg:text-2xl text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <svg
                    className={`shrink-0 size-5 text-gray-600 dark:text-neutral-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-[height] duration-300 ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                  role="region"
                >
                  <p className="lg:text-xl text-gray-800 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

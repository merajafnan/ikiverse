// Add this at the very top of your file
"use client";

import React, { useState } from 'react';

export default function TabsWithImage() {
  const [activeTab, setActiveTab] = useState('tabs-with-card-1');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl lg:text-5xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
                Values and Vision
              </h2>

              <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-white p-4 md:p-5 rounded-xl ${activeTab === 'tabs-with-card-1' ? 'bg-white shadow-md' : ''}`}
                  onClick={() => handleTabChange('tabs-with-card-1')}
                  aria-selected={activeTab === 'tabs-with-card-1'}
                >
                  <span className="flex gap-x-6">
                    <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold lg:text-xl">Integrity</span>
                      <span className="block mt-1 lg:text-xl">We uphold the highest standards of honesty and transparency in all our interactions.</span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-white p-4 md:p-5 rounded-xl ${activeTab === 'tabs-with-card-2' ? 'bg-white shadow-md' : ''}`}
                  onClick={() => handleTabChange('tabs-with-card-2')}
                  aria-selected={activeTab === 'tabs-with-card-2'}
                >
                  <span className="flex gap-x-6">
                    <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold lg:text-xl">Innovation</span>
                      <span className="block mt-1 lg:text-xl">We embrace creative solutions to address the evolving needs of our clients and candidates.</span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-white p-4 md:p-5 rounded-xl ${activeTab === 'tabs-with-card-3' ? 'bg-white shadow-md' : ''}`}
                  onClick={() => handleTabChange('tabs-with-card-3')}
                  aria-selected={activeTab === 'tabs-with-card-3'}
                >
                  <span className="flex gap-x-6">
                    <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold lg:text-xl">Excellence</span>
                      <span className="block mt-1 lg:text-xl">We strive for excellence in every service we provide, ensuring the best outcomes for our partners.</span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className={`text-start hover:bg-gray-200 focus:outline-none focus:bg-white p-4 md:p-5 rounded-xl ${activeTab === 'tabs-with-card-4' ? 'bg-white shadow-md' : ''}`}
                  onClick={() => handleTabChange('tabs-with-card-4')}
                  aria-selected={activeTab === 'tabs-with-card-4'}
                >
                  <span className="flex gap-x-6">
                    <svg className="shrink-0 mt-2 size-6 md:size-7 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold lg:text-xl">Collaboration</span>
                      <span className="block mt-1 lg:text-xl">We believe in the power of teamwork and work closely with our clients to achieve shared success.</span>
                    </span>
                  </span>
                </button>
                {/* Repeat similar structure for other tabs */}
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div id="tabs-with-card-1" className={activeTab === 'tabs-with-card-1' ? '' : 'hidden'} role="tabpanel">
                  <img className="shadow-2xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/aboutUs/as_1.png" alt="Features Image" />
                </div>
                <div id="tabs-with-card-2" className={activeTab === 'tabs-with-card-2' ? '' : 'hidden'} role="tabpanel">
                  <img className="shadow-2xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/aboutUs/as_2.png" alt="Features Image" />
                </div>
                <div id="tabs-with-card-3" className={activeTab === 'tabs-with-card-3' ? '' : 'hidden'} role="tabpanel">
                  <img className="shadow-2xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/aboutUs/as_3.png" alt="Features Image" />
                </div>
                <div id="tabs-with-card-4" className={activeTab === 'tabs-with-card-4' ? '' : 'hidden'} role="tabpanel">
                  <img className="shadow-2xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20" src="/aboutUs/as_4.png" alt="Features Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


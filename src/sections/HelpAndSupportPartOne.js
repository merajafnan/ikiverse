"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Breathe easy; we've got this! Your support squad is just a call away!
`;

export function HelpAndSupportPartOne() {
  return (
    <div >
      <div className="px-8">
        <a class="inline-flex items-center gap-x-1 py-4 text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          Back to Home
        </a>
      </div>
      <div className="flex items-center justify-center h-[120px]">
        <TextGenerateEffect words={words} />
      </div>

    </div>




  );
}

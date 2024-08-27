"use client";

export function HelpAndSupportPartTwo() {
  return (
    <div class="py-10 px-20">
      <div class="bg-neutral-900 rounded-md">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto rounded-md">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 ">

            <div class="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <iframe class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62223.28703847074!2d77.57496318139091!3d12.91058554821605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157c4572de01%3A0xe59d4ce86db508e5!2sZ.N.%20Function%20Hall!5e0!3m2!1sen!2sin!4v1722850971724!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="space-y-14">
              <h2 class="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us <span><br /><p class="mt-1 lg:text-xl text-neutral-400">Whatever your problem is - we will get your issue resolved.</p></span></h2>

              <div class="flex gap-x-5">
                <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div class="grow">
                  <h4 class="text-white font-semibold lg:text-xl">Our address:</h4>

                  <address class="mt-1 text-neutral-400 text-sm not-italic lg:text-xl">
                    300 Bath Street, Tay House<br></br>
                    Glasgow G2 4JR, United Kingdom
                  </address>
                </div>
              </div>
              <div class="flex gap-x-5">
                <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>
                <div class="grow">
                  <h4 class="text-white font-semibold lg:text-xl">Email us:</h4>
                  <a class="mt-1 lg:text-xl text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200" href="#mailto:example@site.co" target="_blank">
                    hello@example.so
                  </a>
                </div>
              </div>
              <div class="flex gap-x-5">
                <svg class="shrink-0 size-6 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                <div class="grow">
                  <h4 class="text-white font-semibold lg:text-xl">Phone Number:</h4>
                  <p class="mt-1 text-neutral-400 lg:text-xl">+91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>

    </div>

  );
}

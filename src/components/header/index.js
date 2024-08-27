// "use client";
// import { useState } from 'react';


// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };


//   return (
//     <div className="sticky top-0 backdrop-blur-md z-20 ">
//       <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-xl py-3 dark:bg-neutral-800">
//         <nav className="px-10 w-full mx-auto flex flex-wrap basis-full items-center justify-between">
//           <a className="sm:order-1 flex-none text-xl font-bold dark:text-white focus:outline-none focus:opacity-80" href="/">IkiVerse</a>
//           <div className="sm:order-3 flex items-center gap-x-2">
//             <button
//               type="button"
//               className="sm:hidden flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
//               onClick={toggleMenu}
//               aria-expanded={isOpen}
//               aria-controls="navbar-alignment"
//               aria-label="Toggle navigation"
//             >
//               <svg className={`${isOpen ? 'hidden' : 'block'} shrink-0`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="3" x2="21" y1="6" y2="6" />
//                 <line x1="3" x2="21" y1="12" y2="12" />
//                 <line x1="3" x2="21" y1="18" y2="18" />
//               </svg>
//               <svg className={`${isOpen ? 'block' : 'hidden'} shrink-0`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M18 6 6 18" />
//                 <path d="m6 6 12 12" />
//               </svg>
//               <span className="sr-only">Toggle</span>
//             </button>
//             <button
//               type="button"
//               className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
//             >
//               Login
//             </button>
//           </div>

//           <div
//             id="navbar-alignment"
//             className={`overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 ${isOpen ? 'block' : 'hidden'}`}
//           >
//             <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
//               <a className="font-medium text-gray-600 focus:outline-none" href="/#" aria-current="page">Home</a>
//               <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500" href="/aboutUs">About us</a>
//               <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500" href="/jobs">Jobs</a>
//               <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500" href="/blog">Blog</a>


//             </div>
//           </div>


//         </nav>
//       </header>
//     </div>

//   );
// }

// export default Header;



"use client";
import { useState } from 'react';

function Header() {
  return (
    <div className='sticky top-0 backdrop-blur-md z-50'>
      <div className="navbar relative font-bold">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow absolute top-full left-0">
              <li><a href='/'>Home</a></li>
              <li><a href='/aboutUs'>About us</a></li>
              <li>
                <a>Our Services</a>
                <ul className="p-2 bg-base-100 rounded-box z-[999]">
                  <li><a href='/hrService'>HR Service</a></li>
                  <li><a href='/eduService'>IT Training</a></li>
                  <li><a href='/webDevService'>Web Development</a></li>
                </ul>
              </li>
              <li><a href='/jobs'>Jobs</a></li>
            </ul>
          </div>
          <a className="rounded-md px-5 hover:bg-gray-100 text-xl py-2">ikiVerse</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/'>Home</a></li>
            <li><a href='/aboutUs'>About us</a></li>
            <li>
              <details>
                <summary>Our Services</summary>
                <ul className="p-2">
                  <li><a href='/hrService'>HR Service</a></li>
                  <li><a href='/eduService'>IT Training</a></li>
                  <li><a href='/webDevService'>Web Development</a></li>
                </ul>
              </details>
            </li>
            <li><a href='/jobs'>Jobs</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">login</a>
        </div>
      </div>
    </div>

  );
}

export default Header;




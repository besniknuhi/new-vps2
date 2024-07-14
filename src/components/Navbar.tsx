"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const changeBanckground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBanckground);
  }, []);

  return (
    <nav className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <div className="hidden lg:block w-full">
        <div
          className={`w-full flex relative justify-between px-4 py-2 rounded-full transition duration-200 ${
            navbar ? "bg-neutral-100" : "bg-transparent"
          } `}
        >
          {/* <div className="absolute inset-0 h-full w-full scroll bg-neutral-100 pointer-events-none rounded-full"></div> */}
          <div className="flex flex-row gap-2 items-center">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
            >
              <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
              <span className="font-medium text-black">Every AI</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <Link
                href="/pricing"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] hover:text-black text-[#525252]"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] hover:text-black text-[#525252]"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            {/* <button className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden dark:text-[#d4d4d4] text-[#525252]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-sun-low h-4 w-4 flex-shrink-0  dark:text-neutral-500 text-neutral-700"
                >
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                  <path d="M4 12h.01"></path>
                  <path d="M12 4v.01"></path>
                  <path d="M20 12h.01"></path>
                  <path d="M12 20v.01"></path>
                  <path d="M6.31 6.31l-.01 -.01"></path>
                  <path d="M17.71 6.31l-.01 -.01"></path>
                  <path d="M17.7 17.7l.01 .01"></path>
                  <path d="M6.3 17.7l.01 .01"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon h-4 w-4   flex-shrink-0  dark:text-neutral-500 text-neutral-700"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </div>
              <span className="absolute h-[1px] -m-[1px] overflow-hidden">
                Toggle theme
              </span>
            </button> */}
            <Link
              href="/login"
              className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center lg:hidden ">
        <div className="flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
          >
            <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
            <span className="font-medium text-black dark:text-white">
              Every AI
            </span>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={() => setActive(!active)}
              className="p-2 outline-none"
            >
              <span
                className={`
                  ${
                    active ? "rotate-45 translate-y-[6px]" : ""
                  } block bg-black dark:bg-white w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "opacity-0" : "opacity-100"
                  } block bg-black dark:bg-white w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "-rotate-45 translate-y-[-6px]" : ""
                  } block bg-black dark:bg-white w-[20px] h-[2px] m-1 duration-300`}
              ></span>
            </button>
            {/* <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800">
              <div className="flex items-center justify-between w-full px-5">
                <Link
                  href="/"
                  className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                >
                  <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
                  <span className="font-medium text-black dark:text-white">
                    Every AI
                  </span>
                </Link>
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden">
                    <div>
                      {" "}
                      <Image src={sun} alt="theme icon" />
                    </div>
                    <span className="absolute h-[1px] -m-[1px] overflow-hidden">
                      Toggle theme
                    </span>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

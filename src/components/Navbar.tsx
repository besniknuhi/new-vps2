"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const [navbar, setNavbar] = useState(false);

  const changeBanckground = () => {
    if (typeof window !== "undefined" && window.scrollY >= 100) {
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
        <div className="flex justify-between bg-white items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
          <Link
            href="/"
            className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1 relative z-20"
          >
            <div className="h-5 w-6 bg-black rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
            <span className="font-medium text-black">Every AI</span>
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
                  } block bg-black w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "opacity-0" : "opacity-100"
                  } block bg-black w-[20px] h-[2px] m-1 duration-300`}
              ></span>
              <span
                className={`
                  ${
                    active ? "-rotate-45 translate-y-[-6px]" : ""
                  } block bg-black w-[20px] h-[2px] m-1 duration-300`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";

import graph from "/public/header.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
          <div className="flex justify-center">
            <button className="bg-neutral-50 cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 inline-block w-fit mx-auto">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500"></span>
              </span>
              <div className="relative flex space-x-2 items-center z-10  rounded-full bg-neutral-100 py-1.5 px-4">
                <span>Fast. Reliable. Secure.</span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500"></span>
            </button>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10">
            <span className="inline-block align-top text-wrap">
              Unleash the Power of High Performance VPS
            </span>
          </h1>
          <p className="text-center mt-6 text-base md:text-xl text-[#525252] max-w-3xl mx-auto relative z-10">
            <span className="inline-block align-top text-balance">
              Experience unparalleled performance with our VPS and Bare Metal
              Servers. Enjoy 0ms ping to [insert name] RPCs for seamless
              connectivity.
            </span>
          </p>
          <div className="flex items-center gap-4 justify-center mt-6 relative z-10">
            <Link
              href="#about"
              className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center flex space-x-2 items-center group"
            >
              <span>Contact us</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-[#525252] group-hover:translate-x-1 stroke-[1px] h-3 w-3 duration-200 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="p-4 border border-neutral-200 bg-neutral-100 rounded-[32px] mt-20 relative">
            <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white scale-[1.1] pointer-events-none"></div>
            <div className="p-2 bg-white border border-neutral-200 rounded-[24px]">
              <Image src={graph} alt="graph" className="rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

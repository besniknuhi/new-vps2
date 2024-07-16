"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [showPsw, setShowPsw] = useState(false);

  return (
    <section className="max-w-7xl flex flex-col justify-center h-screen  mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
      <div className="flex relative w-1/2 z-20 items-center mx-auto bg-neutral-50 justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 rounded-3xl xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight">
              Sign up for an account
            </h1>
          </div>
          <div className="py-10">
            <div>
              <form action="" className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-neutral-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      type="name"
                      placeholder="John Smith"
                      className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-md text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-neutral-700"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      placeholder="mail@example.com"
                      className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-md text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-neutral-700"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type={showPsw ? "password" : "text"}
                        className="block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-md text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6"
                      />
                      <div
                        onClick={() => setShowPsw(!showPsw)}
                        className="absolute right-3 top-[30%]"
                      >
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
                          className="lucide lucide-eye text-gray-400 cursor-pointer h-4"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] w-full">
                    Sign Up
                  </button>
                  <p className="text-sm text-center mt-4">
                    Already have an account?{" "}
                    <Link href="/login" className="text-black">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

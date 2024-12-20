import Image from "next/image";
import Link from "next/link";

import { frameC, twitter, youtube, discord, arrowUR } from "@/assets/images";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] lg:px-12 sm:pt-5 mx-auto">
      <div className="relative overflow-hidden rounded-[40px] sm:p-5 sm:pb-0">
        <Image
          src={frameC}
          alt="background frame"
          className="absolute inset-x-0 top-0 hidden w-full sm:block"
        />
        <div className="relative p-4 overflow-hidden lg:p-20 rounded-[20px]">
          <div className="relative flex flex-wrap justify-between gap-10 border-b border-b-black">
            <div className="flex flex-col gap-8 pb-6">
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2 p-3 border rounded-full w-max border-black">
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-black rounded-full hover:bg-neutral-200"
                    >
                      <Image src={twitter} alt="twitter icon" />
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-black rounded-full hover:bg-neutral-200"
                    >
                      <Image src={youtube} alt="youtube icon" />
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="p-2 border border-black rounded-full hover:bg-neutral-200"
                    >
                      <Image src={discord} alt="discord icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-2xl min-h-[300px] flex flex-col justify-between gap-12">
              <div className="flex flex-col w-full gap-6 sm:flex-row sm:justify-between sm:flex-wrap">
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-black">
                    Products
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    Intel VPS
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    AMD VPS
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    Bare Metal Servers
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-black">
                    Resources
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    Network Status
                  </Link>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    Knowledge Base
                  </Link>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-lg font-semibold sm:text-xl text-black">
                    Company
                  </p>
                  <Link
                    href=""
                    className="text-base font-medium text-[#525252] hover:text-black duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="lg:pt-8 lg:px-8 lg:pb-6 p-3 sm:p-5 rounded-t-[20px] border border-black border-b-0 flex flex-col gap-3">
                <p className="text-sm font-semibold sm:text-lg text-[#525252]">
                  Have a sales question or looking for support?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 w-max"
                >
                  <span className="text-base font-semibold sm:text-xl text-black">
                    Get in touch
                  </span>
                  <span className="border border-black rounded-full p-2 hover:bg-neutral-200 duration-300">
                    <Image src={arrowUR} alt="arrow icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end pt-4">
            <p className="text-xs font-medium sm:text-base text-[#525252]">
              &#169; 2024 [insert name] All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

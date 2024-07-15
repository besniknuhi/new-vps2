import Image from "next/image";
import Link from "next/link";

import { plans } from "@/assets/planData";
import { checkmark, arrowR } from "@/assets/images";

const buttons = [
  { id: 1, text: "Monthly" },
  { id: 2, text: "Yearly" },
];

export default function Plans() {
  return (
    <section id="plans" className="relative max-w-[1440px] mx-auto py-20">
      <div className="px-4 sm:px-9 pt-20 pb-12 sm:pt-[100px] max-w-screen-2xl mx-auto relative flex flex-col gap-10 sm:gap-20">
        <div className="flex flex-col flex-wrap items-center text-center justify-between gap-20 xl:flex-nowrap sm:px-11">
          <div>
            <h1 className="mt-2 mb-8 text-4xl font-semibold sm:text-5xl">
              Simple pricing for your ease
            </h1>
            <p className="inline-block sm:text-lg text-[#525252]">
              Our tailored plans are designed to grow with you. <br /> Opt for
              longer commitments and enjoy exclusive discounts on our plans.
            </p>
          </div>
          <div className="flex items-center p-2 rounded-sm">
            {buttons.map((button) => (
              <button
                key={button.id}
                className="text-sm font-medium text-light-1 p-3 lg:text-lg rounded-sm relative min-w-max flex items-center hover:bg-neutral-100 duration-300"
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-8 sm:items-center"></div>
        <div className="relative">
          <div className="max-w-[1440px] mx-auto">
            <div>
              <div className="flex flex-wrap">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="mx-auto pt-px px-px rounded-[32px] mb-8 xl:first:rounded-tl-[32px] xl:last:rounded-tr-[32px] max-w-sm sm:max-w-xs w-full xl:max-w-xs bg-gradient-to-b from-[#D5D5D5] to-transparent"
                  >
                    <div className="relative flex flex-col bg-[#F5F5F5] w-full h-full px-4 py-12 overflow-hidden rounded-[32px] sm:px-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-base font-semibold sm:text-xl">
                          {plan.title}
                        </p>
                        <div className="flex items-end gap-1.5">
                          <p className="inline-flex items-end font-semibold text-6xl">
                            ${plan.priceFull}
                            <small className="text-xl">
                              .{plan.priceCents}
                            </small>
                          </p>
                          <span className="font-medium text-[#525252]">
                            /month
                          </span>
                        </div>
                      </div>
                      <span className="block w-full h-px mt-6 mb-8 bg-gradient-to-r from-transparent via-black to-transparent"></span>
                      <ul className="flexflex-col gap-3 mb-12 text-[#525252]">
                        <li className="flex items-center gap-2 font-medium text-primary-2 text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.cpu}
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium text-primary-2 sm:text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.ram}
                        </li>
                        <li className="flex items-center gap-2 text-sm font-medium text-primary-2 sm:text-base">
                          <Image src={checkmark} alt="checkmark icon"></Image>
                          {plan.storage}
                        </li>
                      </ul>
                      <Link
                        href="/store"
                        className="inline-flex py-3 px-8 font-bold items-center justify-center rounded-full border border-black text-black text-lg leading-7 hover:bg-[#E5E5E5] duration-300"
                      >
                        Get started{" "}
                        <Image src={arrowR} alt="arrow icon"></Image>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center mt-6 gap-7 sm:px-11">
          <div className="flex flex-col max-w-md gap-3">
            <p className="text-base font-semibold">All plans include:</p>
            <ul className="grid grid-flow-col grid-rows-3 gap-y-3 gap-x-5 sm:gap-x-8">
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>10Gbps port
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Multiple
                locations
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Power
                controls
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Web-based
                VNC
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>Multiple OS
              </li>
              <li className="flex gap-2 text-sm font-medium sm:items-center text-primary-2 sm:text-base">
                <Image src={checkmark} alt="checkmark icon"></Image>24x7 uptime
                & support
              </li>
            </ul>
          </div>
          <div className="px-px pt-px rounded-t-[30px] bg-gradient-to-b from-[#D5D5D5] to-transparent overflow-hidden max-w-[600px]">
            <div className="px-8 py-6 overflow-hidden bg-neutral-100 rounded-[30px] relative">
              <div className="relative">
                <p className="text-sm font-semibold sm:text-base">
                  Can&apos;t find the perfect plan?
                </p>
                <p className="mt-2 mb-8 text-sm font-medium sm:text-base">
                  No problem! Our scalable plans are designed to grow with you.
                  If you need something more specific, we can create a custom
                  plan tailored to your unique requirements.
                </p>
                <div className="p-px rounded-full w-max">
                  <Link
                    href="/contact"
                    className="border inline-flex border-black rounded-full bg-neutral-100 text-black text-lg leading-7 py-3 px-8 font-bold hover:bg-neutral-200 duration-300"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

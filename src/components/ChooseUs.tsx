import Image from "next/image";
import Link from "next/link";

import {
  frameC,
  trustIcon,
  starIcon,
  messageIcon,
  scalabilityIcon,
  secureIcon,
} from "@/assets/images";

const cards = [
  {
    id: 1,
    icon: messageIcon,
    title: "High Performance",
    text: "Experience unparalleled speed & reliability with our high-performance servers",
  },
  {
    id: 2,
    icon: scalabilityIcon,
    title: "Scalability",
    text: "Easily scale your operations with flexible VPS and dedicated server plans",
  },
  {
    id: 3,
    icon: secureIcon,
    title: "Secure Management",
    text: "Manage your servers securely with our robust management tools",
  },
];

export default function ChooseUs() {
  return (
    <section
      id="about"
      className="max-w-[1440px] xl:px-12 sm:pt-[60px] mx-auto pb-20"
    >
      <div className="relative overflow-hidden rounded-[40px] sm:p-5 sm:pb-0">
        <Image
          src={frameC}
          alt="background frame"
          className="absolute inset-x-0 top-0 hidden w-full sm:block"
        />
        <div className="relative xl:px-9 px-4 overflow-hidden py-20 rounded-[20px]">
          <div className="relative flex flex-wrap items-center justify-between gap-10 mb-16 lg:gap-20">
            <div className="max-w-[798px] w-full">
              <h2 className="mb-6 text-4xl font-semibold sm:text-5xl">
                Why choose [insert name]?
              </h2>
              <p className="text-base font-medium text-[#525252]">
                Experience the cutting-edge performance and reliability of
                OrbitServers. Tailored for the next generation of Web3
                enthusiasts, our servers are engineered to deliver exceptional
                processing power and lightning fast response times.
              </p>
            </div>
            <div className="p-px overflow-hidden rounded-xl bg-neutral-50">
              <div className="py-4 px-6 rounded-xl">
                <div>
                  <Image
                    src={trustIcon}
                    alt="trust pilot icon"
                    className="w-auto h-8 animate-pulse"
                  />
                </div>
                <div className="flex items-center gap-2 mt-4 mb-3">
                  <Image src={starIcon} alt="star icon" />
                  <Image src={starIcon} alt="star icon" />
                  <Image src={starIcon} alt="star icon" />
                  <Image src={starIcon} alt="star icon" />
                  <Image src={starIcon} alt="star icon" />
                </div>
                <p className="text-sm font-medium">Average Score 5/5</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[30px] relative">
            {cards.map((card) => (
              <div
                key={card.id}
                className="p-px bg-gradient-to-b from-[#D5D5D5] to-transparent rounded-[30px] overflow-hidden"
              >
                <div className="px-6 py-8 bg-neutral-50 rounded-[30px] h-full flex flex-col">
                  <div className="inline-flex items-center gap-4">
                    <Image src={card.icon} alt="icon" />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-semibold ">{card.title}</h3>
                    </div>
                  </div>
                  <p className="mt-5 mb-10 text-base font-medium text-[#525252]">
                    {card.text}
                  </p>
                  <Link
                    href="#infra"
                    className="border border-[rgb(0,57,61)] w-full mt-auto text-[#525252] py-3 px-8 inline-flex justify-center rounded-full font-bold hover:bg-[#E5E5E5] duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

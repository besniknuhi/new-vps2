import Image from "next/image";
import Link from "next/link";

import { cards, opSystems } from "@/assets/infrastructureData";

export default function Infrastructure() {
  return (
    <section className="max-w-[1440px] mx-auto xl:px-20 pt-20 pb-32">
      <div className="p-px rounded-[30px] overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-transparent">
        <div className="rounded-[30px] w-full px-4 lg:px-14 pt-14 pb-20">
          <h2 className="mb-16 text-4xl font-semibold text-center sm:text-5xl">
            Maximize your infrastructure efficiency
          </h2>
          <div className="flex flex-wrap justify-between lg:flex-nowrap gap-9 text-[#525252]">
            <div className="flex flex-col gap-4 sm:pt-8 lg:max-w-[312px] text-primary-2 text-base font-medium">
              <p>
                Whether you&apos;re looking for powerful virtual private servers
                or dedicated hardware, we have the right option for you.
              </p>
              <p>See the details right here:</p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="relative">
                <div className="grid gap-5 sm:grid-cols-2">
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="p-px bg-gradient-to-b from-[#D5D5D5] to-transparent rounded-[30px] overflow-hidden"
                    >
                      <div className="px-6 py-8 rounded-[30px] h-full flex flex-col bg-[#F5F5F5]">
                        <div className="inline-flex items-center gap-4">
                          <Image src={card.icon} alt="icon" />
                          <div className="flex flex-col gap-1">
                            <h3 className="text-xl text-black font-semibold ">
                              {card.title}
                            </h3>
                            <h4 className="text-sm font-medium">
                              {card.subtitle}
                            </h4>
                          </div>
                        </div>
                        <p className="mt-5 mb-10 text-base font-medium text-primary-2">
                          {card.text}
                        </p>
                        <Link
                          href="#plans"
                          className="border border-black w-full mt-auto text-[#525252] py-3 px-8 inline-flex justify-center rounded-full font-bold hover:bg-[#E5E5E5] duration-300"
                        >
                          View Plans
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-base font-semibold text-light-1">
                  Supported operating systems:
                </p>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-4 sm:gap-9">
                  {opSystems.map((system) => (
                    <div
                      key={system.id}
                      className="flex flex-col gap-2 sm:gap-4"
                    >
                      <Image src={system.img} alt="system image" />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-base font-medium text-[#525252]">
                          {system.title}
                        </p>
                        <p className="text-xs font-medium">{system.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

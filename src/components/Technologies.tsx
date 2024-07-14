import Image from "next/image";

import {
  brandAmd,
  brandCloud,
  brandIntel,
  brandAlma,
  brandUbuntu,
  brandWindows,
} from "@/assets/images";

export default function Technologies() {
  return (
    <section className="relative z-20 py-10 md:py-40">
      <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-3xl md:text-5xl md:leading-tight">
        <span className="inline-block text-wrap align-top">Technologies</span>
      </h2>
      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-x-3 sm:gap-y-3">
          <Image src={brandAmd} alt="brand images" />
          <Image src={brandCloud} alt="brand images" />
          <Image src={brandIntel} alt="brand images" />
          <Image src={brandAlma} alt="brand images" />
          <Image src={brandUbuntu} alt="brand images" />
          <Image src={brandWindows} alt="brand images" />
        </div>
      </div>
    </section>
  );
}

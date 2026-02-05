"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="pt-16 bg-linear-to-b from-[#B3DFFE] to-[#C3E5FE57]">
        <Container className="flex flex-col lg:flex-row items-end justify-between gap-4">
          <div className="flex-1 space-y-4 py-20 md:py-24">
            <span className="text-primary font-semibold text-lg lg:text-2xl">
              Smart Solutions
            </span>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
              We&apos;re The Best Tech Leading Company In Bangladesh
            </h1>
            <p>
              We help businesses grow with modern websites, Web3 solutions,
              mobile apps, and result-driven UI/UX design. From idea to launch —
              we build digital products that perform.
            </p>
            <div className="flex items-center flex-wrap gap-3 md:gap-6 mt-7">
              <Button size="lg" className={"w-full sm:w-auto rounded-sm!"}>Start Your Project</Button>
              <Button
                size="lg"
                variant="secondary"
                className={"bg-white text-gray-600 w-full sm:w-auto rounded-sm!"}
              >
                View Our Work
              </Button>
            </div>
          </div>
          <div className="flex-1 h-full">
            <Image
              src={"/banner.png"}
              alt="We're The Best Tech Leading Company In Bangladesh"
              width={1196}
              height={800}
              className="w-full inline-block"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;

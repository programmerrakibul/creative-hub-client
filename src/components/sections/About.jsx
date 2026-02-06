"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const featuresList = [
  {
    id: "f1a2b3c4d5e6",
    text: "Best IT Solutions & Service",
  },
  {
    id: "g7h8i9j0k1l2",
    text: "Always Latest Technology",
  },
  {
    id: "m3n4o5p6q7r8",
    text: "24 Hour's Customer Service",
  },
  {
    id: "s9t0u1v2w3x4",
    text: "World Best Service",
  },
];

const About = () => {
  const pathname = usePathname();

  return (
    <>
      <section
        className={clsx("py-14", { "bg-[#F9F4F1]": pathname !== "/about" })}
      >
        <Container className="flex flex-col-reverse lg:flex-row items-center gap-14">
          <div className="space-y-3.5 flex-1">
            <Heading
              h5="about us"
              h3="We're leading The Power Of Technology"
              align="start"
            />
            <p className="-mt-10">
              Harnessing innovation and cutting-edge technology, we deliver
              smart solutions that empower businesses, enhance productivity, and
              drive growth. Our expertise transforms ideas into digital
              realities, shaping the future while connecting people, processes,
              and possibilities seamlessly
            </p>

            <ul className="grid grid-cols-2 gap-3.5">
              {featuresList.map((f) => (
                <li key={f.id}>
                  <Check size={18} className="inline-block mr-1.5" />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 relative">
            <Image
              src={"/about-1.jpg"}
              alt="About image 1"
              width={428}
              height={228}
              className="rounded-2xl aspect-square object-cover w-[80%]"
            />

            <Image
              src={"/about-2.jpg"}
              alt="About image 1"
              width={334}
              height={334}
              className="rounded-2xl aspect-square object-cover absolute top-[50%] left-[50%] -translate-[25%] z-10 w-[60%]"
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";

import HeroImage from "../public/image/hero-image.svg";
import IconDribble from "../public/icon/icon-dribble.svg";
import IconFigma from "../public/icon/icon-figma.svg";
import IconGithub from "../public/icon/icon-github.svg";
import Link from "next/link";

export default function Into() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <section className="intro flex items-center w-full md:h-[calc(100vh-80px)]">
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-center relative">
          <div className="max-w-[537px]">
            <h2 className="mt-[34px] text-[32px] font-semibold mb-8 md:mt-0">
              Elias is a <span className="text-[#C778DD]">web designer</span>{" "}
              and <span className="text-[#C778DD]">front-end developer</span>
            </h2>
            <p className="text-[#ABB2BF] mb-6">
              He crafts responsive websites where technologies meet creativity
            </p>
            <Button
              type="button"
              onClick={handleClick}
              className="hidden md:block"
            >
              Contact Me !!
            </Button>
          </div>
          <div>
            <Image src={HeroImage} alt="Hero Image" width={500} height={500} />
          </div>
        </div>
      </section>
      <div className="absolute top-0 left-[17px]  flex-col items-center justify-center gap-2 hidden xxl:flex">
        <div className="h-[191px] w-[1px] bg-[#ABB2BF] animate-pulse"></div>

        <div className="flex flex-col gap-4">
          <Link
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="animate-pulse hover:scale-110 hover:invert transition-transform duration-300"
              src={IconGithub}
              alt="Icon github"
            />
          </Link>

          <Link
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="animate-spin-slow hover:scale-110 hover:invert transition-transform duration-300"
              src={IconDribble}
              alt="Icon dribble"
            />
          </Link>

          <Link
            href="https://figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="animate-bounce hover:scale-110 hover:invert transition-transform duration-300"
              src={IconFigma}
              alt="Icon figma"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./button";

import HeroImage from "../public/image/hero-image.svg";

export default function Into() {
  
  const router = useRouter();
  
  const handleClick = () => {
    router.push('/contact');
  }

  return (
    <section className="intro flex items-center w-full md:h-[calc(100vh-80px)]">
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-center">
        <div className="max-w-[537px]">
          <h2 className="mt-[34px] text-[32px] font-semibold mb-8 md:mt-0">
            Elias is a <span className="text-[#C778DD]">web designer</span> and{" "}
            <span className="text-[#C778DD]">front-end developer</span>
          </h2>
          <p className="text-[#ABB2BF] mb-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button type="button" onClick={handleClick} className="hidden md:block">Contact Me !!</Button>
        </div>
        <div>
          <Image src={HeroImage} alt="Hero Image" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

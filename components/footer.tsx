import Image from "next/image";
import FrameContactInfo from "../public/image/frame-contact-info.svg";

import LogoDefault from "../public/icon/logo-default.svg";

export default function Footer() {

  return (
    <section className="contact w-full h-[40vh] mt-[90px] md:mb-0 md:mt-[74px]">
      <div className="flex items-center justify-between w-full mt-6 md:mt-10">
        <div>
          <div className="flex mb-4">
            <Image className="pr-2" src={LogoDefault} alt="Logo" width={40} height={40} />
            <span className="text-white font-bold">Elias</span>
          </div>
          <p className="max-w-[511px]">Web designer and front-end developer</p>
        </div>
        <div>
          <p className="text-2xl">Media</p>
        </div>
      </div>
    </section>
  );
}

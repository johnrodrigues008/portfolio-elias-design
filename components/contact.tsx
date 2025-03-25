import Image from "next/image";
import FrameContactInfo from "../public/image/frame-contact-info.svg";


export default function Contact() {

  return (
    <section className="contact w-full mt-[90px] h-[60vh]  mb-6 md:mb-0 md:mt-[74px]">
      <div className="flex md:flex-row items-center justify-between w-full">
        <div className="flex items-center w-full">
          <h2 className="text-[24px] md:text-[32px] font-medium mr-4 whitespace-nowrap">
            <span className="text-[#C778DD]">#</span>Contact
          </h2>

          <div className="h-[1px] w-full max-w-[511px] bg-[#C778DD] animate-pulse mr-[10px]"></div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-6 md:mt-10">
        <div>
            <p className="max-w-[511px]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </div>
        <div>
            <Image src={FrameContactInfo} alt="Frame box info image" />
        </div>
      </div>
    </section>
  );
}

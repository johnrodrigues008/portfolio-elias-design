import Image from "next/image";
import FrameBox from "../public/image/frame-box.svg";
import FrameBoxInfo from "../public/image/frame-box-info.svg";


export default function Skills() {

  return (
    <section className="skills w-full mt-[90px] h-[80vh] mb-6 md:mb-0 md:mt-[74px]">
      <div className="flex md:flex-row items-center justify-between w-full">
        <div className="flex items-center w-full">
          <h2 className="text-[24px] md:text-[32px] font-medium mr-4 whitespace-nowrap">
            <span className="text-[#C778DD]">#</span>Skills
          </h2>

          <div className="h-[1px] w-full max-w-[511px] bg-[#C778DD] animate-pulse mr-[10px]"></div>
        </div>
      </div>

      <div className="flex items-center justify-around w-full mt-6 md:mt-10">
        <div>
            <Image src={FrameBox} alt="Frame box image" />
        </div>
        <div>
            <Image src={FrameBoxInfo} alt="Frame box info image" />
        </div>
      </div>
    </section>
  );
}

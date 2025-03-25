import Image from "next/image";
import { Button } from "./button";
import { useRouter } from "next/navigation";

import AboutImage from "../public/image/about_image.svg";

export default function About() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/contact");
    };
    return (
        <section className="about w-full mt-[100px] h-[80vh]  mb-6 md:mb-0 md:mt-[74px]">
            <div className="flex md:flex-row items-center justify-between w-full">
                <div className="flex items-center w-full">
                    <h2 className="text-[24px] md:text-[32px] font-medium mr-4 whitespace-nowrap">
                        <span className="text-[#C778DD]">#</span>About
                    </h2>

                    <div className="h-[1px] w-full max-w-[511px] bg-[#C778DD] animate-pulse mr-[10px]"></div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full mt-6 md:mt-10">
                <div className="max-w-[511px]">
                    <p className="mb-2 font-light">Hello, i’m Elias!</p>
                    <p className="mb-2 font-light">I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
                    <p className="mb-2 font-light">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
                    <Button
                        type="button"
                        onClick={handleClick}
                        className="hidden mt-7 md:block"
                    >
                        Read more !!
                    </Button>
                </div>
                <div>
                    <Image src={AboutImage} alt="Frame box info image" />
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import IconArrow from "../public/icon/icon-arrow.svg";
import { useRouter } from "next/navigation";

import ImageProject1 from "../public/image/project-1.svg";
import ImageProject2 from "../public/image/project-2.svg";
import ImageProject3 from "../public/image/project-3.svg";

import IconArrowSeq from "../public/icon/icon-arrow-seq.svg";
import IconArrowAlt from "../public/icon/icon-arrow-alt.svg";

import { Button } from "./button";

export default function Projects() {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const projects = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      tags: "HTML SCSS Python Flask",
      image: ImageProject1,
      linkExternal: "https://github.com/",
      linkCached: "https://github.com/",
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot dasdasdasd dasdasdas dasd asdasdas dasd",
      tags: "React Express Discord.js Node.JS HTML SCSS Python Flask",
      image: ImageProject2,
      linkExternal: "https://dribbble.com/",
      linkCached: "",
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      tags: "CSS Express Node.js",
      image: ImageProject3,
      linkExternal: "https://figma.com/",
      linkCached: "",
    },
  ];

  return (
    <section className="projects w-full mt-[90px] h-full  mb-6 md:mb-0 md:mt-[74px] md:h-[100vh]">
      <div className="flex md:flex-row items-center justify-between w-full">
        <div className="flex items-center w-full">
          <h2 className="text-[24px] md:text-[32px] font-medium mr-4 whitespace-nowrap">
            <span className="text-[#C778DD]">#</span>Projects
          </h2>

          <div className="h-[1px] w-full max-w-[511px] bg-[#C778DD] animate-pulse mr-[10px]"></div>
        </div>

        <button
          onClick={() => handleNavigation("/work")}
          className="flex items-center whitespace-nowrap hover:text-[#C778DD] mr-6"
        >
          <h4 className="mr-[10px] text-[16px] md:text-[18px]">View all</h4>
          <Image
            src={IconArrow}
            alt="Icon arrow"
            className="w-[25px] md:w-[30px]"
          />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 md:mt-[48px]">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.linkCached}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gray-700 border border-[#ABB2BF] h-fit"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full mx-auto border-b border-[#ABB2BF]"
            />
            <div className="w-full border-b border-[#ABB2BF] text-[#ABB2BF] text-[16px] flex p-2">
              {project.tags}
            </div>
            <h2 className="text-white text-[24px] font-medium text-start p-2 pb-0">
              {project.title}
            </h2>
            <p className="text-gray-400 text-start p-2">
              {project.description}
            </p>
            <div className="flex mb-4 mt-4">
              <Button
                onClick={() => handleNavigation("")}
                className="flex ml-2 text-[16px]"
              >
                Live{" "}
                <Image
                  src={IconArrowSeq}
                  alt="icon arrow"
                  className="pl-2 w-[40px]"
                />
              </Button>
              {project.linkCached ? (
                <Button
                onClick={() => handleNavigation("")}
                className="flex ml-2 text-[16px]"
              >
                Cached{" "}
                <Image
                  src={IconArrowAlt}
                  alt="icon arrow"
                  className="pl-2 w-[25px]"
                />
              </Button>
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

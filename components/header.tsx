"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import LogoDefault from "../public/icon/logo-default.svg";
import IconHambDesktop from "../public/icon/icon-hamb-desktop.svg";
import IconHambMobile from "../public/icon/icon-hamb-mobile.svg";
import IconLangClose from "../public/icon/icon-lang-close.svg";
import IconLangOpen from "../public/icon/icon-lang-open.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="font-roboto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("/")}
              className="flex text-2xl font-bold text-gray-800"
            >
              <Image className="pr-2" src={LogoDefault} alt="Logo" width={40} height={40} />
              <h1 className="text-white font-bold">Elias</h1>
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {[
              { name: "home", path: "/" },
              { name: "works", path: "/work" },
              { name: "about Me", path: "/about" },
              { name: "contacts", path: "/contact" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex px-3 py-2 rounded-md text-[#ABB2BF] hover:hover:text-[#C778DD] transition-all duration-200 animate-pulse ${
                  pathname === item.path ? "font-medium text-white" : "font-light text-[#ABB2BF]"
                }`}
              >
                <span className="text-[#C778DD]">#</span>
                <p>{item.name}</p>
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex px-3 py-2 rounded-md text-[#ABB2BF] transition-all"
              >
                <p className="mr-1 animate-puls hover:text-[#C778DD]">{selectedLang}</p>
                <Image src={isLangOpen ? IconLangClose : IconLangOpen} alt="Idiomas" width={10} height={10} />
              </button>

              {isLangOpen && (
                <div className="absolute mt-2 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-10 text-[32px] md:text-[16px]">
                  {["EN", "PT", "ES"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className="block w-[66px] p-4 text-center font-light text-[#ABB2BF] hover:text-white"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? (
                <Image src={IconHambDesktop} alt="Fechar menu" width={40} height={40} />
              ) : (
                <Image src={IconHambMobile} alt="Abrir menu" width={40} height={40} />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute bg-[#282C33] w-full h-[100vh] z-10">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: "home", path: "/" },
              { name: "works", path: "/work" },
              { name: "about Me", path: "/about" },
              { name: "contacts", path: "/contact" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex px-3 py-2 rounded-md text-[#ABB2BF] transition-all duration-200 ${
                  pathname === item.path ? "font-medium text-white" : "font-light text-[#ABB2BF]"
                }`}
              >
                <span className="text-[#C778DD] text-[32px]">#</span>
                <p className="text-[32px] md:text-[16px]">{item.name}</p>
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex px-3 py-2 rounded-md text-white hover:text-gray-300 transition-all"
              >
                <p className="text-[32px] md:text-[16px] mr-1 text-[#ABB2BF]">{selectedLang}</p>
                <Image src={isLangOpen ? IconLangClose : IconLangOpen} alt="Idiomas" width={15} height={15} />
              </button>

              {isLangOpen && (
                <div className="absolute left-2 mt-2 bg-gray-800 border border-gray-600 rounded-md shadow-lg z-10">
                  {["EN", "PT", "ES"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className="block text-[32] w-[66px] p-4 text-center font-light text-[#ABB2BF] hover:text-white"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
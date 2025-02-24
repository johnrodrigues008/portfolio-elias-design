"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import LogoDefault from "../public/icon/logo-default.svg";

import IconHambDesktop from "../public/icon/icon-hamb-desktop.svg";
import IconHambMobile from "../public/icon/icon-hamb-mobile.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex text-2xl font-bold text-gray-800">
                <Image
                  className="pr-2"
                  src={LogoDefault}
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <span className="text-white">Elias</span>
              </div>
            </Link>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex space-x-8">
          <Link href="/pagina1">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>Home</p>
              </div>
            </Link>
            <Link href="/pagina2">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>works</p>
              </div>
            </Link>
            <Link href="/pagina3">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>about-me</p>
              </div>
            </Link>
            <Link href="/pagina4">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>contacts</p>
              </div>
            </Link>
            <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
              <p>EN</p>
            </div>
          </nav>

          {/* Botão hambúrguer para mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? (
                <Image
                  src={IconHambDesktop}
                  alt="Logo"
                  width={40}
                  height={40}
                />
              ) : (
                <Image src={IconHambMobile} alt="Logo" width={40} height={40} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/pagina1">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>Home</p>
              </div>
            </Link>
            <Link href="/pagina2">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>works</p>
              </div>
            </Link>
            <Link href="/pagina3">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>about-me</p>
              </div>
            </Link>
            <Link href="/pagina4">
              <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
                <span>#</span>
                <p>contacts</p>
              </div>
            </Link>
            <div className="flex px-3 py-2 rounded-md text-base font-medium text-white">
              <p>EN</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

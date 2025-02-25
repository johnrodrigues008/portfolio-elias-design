// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elias - Portfólio de Design e Desenvolvimento Frontend",
  description:
    "Explore os projetos inovadores de Elias, onde criatividade e tecnologia se unem para transformar ideias em experiências digitais únicas e funcionais.",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
          
        </main>
      </body>
    </html>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { X } from "lucide-react";
import "../../public/styles/buttons.scss";
import Logo from "../../public/images/header-logo.svg";
import DropdownArrow from "../../public/images/dropdown-arrow.svg";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-[#E8E8E8]">
      <div className="container !max-w-full py-5 flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium">
          <Link href="/">Case studies</Link>
          <Link href="/">Services</Link>
          <Link href="/">Clients & Industries</Link>
          <Link href="/">Company</Link>
        </nav>

        {/* Right Side: Button + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="secondary-btn">
                    Let’s connect
                </Link>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col px-6 py-6">
          {/* Top Bar in Overlay */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/" className="secondary-btn">
                    Let’s connect
                </Link>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4 text-lg font-medium text-gray-800">
            {[
              "Our Work",
              "Our Service",
              "Solutions",
              "Insights",
            ].map((item) => (
              <div
                key={item}
                className="flex justify-between items-center border-b pb-3"
              >
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
                <span className="text-xl">&rsaquo;</span> {/* Unicode right arrow */}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

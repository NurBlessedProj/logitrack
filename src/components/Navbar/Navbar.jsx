"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

// Custom hook for media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }
  }, [matches, query]);

  return matches;
};

function Navbar() {
  const isMobile = useMediaQuery("(max-width:1024px)");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
        return;
      }

      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 200) setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let timeoutId;
      const handleScroll = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(controlNavbar, 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [controlNavbar]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/warehouse", label: "Warehouse" },
    { href: "/logistics", label: "Logistics" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-md border-b border-gray-100">
        {/* Top Bar */}
        <div
          className={`
            bg-gradient-to-r from-[#bd1b1b] to-[#a01515] text-white hidden lg:block
            transition-all duration-500 ease-in-out shadow-lg
            ${isScrolled ? "h-0 overflow-hidden opacity-0" : "h-12 opacity-100"}
          `}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-12 text-sm font-medium">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                    <Clock className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="group-hover:text-blue-200 transition-colors duration-300">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center space-x-2 group cursor-pointer">
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                    <MapPin className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="group-hover:text-blue-200 transition-colors duration-300">
                    Global Logistics Network
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 group hover:text-blue-200 transition-all duration-300 cursor-pointer">
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs opacity-90">Email Us</span>
                    <span className="font-semibold">
                      contact@logitrackexpress.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`
            w-full transition-all duration-500 ease-out
            ${
              isScrolled
                ? "shadow-xl bg-white/98 backdrop-blur-lg"
                : "bg-white/95 backdrop-blur-md"
            }
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className={`
                flex justify-between items-center transition-all duration-500
                ${isScrolled ? "h-16" : "h-20"}
              `}
            >
              {/* Logo */}
              <div
                className="flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-105 group"
                onClick={() => router.push("/")}
              >
                <div className="relative">
                  <Image
                    src={"/logo.png"}
                    width={500}
                    height={500}
                    alt="Logo"
                    className={`
                    h-auto object-contain transition-all duration-500 filter group-hover:brightness-110
                    ${isScrolled ? "w-[140px]" : "w-[180px]"}
                  `}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-6 py-3 text-base font-medium rounded-xl
                      transition-all duration-300 group overflow-hidden
                      ${
                        path === link.href
                          ? "text-[#bd1b1b] font-semibold bg-gradient-to-r from-red-50 to-orange-50 shadow-md"
                          : "text-gray-700 hover:text-[#bd1b1b] hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                      }
                    `}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div
                      className={`
                        absolute inset-0 bg-gradient-to-r from-[#bd1b1b]/10 to-[#bd1b1b]/5
                        transform scale-x-0 transition-transform duration-300 ease-out
                        group-hover:scale-x-100 origin-left
                        ${path === link.href ? "scale-x-100" : ""}
                      `}
                    />
                    <div
                      className={`
                        absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#bd1b1b] to-[#a01515]
                        transform scale-x-0 transition-transform duration-300 ease-out
                        group-hover:scale-x-100 origin-left
                        ${path === link.href ? "scale-x-100" : ""}
                      `}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white/98 backdrop-blur-lg
            shadow-2xl transform transition-all duration-500 ease-out
            z-[999] border-l border-gray-200
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Close menu"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="h-full flex flex-col pt-24 pb-8 px-6">
            <div className="flex-1 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center justify-between px-6 py-4 rounded-xl
                    transition-all duration-300 group
                    ${
                      path === link.href
                        ? "bg-gradient-to-r from-red-50 to-orange-50 text-[#bd1b1b] shadow-md"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-semibold">{link.label}</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 pt-8 space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 cursor-pointer group">
                <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-600">Email Us</span>
                  <span className="font-semibold text-gray-800">
                    contact@logitrackexpress.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div
        className={`h-${isScrolled ? "16" : "20"} lg:h-${
          isScrolled ? "16" : "32"
        }`}
      />
    </>
  );
}

export default Navbar;

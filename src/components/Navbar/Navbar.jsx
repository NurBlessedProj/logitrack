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
  const navigate = useRouter();
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Navigation Container */}
      <div className="fixed top-0 left-0 right-0 z-[999] bg-white">
        {/* Top Bar */}
        <div
          className={`
            bg-[#bd1b1b] text-white hidden lg:block
            transition-all duration-300 ease-in-out
            ${isScrolled ? "h-0 overflow-hidden" : "h-10"}
          `}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-10 text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-blue-300" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-300" />
                  <span>Global Logistics Network</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 hover:text-blue-300 transition-colors cursor-pointer">
                  <Mail className="h-4 w-4" />
                  <span>contact@logitrackexpress.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`
            w-full transition-all duration-300
            ${isScrolled ? "shadow-lg" : ""}
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            bg-white
          `}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`
                flex justify-between items-center transition-all
                ${isScrolled ? "h-16" : "h-20"}
              `}
            >
              {/* Logo */}
              <div
                className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => router.push("/")}
              >
                <Image
                  src={"/logo.png"}
                  width={500}
                  height={500}
                  alt="Logo"
                  className={`
                  h-auto object-contain transition-all duration-300
                  ${isScrolled ? "w-[160px]" : "w-[200px]"}
                `}
                  priority
                />
              </div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      relative px-4 py-2 text-base font-medium rounded-md
                      transition-all duration-200 group
                      ${
                        path === link.href
                          ? "text-[#bd1b1b] font-semibold bg-blue-50"
                          : "text-gray-700 hover:text-[#bd1b1b] hover:bg-gray-50"
                      }
                    `}
                  >
                    {link.label}
                    <span
                      className={`
                        absolute bottom-0 left-0 w-full h-0.5 bg-[#bd1b1b]
                        transform scale-x-0 transition-transform duration-200
                        group-hover:scale-x-100
                        ${path === link.href ? "scale-x-100" : ""}
                      `}
                    />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
            lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white
            shadow-2xl transform transition-transform duration-300 ease-out
            z-[999] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>

          <div className="h-full flex flex-col pt-20 pb-6 px-4">
            <div className="flex-1 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-lg
                    ${
                      path === link.href
                        ? "bg-blue-50 text-[#bd1b1b]"
                        : "text-gray-700"
                    }
                    hover:bg-gray-50 transition-colors duration-200
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">{link.label}</span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-[#bd1b1b] transition-colors">
                <Mail className="h-5 w-5" />
                <span className="font-medium">
                  contact@logitrackexpress.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under navbar */}
      <div
        className={`h-${isScrolled ? "16" : "20"} lg:h-${
          isScrolled ? "16" : "30"
        }`}
      />
    </>
  );
}

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

function Banner({ spanText, h2Text, pText, img, button, location, height }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: height || "calc(100vh - 90px)" }}
    >
      {/* Background Image with Gradient */}
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="Banner Image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(26, 60, 97, 0) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <span
            className="
              text-[#bd1b1b] font-medium text-lg md:text-xl mb-4
              opacity-0 translate-y-8
              animate-[slideUp_0.8s_ease-out_0.2s_forwards]
            "
          >
            {spanText}
          </span>

          <h2
            className="
              text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6
              opacity-0 translate-y-8
              animate-[slideUp_0.8s_ease-out_0.4s_forwards]
            "
          >
            {h2Text}
          </h2>

          <p
            className="
              text-gray-100 text-lg md:text-xl mb-8
              opacity-0 translate-y-8
              animate-[slideUp_0.8s_ease-out_0.6s_forwards]
            "
          >
            {pText}
          </p>

          <div
            className="
              opacity-0 translate-y-8
              animate-[slideUp_0.8s_ease-out_0.8s_forwards]
            "
          >
            <Link
              href={location || "/contact"}
              className="
                inline-flex items-center px-8 py-3 bg-white text-[#bd1b1b]
                rounded-md font-medium text-lg transition-all duration-200
                hover:bg-gray-100 hover:scale-105 group
              "
            >
              {button || "Get Started"}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

"use client";

import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const phoneNumber = ""; // Replace with your phone number
  const preFilledMessage =
    "Hello! I need assistance with tracking my shipment. Thank you!";
  const encodedMessage = encodeURIComponent(preFilledMessage);
  const smsLink = `sms:${phoneNumber}?&body=${encodedMessage}`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Banner
        location={"/contact"}
        img={"/images/banr.jpg"}
        h2Text={"LogiTrackExpress Courier:"}
        spanText={"Your trusted partner for international shipping"}
        button={"CONTACT US"}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#bd1b1b] mb-6">
                Reliable and Affordable International Shipping Services
              </h1>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  LogiTrackExpress Courier offers swift, dependable
                  international shipping at competitive rates. With a legacy of
                  over 25 years, our extensive network reaches across more than{" "}
                  <span className="font-semibold">
                    220 countries and territories
                  </span>
                  . Rest assured, your shipment is guaranteed to reach its
                  destination on time. Our commitment? Delivering nothing short
                  of the finest, comprehensive international courier service at
                  the optimal price.
                </p>

                <p className="leading-relaxed">
                  Benefit from our tailored and cost-effective turnkey
                  solutions, meticulously crafted to address even the most
                  intricate logistics needs. Whether you require{" "}
                  <span className="font-semibold">
                    Full Container Load (FCL)
                  </span>{" "}
                  or{" "}
                  <span className="font-semibold">
                    Less than Container Load (LCL)
                  </span>{" "}
                  options, our flexible approach guarantees secure, reliable,
                  and swift freight forwarding services.
                </p>

                <p className="leading-relaxed">
                  Trust us to strengthen your supply chain, facilitating
                  seamless shipments across your local area and worldwide.
                  Partner with LogiTrackExpress for unparalleled logistics
                  expertise and service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bd1b1b] mb-4">
              Elevated Import and Export All-Inclusive Solutions
            </h2>
            <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg">
              LogiTrackExpress Courier provides express international shipping
              services for individual parcels as well as grouped shipments. Our
              extensive network encompasses numerous countries offering both
              export and import express delivery solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-40 bg-[#bd1b1b] flex items-center justify-center p-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/images/lov.png"
                    alt="Express Export"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                  Express Export Service
                </h3>
                <p className="text-gray-700">
                  The LogiTrackExpress Express Export Service guarantees fast,
                  on-time delivery to over 220 countries. Our competitive rates
                  include customs clearance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-40 bg-[#bd1b1b] flex items-center justify-center p-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/images/plane.svg"
                    alt="Express Plus"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                  Express Plus* Export Service
                </h3>
                <p className="text-gray-700">
                  The LogiTrackExpress Express Plus Export Service assures swift
                  delivery to over 220 countries including customs clearance and
                  backed by our money-back satisfaction guarantee. Our Express
                  Plus service guarantees delivery on the scheduled day and
                  time.
                </p>
                <p className="text-sm italic mt-2 text-gray-600">
                  *Satisfaction guaranteed or money back.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="h-40 bg-[#bd1b1b] flex items-center justify-center p-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src="/images/gd.svg"
                    alt="Import Export"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                  Import and Export Services
                </h3>
                <h4 className="font-semibold text-[#bd1b1b] mb-2">
                  Tailor-made to your needs
                </h4>
                <p className="text-gray-700">
                  The LogiTrackExpress Express Import Export Service provides
                  secure and dependable international shipments from around the
                  world. Customs clearance fees are included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#1a3c61] to-[#2d5f95] rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                LogiTrackExpress Courier: your shipping solution for
                international parcel delivery
              </h2>

              <p className="mb-6 text-white/90 leading-relaxed">
                Rely on LogiTrackExpress Courier for express international
                shipping. Our premium customer service encompasses express
                shipping solutions within your local environment, to the U.S.
                and internationally to over 220 countries worldwide. Select from
                a diverse array of options, including document, parcel and
                pallet shipping (with both LCL and FCL options), as well as
                specialized services such as artwork shipping, all offered at
                competitive rates.
              </p>

              <div className="mb-8">
                <p className="font-medium mb-2">
                  Not what you're looking for? At LogiTrackExpress, we offer a
                  full range of services, including same-day delivery and
                  international courier services.
                </p>
                <p className="text-white/90">
                  Whatever your shipping requirements may be, LogiTrackExpress
                  has the expertise and resources to meet them with precision
                  and efficiency.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => router.push("/contact")}
                  className="bg-white text-[#bd1b1b] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  CONTACT US
                </button>
                <Link
                  href={smsLink}
                  className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  TRACK SHIPMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-[#bd1b1b]/10 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/images/tn.png"
                  alt="Global Shipping"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                Simple, reliable global shipping
              </h3>
              <p className="text-gray-700">
                Enhance your international shipping logistics and ship your
                parcels with confidence. With our network of top-tier transport
                partners, we guarantee efficient and on-time delivery.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-[#bd1b1b]/10 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/images/plane.svg"
                  alt="Flexible Delivery"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                Flexible international delivery
              </h3>
              <p className="text-gray-700">
                LogiTrackExpress Courier offers global coverage and custom
                solutions for international parcel shipments. We treat each
                package with care and precision.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white rounded-xl shadow-md p-6 transition-transform hover:translate-y-[-5px]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-[#bd1b1b]/10 rounded-full flex items-center justify-center mb-6">
                <Image
                  src="/images/truck.svg"
                  alt="Swift Shipping"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#bd1b1b] mb-4">
                Swift shipping at competitive rates
              </h3>
              <p className="text-gray-700">
                High-quality customer service paired with competitive rates for
                all your shipping logistics requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="bg-[#f5f7fa] border border-gray-200 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#bd1b1b] mb-6">
              Simplify your international shipping with LogiTrackExpress
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Contact our team for a quick estimate or to find out more about
              our services.
            </p>

            <p className="text-gray-700 mb-8">
              Count on LogiTrackExpress Worldwide Courier for express
              international delivery of parcels, envelopes or other specialized
              freight. Contact us to open an account today. Let us leverage our
              international shipping expertise to serve you.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/contact")}
                className="bg-[#bd1b1b] hover:bg-[#0f2d4f] text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                <span>CONTACT US</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <Link
                href={smsLink}
                className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                <span>TRACK SHIPMENT</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl font-bold text-[#bd1b1b] mb-2">
                  220+
                </div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl font-bold text-[#bd1b1b] mb-2">
                  25+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl font-bold text-[#bd1b1b] mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-4xl font-bold text-[#bd1b1b] mb-2">
                  100%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;

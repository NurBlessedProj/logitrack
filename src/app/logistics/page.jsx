"use client";

import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const phoneNumber = ""; // Replace with your phone number
  const preFilledMessage =
    "Hello! I need assistance with tracking my shipment. Thank you!";
  const encodedMessage = encodeURIComponent(preFilledMessage);
  const smsLink = `sms:${phoneNumber}?&body=${encodedMessage}`;

  const tabContent = [
    {
      title: "Parcel delivery",
      content:
        "We have been moving your goods since 1990 and are committed to providing you with a great service every time",
    },
    {
      title: "Parcels throughout Europe",
      content:
        "Send parcels throughout Europe with our DPD Classic service—from Spain to Denmark, Germany to Estonia, the Netherlands to Austria, and more. We also offer domestic services within each of these countries; for example, from one address in France to another.",
    },
    {
      title: "Freight",
      content:
        "We combine longstanding freight expertise with a suite of freight services tailored to your shipping needs. Our relationship with international carriers and shipping companies, following over 20 years in the freight forwarding business, allows us to negotiate the best possible rates.",
    },
    {
      title: "Fulfillment services",
      content:
        "With fulfilment services from Europa Lieferung Express, we'll store your inventory at our depot and ship out to your customers. It saves time and effort on your part, and allows your business to stay flexible and responsive as your consumer base grows.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <Banner
        location={"/contact"}
        img={"/images/pexels-attie-9296985.jpg"}
        h2Text={"Logistics solutions for an efficient,"}
        spanText={"reliable international supply chain"}
        pText={"Find out what we can do for your business!"}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold text-[#bd1b1b] mb-6">
                Experience seamless global logistics and shipping solutions with
                LogiTrackExpress
              </h1>

              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  At LogiTrackExpress, our comprehensive services cover
                  international freight forwarding via air, sea, or land,
                  ensuring reliability and efficiency for all your shipments.
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
                  seamless shipments across your local environment and
                  worldwide. Partner with LogiTrackExpress for unparalleled
                  logistics expertise and service excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-[#bd1b1b] mb-4">
              Our international shipping and logistics service
            </h2>
            <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
            <div className="max-w-4xl mx-auto space-y-4 text-gray-700">
              <p>
                Whether you require cross-border shipments, streamlined pallet
                shipping services, parcel delivery within your local
                environment, shipping full or partial loads to the U.S., or
                simplified international shipping solutions, LogiTrackExpress is
                your trusted partner.
              </p>
              <p>
                Our team of logistics professionals is dedicated to designing
                custom freight forwarding services tailored to your specific
                needs. From selecting the ideal mode of transport to ensuring
                timely delivery, we are committed to providing you with
                efficient and reliable solutions for all your shipping
                requirements.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Air Freight Card */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-[#bd1b1b] p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 mr-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/plane.svg"
                      alt="Air Freight"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Air Freight Service
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  2 options for international air freight
                </h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Door-to-door delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Door-to-airport service</span>
                  </li>
                </ul>

                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  Services included
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Custom Clearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>ATA carnet (temporary admission)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Legalization of Certificate of Origin</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ocean Freight Card */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#bd1b1b] p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 mr-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/ship.svg"
                      alt="Ocean Freight"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Ocean Freight Service
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  2 options for international ocean freight
                </h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Full Container Load (FCL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Less than Container Load (LCL)</span>
                  </li>
                </ul>

                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  Services included
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Custom Clearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Pick-up and delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Moving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Legalization of Certificate of Origin</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Land Freight Card */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-[#bd1b1b] p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex-shrink-0 mr-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/images/truck.svg"
                      alt="Land Freight"
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Land Freight Service
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  4 options for ground transportation
                </h4>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Truckload (TL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Less Than Truckload (LTL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Pallet shipping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Solution for oversized shipments</span>
                  </li>
                </ul>

                <h4 className="font-bold text-[#bd1b1b] mb-3">
                  Services included
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Custom Clearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span>Legalization of Certificate of Origin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto" data-aos="fade-up">
          <div className="bg-gradient-to-r from-[#1a3c61] to-[#2d5f95] rounded-xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Logistics brokers and advisors at your service!
              </h2>

              <p className="mb-6 text-white/90 leading-relaxed">
                Would you like more information about our logistics and shipping
                services? Contact us today to learn more. Our logistics
                consultants will be happy to discuss your specific requirements,
                share insights, and answer any questions you may have. With our
                commitment to excellence and customer satisfaction, you can
                trust LogiTrackExpress to deliver reliable and efficient
                solutions tailored to your business needs.
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

      {/* Accordion Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Image */}
            <div
              className="relative h-64 md:h-full min-h-[320px] rounded-xl overflow-hidden shadow-lg"
              data-aos="fade-right"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a3c61]/80 to-[#1a3c61]/40">
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    Global Logistics
                  </h3>
                  <p className="text-white/80">
                    Connecting businesses worldwide
                  </p>
                </div>
              </div>
              <Image
                src="/images/pexels-pixabay-262353.jpg"
                alt="Global Logistics"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Accordion */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-[#bd1b1b] mb-6">
                Our Services
              </h3>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {tabContent.map((tab, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <button
                      className="w-full text-left p-4 md:p-6 flex items-center justify-between focus:outline-none"
                      onClick={() =>
                        setActiveTab(activeTab === index ? null : index)
                      }
                    >
                      <span className="font-medium text-lg capitalize">
                        {tab.title}
                      </span>
                      <span
                        className={`text-[#bd1b1b] transition-transform ${
                          activeTab === index ? "rotate-180" : ""
                        }`}
                      >
                        {activeTab === index ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 15l7-7 7 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    {activeTab === index && (
                      <div className="p-4 md:p-6 pt-0 text-gray-700 bg-gray-50">
                        <p>{tab.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <div className="p-6 md:p-10">
              <p className="text-gray-700 mb-6">
                With supply chains becoming ever more complex and global, a
                company's ability to effectively control and maintain visibility
                of processes, data flows and the status of shipments is critical
                to remaining competitive.
              </p>

              <p className="text-gray-700 mb-8">
                To assist clients with this challenge, Europa Lieferung Express
                have developed a Lead Logistics Provider (LLP or 4PL) solution
                that delivers:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#bd1b1b] mb-4 uppercase">
                    Approach
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Global, regional and local strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>End-to-end supply chain visibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Ensures data quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Management of legislative developments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-[#bd1b1b] mb-4 uppercase">
                    Planning
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Process management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Identify consolidation opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Continuous improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#bd1b1b] mr-2">•</span>
                      <span>Transport mode migration- air to sea</span>
                    </li>
                  </ul>
                </div>
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

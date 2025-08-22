"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ShipmentContext from "@/contexts/ShipmentContext";
import ShippingSection from "../ShippingSection";
import InsightsSection from "../InsightSection";

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const ref = useRef();

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <h2 ref={ref} className="text-4xl font-bold">
      {count.toLocaleString()}
    </h2>
  );
};

const images = [
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068116/pexels-tima-miroshnichenko-6169650_ur5kuz.jpg",
    delay: 100,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068115/pexels-tima-miroshnichenko-6169591_ghowoy.jpg",
    delay: 125,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068112/pexels-rdne-7363161_trngh1.jpg",
    delay: 150,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068114/pexels-thom-gonzalez-3126166-6026765_vyefqg.jpg",
    delay: 175,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068109/pexels-pat-whelen-2913248-5615436_gfd2el.jpg",
    delay: 200,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068124/pexels-tima-miroshnichenko-6169668_xamcnj.jpg",
    delay: 225,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068098/pexels-carloscruz-artegrafia-172084181-11087837_tvjmrm.jpg",
    delay: 250,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068078/pexels-bernard-foss-3049419-4620555_k7lp32.jpg",
    delay: 275,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068153/pexels-ibnulharezmi-5410923_kdf5tj.jpg",
    delay: 300,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068097/pexels-carlo-junemann-156928830-16015233_jjrvjr.jpg",
    delay: 325,
  },
  {
    src: "https://res.cloudinary.com/dwoaukreo/image/upload/v1718068105/pexels-njeromin-8193334_bjk7hp.jpg",
    delay: 350,
  },
];

function Content() {
  const navigate = useRouter();
  const [revCount, setRevCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const [loading, setLoading] = useState(false);

  const [trackingNumber, setTrackingNumber] = useState("");
  const {
    shipments,
    setShipments,
    shipmentStatus,
    setShipmentStatus,
    shipmentPosition,
    setShipmentPosition,
  } = useContext(ShipmentContext);
  const [error, setError] = useState(null);

  const handleTrack = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError(null); // Reset error state
    setShipments(null); // Reset shipment state
    console.log(trackingNumber);
    try {
      const res = await fetch("/api/getShipment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber }),
      });

      console.log(res.status);
      if (res.status === 200) {
        setLoading(false);
        const data = await res.json();
        setShipments(data.shipmentData);
        navigate.push(`/shipment?num=${trackingNumber}`);
      } else if (res.status === 400) {
        setLoading(false);
        setError("invalid Input");
      } else {
        setLoading(false);
        const errorData = await res.json();
        throw new Error(errorData.message || "Shipment not found");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error caught:", error);
      setError(error.message);
    }
  };

  const handleNext = () => {
    setRevCount((prev) => prev + 1);
    if (revCount === 7) {
      setRevCount(1);
    }
  };

  const handlePrev = () => {
    setRevCount((prev) => prev - 1);
    if (revCount <= 1) {
      setRevCount(7);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [revCount]);

  const phoneNumber = ""; // Replace with your phone number
  const preFilledMessage =
    "Hello! I need assistance with tracking my shipment. Thank you!";

  // URL encode the message
  const encodedMessage = encodeURIComponent(preFilledMessage);

  // Create the SMS link
  const smsLink = `sms:${phoneNumber}?&body=${encodedMessage}`;

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
        {loading && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-100"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-200"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-300"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-400"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-500"></div>
              <div className="w-4 h-4 bg-[#bd1b1b] rounded-sm animate-pulse delay-600"></div>
            </div>
          </div>
        )}
        <div className="relative w-full mb-16">
          <div className="bg-white border border-gray-200 p-8">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-left text-[#bd1b1b]">
                Track Your Shipment
              </h1>
            </div>

            <div className="relative w-full">
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter your tracking number"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-[#bd1b1b] transition-all text-gray-700"
                  />
                </div>
                <button
                  onClick={handleTrack}
                  className="md:w-auto px-8 py-3 bg-[#bd1b1b] text-white flex items-center justify-center gap-2 hover:bg-[#2a4d72] transition-all font-medium"
                >
                  <span>Track Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
              </div>

              <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500 gap-2">
                <p>Example: 1234</p>
                <p className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Enter your tracking ID to get real-time updates
                </p>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#bd1b1b]"></div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
          ref={ref}
        >
          <div className="w-full lg:w-1/2 animate-fade-in" data-aos="fade-up">
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                src={
                  "https://images.pexels.com/photos/3735930/pexels-photo-3735930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                className="w-full h-auto border border-gray-200 shadow-md"
                alt="Global logistics network"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#bd1b1b]"></div>
              <div className="absolute -bottom-4 -right-4 bg-[#bd1b1b] text-white py-2 px-4 text-sm font-medium">
                Global Reach, Local Expertise
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-fade-in" data-aos="fade-up">
            <div className="border-l-4 border-[#bd1b1b] pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-red-600">
                Delivering Excellence Worldwide
              </h1>
              <p className="text-[#bd1b1b] font-medium">
                Domestic & International Courier Services
              </p>
            </div>

            <p className="text-gray-600 mb-4 text-lg">
              LogiTrackExpress Courier is a leader in local and international
              parcel delivery and express mail. We provide fast, reliable
              shipping across your local area and around the world.
            </p>

            <p className="text-gray-600 mb-8 text-lg">
              Our success is built on impeccable customer service, cutting-edge
              tracking technology, and a dedicated team of logistics experts. We
              guarantee satisfaction and confidence with every shipment, no
              matter the destination.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 border-t border-b border-gray-200">
              <div className="border-l-4 border-[#bd1b1b] pl-4 transition-all hover:pl-5 hover:bg-white">
                <div className="flex items-end text-[#bd1b1b]">
                  {isVisible && (
                    <Counter
                      start={0}
                      end={12}
                      duration={3000}
                      className="text-4xl font-bold"
                    />
                  )}
                  <h1 className="text-4xl font-bold">M+</h1>
                </div>
                <p className="text-gray-600 mt-2 font-medium">
                  Orders Processed Since 1995
                </p>
              </div>
              <div className="border-l-4 border-[#bd1b1b] pl-4 transition-all hover:pl-5 hover:bg-white">
                <div className="flex items-end text-[#bd1b1b]">
                  {isVisible && (
                    <Counter
                      start={0}
                      end={250000}
                      duration={3000}
                      className="text-4xl font-bold"
                    />
                  )}
                </div>
                <p className="text-gray-600 mt-2 font-medium">
                  Active Customers
                </p>
              </div>
              <div className="border-l-4 border-[#bd1b1b] pl-4 transition-all hover:pl-5 hover:bg-white">
                <div className="flex items-end text-[#bd1b1b]">
                  <h1 className="text-4xl font-bold">+</h1>
                  {isVisible && (
                    <Counter
                      start={0}
                      end={98}
                      duration={3000}
                      className="text-4xl font-bold"
                    />
                  )}
                  <h1 className="text-4xl font-bold">%</h1>
                </div>
                <p className="text-gray-600 mt-2 font-medium">
                  On-Time Delivery Rate
                </p>
              </div>
              <div className="border-l-4 border-[#bd1b1b] pl-4 transition-all hover:pl-5 hover:bg-white">
                <div className="flex items-end text-[#bd1b1b]">
                  {isVisible && (
                    <Counter
                      start={0}
                      end={350}
                      duration={3000}
                      className="text-4xl font-bold"
                    />
                  )}
                  <h1 className="text-4xl font-bold">+</h1>
                </div>
                <p className="text-gray-600 mt-2 font-medium">
                  Global Delivery Professionals
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#bd1b1b] text-white font-medium flex items-center gap-2 hover:bg-[#2a4d72] transition-all">
                <span>Our Services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <button className="px-6 py-3 border border-[#bd1b1b] text-[#bd1b1b] font-medium hover:bg-gray-50 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* Pet Shipping Section */}
      </section>
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-[#bd1b1b]/10 text-[#bd1b1b] font-medium rounded-sm mb-4">
              Specialized Service
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#bd1b1b]">
              Safe Pet Transportation
            </h1>
            <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We understand that your pets are family. Our specialized pet
              shipping service ensures your furry, feathered, or scaled
              companions travel safely and comfortably to their destination.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="border-l-4 border-[#bd1b1b] pl-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#bd1b1b]">
                  Expert Pet Handling & Care
                </h2>
                <p className="text-gray-700 font-medium">
                  IATA-Compliant Pet Transportation Services
                </p>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                At LogiTrackExpress, we employ certified pet handlers who
                understand the unique needs of animals during transit. Our
                climate-controlled vehicles and specialized equipment ensure
                your pet's journey is stress-free and comfortable.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-5 rounded-lg shadow-md border-t-2 border-[#bd1b1b]">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-[#bd1b1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Temperature-Controlled
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Climate-monitored transport for your pet's comfort in any
                    weather
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-t-2 border-[#bd1b1b]">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-[#bd1b1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Certified Handlers
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Trained professionals with animal care expertise
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-t-2 border-[#bd1b1b]">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-[#bd1b1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Paperwork Assistance
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Help with health certificates and import requirements
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md border-t-2 border-[#bd1b1b]">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-[#bd1b1b]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Real-time Updates
                    </h3>
                  </div>
                  <p className="text-gray-600 ml-11">
                    Track your pet's journey with our specialized monitoring
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 border-l-4 border-[#bd1b1b] shadow-md mb-8">
                <p className="text-gray-700 italic">
                  "Our pet shipping service has successfully transported over
                  50,000 animals worldwide with a 99.8% satisfaction rate. From
                  domestic cats to exotic birds, we handle each animal with
                  expert care."
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                {/* Main image - guy handling pet crate */}
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://images.pexels.com/photos/6816858/pexels-photo-6816858.jpeg"
                    className="w-full h-auto"
                    alt="Professional handling a pet crate for shipping"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <span className="text-white font-bold text-xl">
                      Professional Pet Handling
                    </span>
                  </div>
                </div>

                {/* Decorative elements and smaller images */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    width={400}
                    height={400}
                    src="https://img.freepik.com/close-up-shopping-cart_1048944-11720808.jpg?w=1480"
                    className="w-full h-full object-cover"
                    alt="Happy pet after transportation"
                  />
                </div>
                <div className="absolute -top-10 -left-10 w-36 h-36 rounded-lg overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    width={400}
                    height={400}
                    src="https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17020.jpg?t=st=1755896944~exp=1755900544~hmac=14edd04949befd69069ab50efdeeab6772558c4aa0d5b65144c9deb9c4813cfc&w=1480"
                    className="w-full h-full object-cover"
                    alt="Pet in travel carrier"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#bd1b1b]/5 rounded-full"></div>
                <div className="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-[#bd1b1b]/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-[#bd1b1b]/10 text-[#bd1b1b] font-medium rounded-sm mb-4">
              Our Process
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#bd1b1b]">
              Your Journey to Effortless Shipping
            </h1>
            <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              At LogiTrackExpress Courier, we've streamlined the shipping
              process to make your experience seamless and worry-free. From
              booking to delivery, we handle every step with precision and care.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#bd1b1b]/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div
                className="bg-white p-8 rounded-sm border border-gray-200 shadow-lg relative z-10 transform transition-all hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-sm bg-[#bd1b1b] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  1
                </div>

                <div className="flex flex-col items-center mb-6 relative">
                  <div className="absolute -left-4 -top-4 w-20 h-20 rounded-sm bg-[#bd1b1b]/5 z-0"></div>
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-sm bg-[#bd1b1b]/10 z-0"></div>
                  <Image
                    width={250}
                    height={200}
                    src="https://images.pexels.com/photos/7363128/pexels-photo-7363128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Order processing system"
                    className="h-48 w-auto relative z-10"
                  />
                </div>

                <h1 className="text-2xl font-bold mb-4 text-[#bd1b1b] text-center">
                  Book & Schedule
                </h1>

                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Book online or call our customer service</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Receive instant price quotes based on package details
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Select your preferred pickup time and delivery options
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#bd1b1b]">
                  <p className="text-sm text-gray-600 italic">
                    "Our AI-powered dispatch system assigns the most efficient
                    route and courier for your package."
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                className="bg-white p-8 rounded-sm border border-gray-200 shadow-lg relative z-10 transform transition-all hover:-translate-y-2 hover:shadow-xl md:mt-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-sm bg-[#bd1b1b] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  2
                </div>

                <div className="flex flex-col items-center mb-6 relative">
                  <div className="absolute -right-4 -top-4 w-20 h-20 rounded-sm bg-[#bd1b1b]/5 z-0"></div>
                  <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-sm bg-[#bd1b1b]/10 z-0"></div>
                  <Image
                    width={250}
                    height={200}
                    src="https://images.pexels.com/photos/3690392/pexels-photo-3690392.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Courier pickup service"
                    className="h-48 w-auto relative z-10"
                  />
                </div>

                <h1 className="text-2xl font-bold mb-4 text-[#bd1b1b] text-center">
                  Collection & Tracking
                </h1>

                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Professional courier arrives at your location</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Package is scanned and securely prepared for transit
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Real-time tracking updates via our customer portal
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#bd1b1b]">
                  <p className="text-sm text-gray-600 italic">
                    "GPS tracking allows you to monitor your package's journey
                    in real-time through our mobile app."
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="bg-white p-8 rounded-sm border border-gray-200 shadow-lg relative z-10 transform transition-all hover:-translate-y-2 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-sm bg-[#bd1b1b] text-white flex items-center justify-center font-bold text-xl shadow-md">
                  3
                </div>

                <div className="flex flex-col items-center mb-6 relative">
                  <div className="absolute -left-4 -top-4 w-20 h-20 rounded-sm bg-[#bd1b1b]/5 z-0"></div>
                  <div className="absolute -right-4 -bottom-4 w-16 h-16 rounded-sm bg-[#bd1b1b]/10 z-0"></div>
                  <Image
                    width={250}
                    height={200}
                    src="https://images.pexels.com/photos/8931728/pexels-photo-8931728.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Delivery confirmation"
                    className="h-48 w-auto relative z-10"
                  />
                </div>

                <h1 className="text-2xl font-bold mb-4 text-[#bd1b1b] text-center">
                  Delivery & Confirmation
                </h1>

                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Package delivered within the promised timeframe</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Digital proof of delivery with signature capture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Delivery confirmation email with delivery details
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#bd1b1b]">
                  <p className="text-sm text-gray-600 italic">
                    "Our delivery confirmation includes time, recipient details,
                    and a photo when requested."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-[#bd1b1b] text-white font-medium rounded-sm shadow-md hover:bg-[#2a4d72] transition-all inline-flex items-center gap-2">
              <span>Start Shipping Today</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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

            <p className="mt-4 text-gray-600">
              Need assistance?{" "}
              <a
                href="#"
                className="text-[#bd1b1b] font-medium hover:underline"
              >
                Contact our customer support
              </a>
            </p>
          </div>
        </div>
      </section>
      <ShippingSection />
      <InsightsSection />
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#bd1b1b]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#bd1b1b]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-yellow-400/20 rounded-full"></div>

        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center relative z-10">
          {/* Testimonials Carousel */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            <div className="absolute -top-10 -left-10 text-[#bd1b1b]/10 text-9xl font-serif">
              "
            </div>
            <div className="absolute -bottom-10 -right-10 text-[#bd1b1b]/10 text-9xl font-serif rotate-180">
              "
            </div>

            {/* Testimonial Cards */}
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className={`${
                  revCount === index + 1
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95 absolute inset-0"
                } transition-all duration-700 bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#bd1b1b]`}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#bd1b1b] rounded-full animate-pulse opacity-20"></div>
                    <Image
                      alt={`Testimonial ${index + 1}`}
                      src={
                        index === 0
                          ? "/images/Bruce-and-Jet.webp"
                          : index === 1
                          ? "/images/Faces-400x400px-1_1_07-thegem-person.webp"
                          : index === 2
                          ? "/images/Faces-400x400px-1_1_18-thegem-person.webp"
                          : index === 3
                          ? "/images/Faces-400x400px-1_1_28-thegem-person.webp"
                          : index === 4
                          ? "/images/gettyimages-1219356771-640x640.jpg"
                          : "/blank-profile-picture-973460_640.png"
                      }
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#bd1b1b] relative z-10"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-[#bd1b1b] p-2 rounded-full z-20 shadow-md">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-[#bd1b1b]">
                      {index === 0
                        ? "Michael & Sarah T."
                        : index === 1
                        ? "Rebecca W."
                        : index === 2
                        ? "David & Emma L."
                        : index === 3
                        ? "James K."
                        : index === 4
                        ? "Thomas H."
                        : index === 5
                        ? "Sophia R."
                        : "Alexandra M."}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        Verified Customer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6 relative">
                  <div className="absolute -top-3 left-5 w-6 h-6 bg-gray-50 rotate-45 z-0"></div>
                  <p className="text-gray-600 relative z-10 italic">
                    {index === 0
                      ? "I am posting this testimonial to appreciate the work that LogiTrackExpress did for me and my wife. Our new pet was safely transported to us at a very affordable price. The care and attention they showed was exceptional."
                      : index === 1
                      ? "Thank you LogiTrackExpress for helping us ship our discreet parcel and keeping it safe during transit to the UK. This is the second time we've used your services, and we're consistently impressed with your professionalism."
                      : index === 2
                      ? "Bruce and Jet have landed safely in our arms in San Francisco! I cannot thank the entire LogiTrackExpress team enough for helping us with this process from EU to America. Your flexibility when we had to reschedule due to my husband's emergency surgery was remarkable."
                      : index === 3
                      ? "I had to share my experience with LogiTrackExpress after the exceptional service I received. Their team was professional, responsive, and the pricing was the best part - truly affordable without compromising on quality."
                      : index === 4
                      ? "LogiTrackExpress transported my car from the USA to Australia after my job transfer. The service saved me thousands compared to buying a new vehicle, and the car arrived in perfect condition."
                      : index === 5
                      ? "I've been using LogiTrackExpress for all my international shipping needs, and I couldn't be more satisfied. Their service is top-notch, with prompt deliveries and excellent customer support. The tracking system keeps me informed every step of the way."
                      : "LogiTrackExpress made my shipping experience seamless and hassle-free. Their professional team handled my items with care, and the shipment arrived ahead of schedule. The communication throughout was fantastic, making it easy to track my package."}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      {index === 0
                        ? "March 2, 2025"
                        : index === 1
                        ? "February 18, 2025"
                        : index === 2
                        ? "January 30, 2025"
                        : index === 3
                        ? "January 15, 2025"
                        : index === 4
                        ? "December 28, 2024"
                        : index === 5
                        ? "December 12, 2024"
                        : "November 30, 2024"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-[#bd1b1b] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      {index === 0
                        ? "Chicago, USA"
                        : index === 1
                        ? "London, UK"
                        : index === 2
                        ? "San Francisco, USA"
                        : index === 3
                        ? "Toronto, Canada"
                        : index === 4
                        ? "Sydney, Australia"
                        : index === 5
                        ? "Berlin, Germany"
                        : "Paris, France"}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-[#bd1b1b] mr-2">
                      Service Used:
                    </span>
                    <span className="bg-[#bd1b1b]/10 text-[#bd1b1b] text-xs font-medium px-2 py-1 rounded">
                      {index === 0
                        ? "Pet Transport"
                        : index === 1
                        ? "Secure Shipping"
                        : index === 2
                        ? "Pet Relocation"
                        : index === 3
                        ? "Express Delivery"
                        : index === 4
                        ? "Vehicle Transport"
                        : index === 5
                        ? "International Shipping"
                        : "Premium Logistics"}
                    </span>
                  </div>
                  <div className="text-yellow-400 text-2xl font-serif">,,</div>
                </div>
              </div>
            ))}

            {/* Navigation Controls */}
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrev}
                className="group p-3 bg-[#bd1b1b] text-white rounded-lg hover:bg-[#2a4d72] transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm font-medium">Previous</span>
              </button>

              <div className="flex items-center">
                {Array.from({ length: 7 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setRevCount(index + 1)}
                    className={`w-2 h-2 mx-1 rounded-full transition-all ${
                      revCount === index + 1
                        ? "bg-[#bd1b1b] w-4"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="group p-3 bg-[#bd1b1b] text-white rounded-lg hover:bg-[#2a4d72] transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center"
              >
                <span className="text-sm font-medium">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#bd1b1b]/10 rounded-full z-0"></div>

              <div className="relative z-10">
                <div className="bg-[#bd1b1b] text-white p-6 rounded-t-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Customer Success Stories
                  </h2>
                  <p className="text-gray-200">
                    See why thousands of customers trust LogiTrackExpress with
                    their shipping needs
                  </p>
                </div>

                <div className="relative">
                  <Image
                    src={"/images/pexels-tima-miroshnichenko-6169137.jpg"}
                    width={1000}
                    height={1000}
                    alt="Logistics image"
                    className="w-full h-auto shadow-xl"
                  />

                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="grid grid-cols-3 gap-4 text-white">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400">
                          98%
                        </div>
                        <div className="text-sm">Satisfaction Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400">
                          220+
                        </div>
                        <div className="text-sm">Countries Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400">
                          15k+
                        </div>
                        <div className="text-sm">Happy Customers</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-b-lg shadow-xl border-t-4 border-yellow-400">
                  <h3 className="font-bold text-xl mb-4 text-[#bd1b1b]">
                    Why Our Customers Love Us
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                        <svg
                          className="h-5 w-5 text-[#bd1b1b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#bd1b1b]">
                          On-Time Delivery
                        </h4>
                        <p className="text-sm text-gray-600">
                          99.7% on-time delivery rate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                        <svg
                          className="h-5 w-5 text-[#bd1b1b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#bd1b1b]">
                          Secure Handling
                        </h4>
                        <p className="text-sm text-gray-600">
                          Advanced tracking & security
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                        <svg
                          className="h-5 w-5 text-[#bd1b1b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#bd1b1b]">
                          Expert Support
                        </h4>
                        <p className="text-sm text-gray-600">
                          24/7 customer assistance
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#bd1b1b]/10 p-2 rounded-full mr-3">
                        <svg
                          className="h-5 w-5 text-[#bd1b1b]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#bd1b1b]">
                          Competitive Pricing
                        </h4>
                        <p className="text-sm text-gray-600">
                          Best value for your money
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-[#bd1b1b] text-white py-3 rounded-lg font-bold hover:bg-[#2a4d72] transition-colors flex items-center justify-center">
                    <span>READ MORE SUCCESS STORIES</span>
                    <svg
                      className="h-5 w-5 ml-2"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;

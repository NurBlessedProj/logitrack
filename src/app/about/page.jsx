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
  const navigate = useRouter();

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
    <>
      <Navbar />
      <Banner
        img={"/images/pexels-bernard-foss-3049419-4620555.jpg"}
        h2Text={"Reliable parcel pick-up and delivery services,"}
        location={""}
        spanText={" anywhere in the world"}
      />

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-up"
          >
            <div className="p-8 md:p-12 bg-gradient-to-r from-[#1a3c61] to-[#2a4d72] text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Courier Company for Deliveries Locally and Abroad
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <div className="md:max-w-3xl">
                <p className="text-lg mb-6 leading-relaxed">
                  At LogiTrackExpress Courier, each package is handled with
                  meticulous care, guaranteeing complete satisfaction both
                  locally and globally. Our commitment goes beyond mere
                  shipping; we craft seamless delivery experiences customized to
                  your specific needs.
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  Our secret? A team of passionate and dedicated experts,
                  working diligently to make sure your shipments reach their
                  destination safely and on time. We're here to keep our
                  promises, and help you do the same.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate.push("/contact")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-[#bd1b1b] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    CONTACT US TODAY
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
                    className="border-2 border-white hover:bg-white hover:text-[#bd1b1b] text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center"
                  >
                    TRACK SHIPMENT
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#bd1b1b]/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400/20 rounded-full z-0"></div>
              <div className="relative z-10">
                <Image
                  width={600}
                  height={600}
                  src="/images/bxman.png"
                  alt="LogiTrackExpress Courier Team"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute bottom-0 right-0 bg-yellow-500 text-[#bd1b1b] font-bold py-3 px-6 rounded-tl-xl rounded-br-xl shadow-lg">
                  Since 1995
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#bd1b1b]">
                LogiTrackExpress Courier: a success story since 1995
              </h2>
              <div className="w-20 h-1 bg-[#bd1b1b] mb-8"></div>

              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Founded in the dynamic city of Montreal in 1995,
                  LogiTrackExpress Courier rose rapidly through the ranks to
                  become a benchmark in the world of express delivery.
                </p>
                <p className="leading-relaxed">
                  With more than 25 years of experience, we deliver to more than
                  220 destinations worldwide. Our name rhymes with reliability
                  and efficiency while our values include honouring our
                  commitments and respecting the well-being of our team.
                </p>
                <p className="leading-relaxed">
                  At LogiTrackExpress, we adapt to your shipping needs and
                  provide premium courier services to a variety of industries
                  including manufacturing, textiles, automotive, furniture,
                  engineering and architecture.
                </p>
                <p className="leading-relaxed">
                  Our pride and joy? We are the official carriers for
                  prestigious institutions such as Quebec universities, the
                  Quebec government, the Quebec Health Network and much more.
                  We're also recognized for our expertise in transporting works
                  of art, and will guarantee the safety of your most precious
                  possessions.
                </p>
              </div>

              <div className="mt-8 flex">
                <div className="bg-[#bd1b1b]/10 p-4 rounded-lg flex items-center">
                  <div className="bg-[#bd1b1b] text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
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
                  <div>
                    <h3 className="font-bold text-[#bd1b1b]">
                      Trusted Worldwide
                    </h3>
                    <p className="text-sm text-gray-600">
                      220+ global destinations
                    </p>
                  </div>
                </div>
                <div className="bg-[#bd1b1b]/10 p-4 rounded-lg flex items-center ml-4">
                  <div className="bg-[#bd1b1b] text-white p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6"
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
                    <h3 className="font-bold text-[#bd1b1b]">
                      On-Time Delivery
                    </h3>
                    <p className="text-sm text-gray-600">95%+ success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#bd1b1b] text-white">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reliable services, satisfied customers
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">7M+</h3>
              <p className="text-sm">orders and still as passionate as ever.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">+95%</h3>
              <p className="text-sm">on-time delivery – Your time matters.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">200+</h3>
              <p className="text-sm">
                dynamic delivery drivers in action in Montreal and Quebec City.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">194K+</h3>
              <p className="text-sm">satisfied partners – Join the family!</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">4.8/5</h3>
              <p className="text-sm">
                on Google – Your trust in our services makes us proud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#bd1b1b]">
              LogiTrackExpress Courier: overcoming challenges with adaptable
              solutions
            </h2>
            <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Your challenge is our mission! At LogiTrackExpress, we understand
              that every delivery is unique. We adapt to your specific shipping
              needs with custom courier solutions. Our team of experts is ready
              to meet the transport and delivery requirements of both standard
              and non-standard packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-[#bd1b1b]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Image
                  width={50}
                  height={50}
                  src="/images/st1.png"
                  alt="Custom Solutions"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#bd1b1b]">
                Custom Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                We tailor our services to meet your unique shipping
                requirements, ensuring your packages are delivered exactly how
                you need them.
              </p>
              <div className="flex items-center text-[#bd1b1b] font-medium">
                <span>Learn more</span>
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
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-[#bd1b1b]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Image
                  width={50}
                  height={50}
                  src="/images/st2.png"
                  alt="Global Network"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#bd1b1b]">
                Global Network
              </h3>
              <p className="text-gray-600 mb-6">
                Our extensive international network allows us to deliver your
                packages efficiently to over 220 destinations worldwide.
              </p>
              <div className="flex items-center text-[#bd1b1b] font-medium">
                <span>Learn more</span>
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
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-[#bd1b1b]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <Image
                  width={50}
                  height={50}
                  src="/images/st3.png"
                  alt="Expert Support"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#bd1b1b]">
                Expert Support
              </h3>
              <p className="text-gray-600 mb-6">
                Our dedicated team of logistics experts is available to assist
                you with any shipping challenges you may encounter.
              </p>
              <div className="flex items-center text-[#bd1b1b] font-medium">
                <span>Learn more</span>
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
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-[#1a3c61] to-[#2a4d72] rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-up"
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 text-white mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  LogiTrackExpress is more than a courier company – we're your
                  strategic partner for logistics and freight forwarding.
                </h3>
                <p className="mb-8">
                  Contact us today and discover the LogiTrackExpress difference.
                  Our team is ready to provide you with the best shipping
                  solutions tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate.push("/contact")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-[#bd1b1b] font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    CONTACT US TODAY
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
                    className="border-2 border-white hover:bg-white hover:text-[#bd1b1b] text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center justify-center"
                  >
                    TRACK SHIPMENT
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full animate-pulse"></div>
                <Image
                  width={300}
                  height={300}
                  src="/images/pexels-tima-miroshnichenko-6169137.jpg"
                  alt="Logistics Services"
                  className="rounded-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Page;

"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";

function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, phoneNumber, email, address, message } =
        formData;
      const mailtoLink = `mailto:contact@logitrackexpress.com?subject=Contact%20Form%20Submission&body=Name:%20${firstName}%20${lastName}%0APhone%20Number:%20${phoneNumber}%0AEmail:%20${email}%0AAddress/State:%20${address}%0AMessage/Comment:%20${message}`;
      window.location.href = mailtoLink;

      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your message! We'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <Banner
        img={"/images/pexels-pixabay-269790.jpg"}
        content={"CONTACT US"}
        height={"40vh"}
        location={""}
        spanText={"Ready to ship? We'd love to hear from you!"}
      />

      <div className="flex-grow py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#bd1b1b] mb-3 sm:mb-4">
              Get in Touch
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-[#bd1b1b] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Have questions about our services or need a shipping quote? Our
              team is ready to assist you with all your logistics needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-[#bd1b1b] text-white rounded-xl shadow-xl overflow-hidden h-full">
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300 text-xs sm:text-sm">
                          Email
                        </p>
                        <p className="font-medium text-sm sm:text-base break-all">
                          contact@logitrackexpress.com{" "}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
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
                        <p className="text-gray-300 text-xs sm:text-sm">
                          Working Hours
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          Mon - Fri: 8:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#bd1b1b]">
                  Send Us a Message
                </h2>

                {formStatus.submitted && !formStatus.error ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
                    <div className="flex">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5"
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
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                ) : formStatus.error ? (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
                    <div className="flex">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors"
                        onChange={handleChange}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors"
                        onChange={handleChange}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors"
                      onChange={handleChange}
                      placeholder="+1 (234) 567 890"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors"
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="address"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Address/State
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors"
                      onChange={handleChange}
                      placeholder="123 Main St, City, State"
                    />
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                    >
                      Message/Comment <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3c61] focus:border-[#bd1b1b] outline-none transition-colors resize-none"
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="flex items-start mb-4 sm:mb-6">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      className="w-4 h-4 mt-0.5 text-[#bd1b1b] border-gray-300 rounded focus:ring-[#1a3c61]"
                    />
                    <label
                      htmlFor="privacy"
                      className="ml-2 text-xs sm:text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-[#bd1b1b] hover:underline">
                        privacy policy
                      </a>{" "}
                      and consent to being contacted regarding my inquiry.
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#bd1b1b] hover:bg-[#0f2d4f] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#bd1b1b] mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#bd1b1b] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-sm sm:text-base">
              Find answers to common questions about our shipping and logistics
              services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-base sm:text-lg text-[#bd1b1b] mb-2">
                What areas do you service?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We deliver to over 220 destinations worldwide, including all
                major cities and remote locations.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-base sm:text-lg text-[#bd1b1b] mb-2">
                How can I track my shipment?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                You can track your shipment using the tracking number provided
                at the time of booking through our website or mobile app.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-base sm:text-lg text-[#bd1b1b] mb-2">
                What are your delivery times?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Delivery times vary depending on the destination and service
                selected. Express deliveries typically take 1-3 business days,
                while standard deliveries take 3-7 business days.
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-base sm:text-lg text-[#bd1b1b] mb-2">
                Do you offer insurance for shipments?
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Yes, we offer comprehensive insurance options for all shipments
                to ensure your items are protected throughout the delivery
                process.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Still have questions? Our team is here to help.
            </p>
            <a
              href="mailto:contact@logitrackexpress.com"
              className="inline-flex items-center text-[#bd1b1b] font-medium hover:underline text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email our support team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default Page;

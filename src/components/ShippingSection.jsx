import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Calculator } from "lucide-react";

const ShippingSection = ({ navigate }) => (
  <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1 bg-[#bd1b1b]/10 text-[#bd1b1b] font-medium rounded-sm mb-4">
        Our Services
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#bd1b1b]">
        Comprehensive Transportation Solutions
      </h1>
      <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
      <p className="text-gray-600 text-lg">
        We provide integrated logistics solutions across rail, ocean, road, and
        air transportation to meet your specific requirements with efficiency
        and reliability.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Rail Freight */}
      <div
        className="md:col-span-6 relative group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay={100}
      >
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/1793503/pexels-photo-1793503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Rail Freight Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Rail Freight</h2>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Safe and environmentally friendly rail transportation within Europe
            and between Europe and Asia for Groupage or Full Container
            shipments.
          </p>
          <div className="flex items-center text-sm group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Ocean Freight */}
      <div
        className="md:col-span-6 relative group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay={200}
      >
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/31007139/pexels-photo-31007139/free-photo-of-large-cargo-ship-sailing-on-elbe-river-in-hamburg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Ocean Freight Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Ocean Freight</h2>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Wide range of equipment and groupage services ensuring
            cost-effective and timely cargo delivery across global maritime
            routes.
          </p>
          <div className="flex items-center text-sm group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Road Freight */}
      <div
        className="md:col-span-6 relative group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay={300}
      >
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/7263948/pexels-photo-7263948.jpeg"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Road Freight Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Road Freight</h2>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scheduled departures on major commercial routes allowing precise
            shipment planning and maximum efficiency.
          </p>
          <div className="flex items-center text-sm group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Air Freight */}
      <div
        className="md:col-span-6 relative group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all hover:-translate-y-2"
        data-aos="zoom-in"
        data-aos-delay={400}
      >
        <div className="relative h-96 w-full overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/30279537/pexels-photo-30279537/free-photo-of-cargo-plane-in-flight-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Air Freight Services"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Air Freight</h2>
          <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Global air freight services with scheduled departures on major
            routes, offering precise planning and efficient delivery.
          </p>
          <div className="flex items-center text-sm group-hover:opacity-100 transition-opacity duration-300">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShippingSection;

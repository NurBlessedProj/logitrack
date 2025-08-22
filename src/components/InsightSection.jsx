import React from "react";
import {
  Calendar,
  ArrowRight,
  Globe,
  Boxes,
  Truck,
  FileText,
  Building2,
} from "lucide-react";
import Image from "next/image";

const InsightsSection = ({ navigate }) => (
  <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1 bg-[#bd1b1b]/10 text-[#bd1b1b] font-medium rounded-full mb-4">
        Insight And Trends
      </span>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#bd1b1b]">
        Recent Articles
      </h1>
      <div className="w-20 h-1 bg-[#bd1b1b] mx-auto mb-6"></div>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Follow our latest news and thoughts which focuses exclusively on
        insight, industry trends, top news headlines.
      </p>
    </div>

    <div className="flex flex-col gap-20">
      {/* First Article - Importers Cost Savings */}
      <div
        className="flex flex-col md:flex-row gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#bd1b1b]/10 z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#bd1b1b]/5 z-0"></div>
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/6169661/pexels-photo-6169661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-auto rounded-xl shadow-xl relative z-10 object-cover aspect-4/3"
            alt="Cargo cost savings"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#bd1b1b] text-white p-4 rounded-sm shadow-lg z-20">
            <span className="font-bold">Cost Savings</span>
            <div className="flex items-center mt-1">
              <span className="text-sm">First Sale Rule</span>
              <Globe className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="bg-[#bd1b1b]/10 p-2 rounded-sm mr-4">
              <Globe className="h-8 w-8 text-[#bd1b1b]" />
            </div>
            <h3 className="text-3xl font-bold text-[#bd1b1b]">
              Importers achieve cost savings through the First Sale rule!
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-6 border-l-4 border-[#bd1b1b] pl-4">
            The trade war currently ensuing between the nations around the
            globe, fiercely with China, shows no signs of the first set of
            tariffs levied against solar...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Jan 20, 2021</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Cargo</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Insights</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm shadow border-l-4 border-[#bd1b1b] mb-6">
            <p className="text-gray-600 italic">
              "Understanding the First Sale rule can lead to significant duty
              savings for importers in today's challenging trade environment."
            </p>
          </div>

          <button className="inline-flex items-center text-[#bd1b1b] font-bold hover:underline transition-all">
            <span>Read Full Article</span>
            <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Second Article - Supply Chain Visibility */}
      <div
        className="flex flex-col md:flex-row-reverse gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#bd1b1b]/10 z-0"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#bd1b1b]/5 z-0"></div>
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/10620467/pexels-photo-10620467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full h-auto rounded-xl shadow-xl relative z-10 object-cover aspect-4/3"
            alt="Supply chain visibility"
          />
          <div className="absolute -bottom-4 -left-4 bg-[#bd1b1b] text-white p-4 rounded-sm shadow-lg z-20">
            <span className="font-bold">Supply Chain</span>
            <div className="flex items-center mt-1">
              <span className="text-sm">Visibility & Control</span>
              <Boxes className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="bg-[#bd1b1b]/10 p-2 rounded-sm mr-4">
              <Building2 className="h-8 w-8 text-[#bd1b1b]" />
            </div>
            <h3 className="text-3xl font-bold text-[#bd1b1b]">
              Cargo flow through better supply chain visibility, control.
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-6 border-l-4 border-[#bd1b1b] pl-4">
            Global provider connected products for consumers, and enterprises
            worldwide, supply chain control is everything, provide visibility
            and traceability needed for...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Jan 23, 2021</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Warehouse</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Construction</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm shadow border-l-4 border-[#bd1b1b] mb-6">
            <p className="text-gray-600 italic">
              "Enhanced visibility in the supply chain leads to better control,
              improved efficiency, and reduced operational costs."
            </p>
          </div>

          <button className="inline-flex items-center text-[#bd1b1b] font-bold hover:underline transition-all">
            <span>Read Full Article</span>
            <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>

      {/* Third Article - Oil & Gas Logistics */}
      <div
        className="flex flex-col md:flex-row gap-12 items-center"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#bd1b1b]/10 z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#bd1b1b]/5 z-0"></div>
          <Image
            width={1000}
            height={1000}
            src="https://images.pexels.com/photos/2217513/pexels-photo-2217513.jpeg"
            className="w-full h-auto rounded-xl shadow-xl relative z-10 object-cover aspect-4/3"
            alt="Oil and gas logistics"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#bd1b1b] text-white p-4 rounded-sm shadow-lg z-20">
            <span className="font-bold">Specialized Focus</span>
            <div className="flex items-center mt-1">
              <span className="text-sm">Oil & Gas Sector</span>
              <Truck className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="bg-[#bd1b1b]/10 p-2 rounded-sm mr-4">
              <Truck className="h-8 w-8 text-[#bd1b1b]" />
            </div>
            <h3 className="text-3xl font-bold text-[#bd1b1b]">
              Importance of specialized focus in Projects, Oil & Gas Logistics?
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-6 border-l-4 border-[#bd1b1b] pl-4">
            Our team provides skilled & experienced managers who know the
            intricacies of this vertical and focus on providing solutions in Oil
            & Gas sector...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Jan 24, 2021</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Logistics</span>
            </div>
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-[#bd1b1b] mr-2 mt-1" />
              <span className="text-gray-700">Distribution</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-sm shadow border-l-4 border-[#bd1b1b] mb-6">
            <p className="text-gray-600 italic">
              "Specialized knowledge and experience in Oil & Gas logistics
              ensures safe, efficient, and compliant project execution."
            </p>
          </div>

          <button className="inline-flex items-center text-[#bd1b1b] font-bold hover:underline transition-all">
            <span>Read Full Article</span>
            <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default InsightsSection;

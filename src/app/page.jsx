"use client";
import Image from "next/image";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react";
import OwlCarousel from "@/components/OwlCarousel/OwlCarousel";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  useEffect(() => {
    import("jquery").then(($) => {
      window.jQuery = $;
      require("owl.carousel");
    });
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        h2Text={"Ship parcels quickly "}
        pText={
          "Our company offers fast, reliable and affordable delivery services around the globe!"
        }
        spanText={"National and Worldwide"}
        img={
          "https://img.freepik.com/free-photo/industrial-port-container-yard_1112-1200.jpg?t=st=1755892197~exp=1755895797~hmac=20aef108ee82fc643d9fee55fb42c4470b2ab250a6a86d6dc3cf091e6c0fc374&w=1480"
        } // Replace with a relevant image URL
        location={""}
      />
      <Content />
      <Footer />
    </>
  );
}

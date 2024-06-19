import React from "react";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import { home, logo1, logo2, logo3, logo4 } from "../../../public/images";
import { Button } from "@mui/material";
import styles from "./landing.module.css";

function Landing() {
  return (
    <div className={`relative h-screen ${styles["landing-container"]} `}>
    <div className={`bg-black relative z-0 h-screen w-full ${styles["background-wrapper"]}`}>
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#062349e7] via-[#06234981] to-[#06234988]"></div>
      <Image
        src={home}
        alt="Home Image"
        className="w-full h-screen object-cover"
      />
      <Navbar />
    </div>

    <div className={`absolute z-10 top-[30%] left-[12%] w-[80%] ${styles["content-wrapper"]}`}>
      <div className={`flex flex-col lg:flex-row gap-20 lg:gap-[200px] h-full ${styles["info-section"]}`}>
        <div className={`flex flex-col  text-white ${styles["text-content"]}`}>
        <div className={`text-4xl font-bold ${styles["title-section"]}`}>
        <h1>HARBOUR LIGHTS</h1>
        <div className={`flex gap-1 ${styles["subtitle"]}`}>
          <h1>DE</h1>
          <h1 className="text-blue-500">GRESOGONO</h1>
        </div>
      </div>

          <h1 className={`text-xl font-bold mt-2 ${styles["description"]}`}>
            1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
          </h1>

          <div className={`flex flex-col gap-2 mt-10 lg:mt-20 ${styles["benefits-section"]}`}>
            <div className="flex items-center">
              <div className="bg-blue-500 h-10 w-1"></div>
              <h1 className="bg-[#0623496c] w-full p-2">
                Rental of UPTO 11%**
              </h1>
            </div>

            <div className="flex items-center">
              <div className="bg-blue-500 h-10 w-1"></div>
              <h1 className="bg-[#0623496c] w-full p-2">
                Capital Appreciation of UPTO 10%**
              </h1>
            </div>
          </div>
        </div>

        <div className={`flex flex-col  items-center lg:w-[30%] sm:w-full ${styles["pricing-section"]}`}>
          <div className={`backdrop-blur-lg p-6 rounded-t  ${styles["pricing-wrapper"]}`}>
            <div className="flex flex-col gap-4 text-white ">
              <div className="flex flex-col ">
                <h1>PRICING STARTS FROM</h1>
                <h1 className="text-3xl font-bold">$ 425,000</h1>
                <h1 className="text-xl font-bold">AED 1.3 MILLION</h1>
              </div>

              <Button
                variant="contained"
                className="w-64 h-12 bg-blue-500 hover:bg-blue-700"
              >
                GET A PRESENTATION
              </Button>
            </div>
          </div>
          <div className={`${styles["presentation-section"]} backdrop-blur-[100px] mt-1 p-1 w-[85%]`}>
            <h1 className="text-blue-200 p-1 text-sm">
              Get an Expert's Presentation of Real Estate in Dubai For Life
              And Investment
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div className={`absolute bottom-[-20%] w-full bg-[#cdd9e8] py-10 ${styles["footer-section"]}`}>
      <div className={`flex flex-wrap gap-10 justify-around mx-auto w-4/5 ${styles["footer-content"]}`}>
        {[
          { logo: logo4, title: "BOOK WITH", subtitle: "ONLY 20%" },
          { logo: logo3, title: "PAYMENT PLAN", subtitle: "EASY 70/30" },
          { logo: logo2, title: "HANDOVER ON", subtitle: "Q2 2027" },
          { logo: logo1, title: "AREA STARTS FROM", subtitle: "700 SQMT" },
        ].map(({ logo, title, subtitle }, index) => (
          <div key={index} className={`flex flex-col items-center ${styles["footer-item"]}`}>
            <div className={`image-wrapper ${styles["gradient-border"]}`}>
              <Image
                src={logo}
                className="w-16 h-16 rounded-full"
                alt={`${title} logo`}
              />
            </div>
            <h1 className="text-center text-blue-900">{title}</h1>
            <h1 className="text-2xl font-bold text-blue-900 text-center">
              {subtitle}
            </h1>
            <div className="bg-[#87b3ed5e] h-1 w-20 rounded-lg mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Landing;

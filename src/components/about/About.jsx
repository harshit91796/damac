import Image from "next/image";
import React from "react";
import { logo1, logo2, logo3, logo4, options, options1, options2, options3 } from "../../../public/images";
import styles from "./about.module.css";

const gradientBorderStyle = {
  background: "linear-gradient(180deg, #7d7e7f3f, #ffffff)",
  padding: "5px",
  borderRadius: "100px",
};

function About() {
  return (
    <div className={`${styles["about-container"]}`}>
      <div>
        <div className={`flex flex-col gap-10 justify-between items-center ml-[15%] mr-[15%] p-10 ${styles["content-wrapper"]}`}>
          <div className={`${styles["text-blue-900"]} text-center ${styles["title-section"]}`}>
            <h1 className="text-4xl">HARBOUR</h1>
            <h1 className="text-4xl">LIGHTS</h1>
            <h5 className={`${styles["text-bold"]} ${styles["subtitle"]}`}>de GRESOGONO</h5>
            <h5 className={`${styles["subtitle"]}`}>GENEVE</h5>
          </div>

          <div className={`flex flex-col gap-5 w-[70%] text-center ${styles["description"]}`}>
            <h1 className="text-4xl text-bold text-blue-900">FEATURES & AMENITIES</h1>
            <h3>
              Harbour Lights Beautifully Honours Maritime Voyages While Embracing An Opulent Seafront LifeStyle. Its Maritime-Inspired
              Amenties Provide An Unmatched Seaside Experience, Offering A Life Of Tranquility And Bliss.
            </h3>
          </div>

          <div className={` w-screen  ${styles["features-wrapper"]}`}>
            {[
              { logo: options, text: 'Floating Pools' },
              { logo: options1, text: 'Spacious Cabins Like Rooms' },
              { logo: options2, text: 'Sea Facing Swimming Pools' },
              { logo: options3, text: 'Gymnasium & Fitness' }
            ].map(({ logo, text }, index) => (
              <div key={index} className={`flex flex-col   items-center shadow-lg ${styles["feature-item"]} md:grid-rows-2 md:grid-cols-2`}>
                <div style={gradientBorderStyle} className={`${styles["gradient-border"]} ${styles["image-wrapper"]}`}>
                  <Image
                    src={logo}
                    className={`${styles["logo-image"]}`}
                    alt="Logo"
                  />
                </div>
                <div className={`${styles["text-blue-900"]} ${styles["text-bold"]} w-[150px]`}>
                  <h1 className={`${styles["feature-text"]}`}>{text}</h1>
                </div>
                
              </div>
            ))}
            <div className={`${styles["tnc"]} w-screen flex m-10 text-slate-500 justify-end items-end`}>
              <h1>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

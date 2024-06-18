import Image from "next/image";
import React from "react";
import styles from './about.module.css'
import { logo1, logo2, logo3, logo4, options, options1, options2, options3 } from "../../../public/images";

const gradientBorderStyle = {
   background: "linear-gradient(180deg, #7d7e7f3f, #ffffff)",
   padding: "5px",
   borderRadius: "100px",
 };
function About() {
  return (
    <div className="bg-[#eff1f3] h-screen w-screen absolute top-[120%]">
      <div>
        <div className="flex flex-col gap-10 justify-between items-center ml-[15%] mr-[15%] p-10">
          <div className="text-blue-900  text-center">
            <h1 className="text-4xl ">HARBOUR</h1>
            <h1 className="text-4xl ">LIGHTS</h1>
            <h5 className=" text-bold text-[10px]">de GRESOGONO</h5>
            <h5 className="text-[5px]">GENEVE</h5>
          </div>

          <div className=" flex flex-col gap-5 w-[70%] text-center ">
            <h1 className="text-4xl text-bold text-blue-900 ">
              FEATURES & AMENITIES
            </h1>
            <h3 className="text-black w-[110%]">
              Harbour Lights Beautifully Honours Maritime Voyages While
              Embracing An Opulent Seafront LifeStyle. Its Maritime-Inspired
              Amenties Provide An Unmatched Seaside Experience, Offering A Life
              Of Tranquility And Bliss.
            </h3>
          </div>

          <div className="flex gap-20  w-screen justify-center">
            {[
               {logo : options , text : 'Floating Pools'},
               {logo : options1 , text : 'Spacious Cabins Like Rooms'},
               {logo : options2 , text : 'Sea Facing Swimming Pools'},
               {logo : options3 , text : 'Gymnasium & Fitness'}].map(({logo , text},index) => (
                  
                  <div key={index} className="flex flex-col gap-5 w-[250px] h-[300px]  items-center shadow-lg">
                  <div style={gradientBorderStyle} className="image-wrapper">
                <Image
                  src={logo}
                  className="w-[200px] h-[200px] rounded-full object-cover"
                  alt="Logo"
                />
              </div>
                  <div className="text-blue-900  text-bold w-[150px] ">
                    <h1 className="text-center">{text}</h1>
                  </div>
                </div> 
    
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

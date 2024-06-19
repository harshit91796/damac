import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { grid, grid1, grid2, grid3, grid4 } from "../../../public/images";
import styles from "./gridPage.module.css";
import Footer from "../footer/Footer";

function GridPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles["grid1-layout"]} flex justify-end m-1 mt-5 items-center`}>
        <Button
          variant="contained"
          className="mr-[10px] h-11 hover:bg-white hover:text-blue-900 bg-blue-900"
        >
          EXTERIORS
        </Button>
        <Button>
          <h1 className="border-2 border-blue-900 p-2 rounded-lg hover:bg-blue-900 hover:text-white hover:duration-400">
            INTERIORS
          </h1>
        </Button>
      </div>

      <div className="w-[70%] h-[70%] m-auto mt-[2%]">
          <div className={`${styles["grid-layout"]} grid grid-cols-4 gap-4 `}>
          <Image src={grid} alt="Home Image" className={`${styles["grid-image"]} h-[400px] object-cover col-span-4 rounded-lg`} />
          <Image src={grid1} alt="Home Image" className={`${styles["grid-image"]} rounded-lg`}  />
          <Image src={grid2} alt="Home Image" className={`${styles["grid-image"]} rounded-lg`}  />
          <Image src={grid3} alt="Home Image" className={`${styles["grid-image"]} rounded-lg`}  />
          <Image src={grid4} alt="Home Image" className={`${styles["grid-image"]} rounded-lg`}  />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default GridPage;

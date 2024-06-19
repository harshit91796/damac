"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.navbar}>
      <h1 className={styles.brand}>DAMAC</h1>
      <Button className={styles["enquires-button"]}>
        <h1>Enquires</h1>
      </Button>
      <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
        ☰
      </div>
      {menuOpen && (
        <div className={styles["options-menu"]}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full flex flex-col">
              <a href="#" className={`${styles["optionAnchor"]}`}>
                Option {i}
              </a>
              <div className="h-[1px] w-[145px] ml-[-10px] bg-white"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;

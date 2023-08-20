import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Header = () => {
  const [showWedding, setShowWedding] = useState(false);

  const toggleDropDownWedding = () => {
    setShowWedding((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarHeader}>
          <Link className={styles.navbarBrand} href={"/"}>
            <Image
              className={styles.logo}
              src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/logo_95884.png"
              alt="DB photograpy logo"
              height={125}
              width={250}
            />
          </Link>
        </div>

        <div className={styles.navbarmenu}>
          <ul className={styles.navbarInverse}>
            <li className={styles.navItem}>
              <Link href={"/"}>home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/about"}>about</Link>
            </li>
            <li className={`${styles.navItem} ${styles.portfolio}`}>
              <Link href={"/portfolio"}>portfolio</Link>
              <div className={styles.dropdown}>
                <Link className={styles.aWedding} onMouseOver={toggleDropDownWedding} href={"/portfolio/wedding"}>
                  wedding
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showWedding ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownWedding}>
                  <Link href={"/portfolio/wedding/D&H"}>wedding D&H</Link>
                  <Link href={"/portfolio/wedding/D&G"}>wedding D&G</Link>
                </div>
                <Link href={"/portfolio/femaleportrait"}>female portrait</Link>
                <Link href={"/portfolio/family"}>family</Link>
                <Link href={"/portfolio/newborn"}>newborn</Link>
                <Link href={"/portfolio/geboorte"}>geboorte</Link>
                <Link href={"/portfolio/motherhood"}>motherhood</Link>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.prijzen}`}>
              <Link href={"/prijzen"}>prijzen</Link>
              {/* <div className={styles.dropdown}>
                <Link href={"/prijzen/family"}>family</Link>
                <Link href={"/prijzen/newborn"}>newborn</Link>
                <Link href={"/prijzen/dayinalife"}>day in a life</Link>
                <Link href={"/prijzen/portraitcouplemotherhood"}>
                  portrait, couple, motherhood
                </Link>
              </div> */}
            </li>
            <li className={styles.navItem}>
              <Link href={"/contact"}>contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/algemene-voorwaarden"}>algemene voorwaarden</Link>
            </li>
          </ul>
        </div>
        <Burger />
      </nav>
    </header>
  );
};

export default Header;

import Image from "next/image";
import React, { useState } from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Header = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showBruiloft, setShowBruiloft] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);
  const [showFamilie, setShowFamilie] = useState(false);
  const [showNewborn, setShowNewborn] = useState(false);

  // const toggleDropDownWedding = () => {
  //   setShowWedding((prev) => !prev);
  // };

  const toggleDropDown = (dropdown: string) => {
    switch (dropdown) {
      case "portfolio":
        setShowPortfolio((prev) => !prev);
        break;
      case "bruiloft":
        setShowBruiloft((prev) => !prev);
        break;
      case "portrait":
        setShowPortrait((prev) => !prev);
        break;
      case "familie":
        setShowFamilie((prev) => !prev);
      case "newborn":
        setShowNewborn((prev) => !prev);
      default:
        break;
    }
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

              {/* bruiloft */}
              <div className={styles.dropdown}>
                <Link
                  className={styles.aWedding}
                  onMouseOver={() => toggleDropDown("portfolio")}
                  href={"#"}
                >
                  bruiloft
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showBruiloft ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownWedding}>
                  <Link href={"/portfolio/bruiloft/D&H"}>bruiloft D&H</Link>
                  <Link href={"/portfolio/bruiloft/D&G"}>bruiloft D&G</Link>
                </div>

                {/* female portrait */}
                <Link
                  className={styles.aPortrait}
                  onMouseOver={() => toggleDropDown("portrait")}
                  href={"#"}
                >
                  female portrait
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showBruiloft ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownPortrait}>
                  <Link href={"/portfolio/female-portrait/Laura"}>Laura</Link>
                  <Link href={"/portfolio/female-portrait/Femke"}>Femke</Link>
                </div>

                {/* family */}
                <Link
                  className={styles.aFamily}
                  onMouseOver={() => toggleDropDown("familie")}
                  href={"#"}
                >
                  family
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showFamilie ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownFamily}>
                  <Link href={"/portfolio/familie/home"}>Home</Link>
                  <Link href={"/portfolio/familie/summer-nights"}>
                    Summer nights
                  </Link>
                </div>

                {/* newborn */}
                <Link
                  className={styles.aNewborn}
                  onMouseOver={() => toggleDropDown("newborn")}
                  href={"#"}
                >
                  newborn
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showBruiloft ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownNewborn}>
                  <Link href={"/portfolio/newborn/Dante"}>Dante</Link>
                  <Link href={"/portfolio/newborn/Mose"}>Mose</Link>
                </div>

                {/* zwangerschap */}
                <Link href={"/portfolio/zwangerschap"}>
                  zwangerschap
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showBruiloft ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <Link href={"/portfolio/geboorte"}>geboorte</Link>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.prijzen}`}>
              <Link href={"/prijzen"}>prijzen</Link>
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

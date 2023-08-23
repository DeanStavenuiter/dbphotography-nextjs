

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
  const [showZwangerschap, setShowZwangerschap] = useState(false);
  const [showGeboorte, setShowGeboorte] = useState(false);

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
        break;
      case "newborn":
        setShowNewborn((prev) => !prev);
        break;
      case "zwangerschap":
        setShowZwangerschap((prev) => !prev);
        break;
      case "geboorte":
        setShowGeboorte((prev) => !prev);
        break;
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
              priority
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
                  onMouseOver={() => toggleDropDown("bruiloft")}
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
                  <Link href={"/portfolio/bruiloft/DH"}>bruiloft D&H</Link>
                  <Link href={"/portfolio/bruiloft/DG"}>bruiloft D&G</Link>
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
                      showPortrait ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownPortrait}>
                  <Link href={"/portfolio/female-portrait/laura"}>Laura</Link>
                  <Link href={"/portfolio/female-portrait/femke"}>Femke</Link>
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
                      showNewborn ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownNewborn}>
                  <Link href={"/portfolio/newborn/dante"}>Dante</Link>
                  <Link href={"/portfolio/newborn/mose"}>Mose</Link>
                </div>

                {/* zwangerschap */}
                <Link
                  className={styles.aZwangerschap}
                  onMouseOver={() => toggleDropDown("zwangerschap")}
                  href={"#"}
                >
                  zwangerschap
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showZwangerschap ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownZwangerschap}>
                  <Link href={"/portfolio/zwangerschap/sabrina"}>Sabrina</Link>
                  <Link href={"/portfolio/zwangerschap/danique"}>Danique</Link>
                </div>

                {/* geboorte */}
                <Link
                  className={styles.aGeboorte}
                  onMouseOver={() => toggleDropDown("geboorte")}
                  href={"#"}
                >
                  geboorte
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showGeboorte ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <div className={styles.dropdownGeboorte}>
                <Link href={"/portfolio/geboorte/jule"}>Jule</Link>
                </div>
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

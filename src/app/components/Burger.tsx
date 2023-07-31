import React, { useEffect, useState } from "react";
import styles from "@/styles/hamburger.module.css";
import Link from "next/link";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Burger = () => {
  const [active, setActive] = useState<Boolean | null>(null);
  const [showPrices, setShowPrices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const toggleDropDownPrices = () => {
    setShowPrices((prev) => !prev);
  };

  const toggleDropDownPortfolio = () => {
    setShowPortfolio((prev) => !prev);
  };

  const toggleActive = () => {
    if (active === null) {
      setActive(true);
    } else {
      setActive((prevActive) => !prevActive);
    }
  };

  useEffect(() => {
    setActive(null);
  }, []);

  return (
    <div className={styles.mobileMenu}>
      <input
        type="checkbox"
        id="menuToggle"
        className={styles.menuToggle}
        onClick={toggleActive}
      />
      <label htmlFor="menuToggle">
        <svg
          className={`${styles.hamburger} ${styles.hamRotate} ${styles.ham4} 
            ${active ? styles.active : ""}
            `}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            className={`${styles.line}  ${styles.top}`}
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path
            className={`${styles.line}  ${styles.middle}`}
            d="m 70,50 h -40"
          />
          <path
            className={`${styles.line} ${styles.bottom}`}
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </label>
      {active !== null && (
        <div
          className={`${styles.mobileDropdown}  ${
            active ? styles.slideIn : styles.slideOut
          }`}
        >
          <div>
            <ul className={styles.ul}>
              <li>
                <Link href={"/"}>home</Link>
              </li>
              <li>
                <Link href={"/about"}>about</Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={styles.hasDropdown}
                  onClick={toggleDropDownPortfolio}
                >
                  portfolio
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showPortfolio ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>
                <ul
                  className={`${styles.dropdown} ${
                    showPortfolio ? styles.show : styles.hide
                  }`}
                >
                  <li>
                    <Link href={"/couples"}>couples</Link>
                  </li>
                  <li>
                    <Link href={"/family"}>family</Link>
                  </li>
                  <li>
                    <Link href={"/portraits"}>portraits</Link>
                  </li>
                  <li>
                    <Link href={"/motherhood"}>motherhood</Link>
                  </li>
                </ul>
              </li>
              <li >
                <Link href={"#"}className={styles.hasDropdown} onClick={toggleDropDownPrices}>
                  prijzen
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showPrices ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>

                <ul
                  className={`${styles.dropdown} ${
                    showPrices ? styles.show : styles.hide
                  }`}
                >
                  <li>
                    <Link href={"/prijzen/family"}>family</Link>
                  </li>
                  <li>
                    <Link href={"/prijzen/newborn"}>newborn</Link>
                  </li>
                  <li>
                    <Link href={"/prijzen/dayinalife"}>day in a life</Link>
                  </li>
                  <li>
                    <Link href={"/prijzen/portraitcouplemotherhood"}>
                      portrait, couple, motherhood
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href={"/contact"}>contact</Link>
              </li>
              <li>
                <Link href={"/algemenevoorwaarden"}>algemene voorwaarden</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;

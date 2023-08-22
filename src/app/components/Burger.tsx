import React, { useEffect, useState } from "react";
import styles from "@/styles/hamburger.module.css";
import Link from "next/link";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Burger = () => {
  const [active, setActive] = useState<Boolean | null>(null);
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
                  onClick={() => toggleDropDown("portfolio")}
                >
                  portfolio
                  <KeyboardArrowDownOutlinedIcon
                    className={`${styles.arrow} ${
                      showPortfolio ? styles.rotate : styles.rotateBack
                    }`}
                  />
                </Link>

                {/* bruiloft */}
                <ul
                  className={`${styles.dropdown} ${
                    showPortfolio ? styles.show : styles.hide
                  }`}
                >
                  <li>
                    <Link
                      href={"#"}
                      className={styles.hasDropdown}
                      onClick={() => toggleDropDown("bruiloft")}
                    >
                      wedding
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showBruiloft ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>
                    <ul
                      className={`${styles.dropdown} ${
                        showBruiloft ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/bruiloft/D&H"}>D&H</Link>
                      </li>
                      <li>
                        <Link href={"/portfolio/bruiloft/D&G"}>D&G</Link>
                      </li>
                    </ul>
                  </li>

                  {/* portrait */}
                  <li>
                    <Link
                      href={"#"}
                      onClick={() => toggleDropDown("portrait")}
                      className={styles.hasDropdown}
                    >
                      Female portrait
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showPortrait ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>{" "}
                    <ul
                      className={`${styles.dropdown} ${
                        showPortrait ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/female-portrait/Laura"}>
                          Laura
                        </Link>
                      </li>
                      <li>
                        <Link href={"/portfolio/female-portrait/Femke"}>
                          Femke
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* familie */}
                  <li>
                    <Link
                      href={"#"}
                      className={styles.hasDropdown}
                      onClick={() => toggleDropDown("familie")}
                    >
                      familie
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showFamilie ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>
                    <ul
                      className={`${styles.dropdown} ${
                        showFamilie ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/familie/home"}>Home</Link>
                      </li>
                      <li>
                        <Link href={"/portfolio/familie/summer-nights"}>
                          Summer nights
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* newborn */}
                  <li>
                    <Link
                      href={"#"}
                      className={styles.hasDropdown}
                      onClick={() => toggleDropDown("newborn")}
                    >
                      newborn
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showNewborn ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>
                    <ul
                      className={`${styles.dropdown} ${
                        showNewborn ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/newborn/Dante"}>Dante</Link>
                      </li>
                      <li>
                        <Link href={"/portfolio/newborn/Mose"}>Mose</Link>
                      </li>
                    </ul>
                  </li>

                  {/* zwangerschap */}
                  <li>
                    <Link
                      href={"#"}
                      className={styles.hasDropdown}
                      onClick={() => toggleDropDown("zwangerschap")}
                    >
                      zwangerschap
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showZwangerschap ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>{" "}
                    <ul
                      className={`${styles.dropdown} ${
                        showZwangerschap ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/zwangerschap/Sabrina"}>
                          Sabrina
                        </Link>
                      </li>
                      <li>
                        <Link href={"/portfolio/zwangerschap/Danique"}>
                          Danique
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* geboorte */}
                  <li>
                    <Link
                      href={"#"}
                      className={styles.hasDropdown}
                      onClick={() => toggleDropDown("geboorte")}
                    >
                      geboorte
                      <KeyboardArrowDownOutlinedIcon
                        className={`${styles.arrow} ${
                          showGeboorte ? styles.rotate : styles.rotateBack
                        }`}
                      />
                    </Link>{" "}
                    <ul
                      className={`${styles.dropdown} ${
                        showGeboorte ? styles.show : styles.hide
                      }`}
                    >
                      <li>
                        <Link href={"/portfolio/geboorte/Jule"}>Jule</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"/prijzen"}>prijzen</Link>
              </li>
              <li>
                <Link href={"/contact"}>contact</Link>
              </li>
              <li>
                <Link href={"/algemene-voorwaarden"}>algemene voorwaarden</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Burger;

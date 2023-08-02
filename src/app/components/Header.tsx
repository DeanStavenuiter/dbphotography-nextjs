
import Image from "next/image";
import React from "react";
import styles from "@/styles/header.module.css";
import Link from "next/link";
import Burger from "./Burger";

const Header = () => {
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
                <Link href={"/portfolio/couples"}>couples</Link>
                <Link href={"/portfolio/family"}>family</Link>
                <Link href={"/portfolio/newborn"}>newborn</Link>
                <Link href={"/portfolio/portraits"}>portraits</Link>
                <Link href={"/portfolio/motherhood"}>motherhood</Link>
                <Link href={"/portfolio/dayinalife"}>day in a life</Link>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.prijzen}`}>
              <Link href="#">prijzen</Link>
              <div className={styles.dropdown}>
                <Link href={"/prijzen/family"}>family</Link>
                <Link href={"/prijzen/newborn"}>newborn</Link>
                <Link href={"/prijzen/dayinalife"}>day in a life</Link>
                <Link href={"/prijzen/portraitcouplemotherhood"}>
                  portrait, couple, motherhood
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href={"/contact"}>contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/algemenevoorwaarden"}>algemene voorwaarden</Link>
            </li>
          </ul>
        </div>
        <Burger/>
      </nav>
    </header>
  );
};

export default Header;

"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "@/styles/portfolio.module.css"
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.portfolioCards}>
          <div className={styles.rowCards}>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/wedding"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Wedding.png"
                  alt="Bruidspaar op het strand"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/female-portraits"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Female-portrait.png"
                  alt="Portrait van een vrouw"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/family"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Family-black-white.png"
                  alt="Familie foto"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
          </div>
          <div className={styles.rowCards}>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/newborn"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Newborn.png"
                  alt="Vrouw met baby"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/geboorte"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Geboorte.png"
                  alt="Vader en moeder met pasgeboren kindje"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/motherhood"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/home-images/Motherhood.png"
                  alt="Zwangere vrouw"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
          </div>
          </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

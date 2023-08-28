"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.portfolioCards}>
          <div className={styles.rowCards}>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/newborn/dante"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/portfolio-images/Dante.png"
                  alt="Portfolio Dante"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/newborn/mose"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/portfolio-images/Mose.png"
                  alt="Portfolio Mose"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;

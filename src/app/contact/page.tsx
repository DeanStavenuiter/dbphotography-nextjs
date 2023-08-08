"use client";

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "@/styles/contact.module.css";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main>
        <Header />

        <div className={styles.mainContainer}>
          <div className={styles.contactInformation}>
              <h1>Contact gegevens</h1>
              <p>
                Denise Duindam-Biegelaar
                <br />
                <br />
                Ghandistraat 42
                <br />
                <br />
                2131 PE Hoofddorp
                <br />
                <br />
                06-15855911
                <br />
                <br />
                denisebiegelaar@gmail.com
              </p>
          </div>
          <div className={styles.pictureContainer}>
            <Image
              src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/about/SophieBelPhotography_Denise-2.jpg"
              width={350}
              height={500}
              alt="Denise met Bobby"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

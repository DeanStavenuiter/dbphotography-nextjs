"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "@/styles/prijzen.module.css";

const page = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.pricesOuter}>
          <div className={styles.prices}>
            <h1>Bruiloft</h1>
            <p>Prijs op aanvraag</p>
          </div>
          <div className={styles.prices}>
            <h1>Geboorte</h1>
            <p>Prijs op aanvraag</p>
          </div>
          <div className={styles.prices}>
            <h1>Familie(tot 6 personen)</h1>
            <p>Ongeveer 1 - 1,5 uur shooten</p>
            <p>25 bewerkte foto&apos;s in hoge resolutie</p>
            <p>
              De foto&apos;s worden binnen 2 weken geleverd in een online
              gallery
            </p>
            <p>Gratis gebruik van cliënt closet</p>
            <p>€ 210,-</p>
            <p>Extra foto&apos;s € 5,- per stuk</p>
          </div>
          <div className={styles.prices}>
            <h1>Familie(6 personen of meer)</h1>
            <p>Ongeveer 1,5 - 2 uur shooten</p>
            <p>30 bewerkte foto&apos;s in hoge resolutie</p>
            <p>
              De foto&apos;s worden binnen 2 weken geleverd in een online
              gallery
            </p>
            <p>Gratis gebruik van cliënt closet</p>
            <p>€ 250,-</p>
            <p>Extra foto&apos;s € 5,- per stuk</p>
          </div>
          <div className={styles.prices}>
            <h1>Female portrait</h1>
            <p>Ongeveer 1- 1,5 uur shooten</p>
            <p>25 bewerkte foto&apos;s door jou geselecteerd</p>
            <p>
              De foto&apos;s worden binnen 2 weken geleverd in een online
              gallery
            </p>
            <p>Gratis gebruik van cliënt closet</p>
            <p>€210,-</p>
            <p>Extra foto&apos;s € 5,- per stuk</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;

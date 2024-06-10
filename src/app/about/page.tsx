"use client"

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainContainer}>
          <div className={styles.aboutPicture}>
            <Image
              src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/about/SophieBelPhotography_Denise-2.jpg"
              width={350}
              height={500}
              alt="Denise met Bobby"
            />
          </div>
          <article className={styles.aboutText}>
            <h1>About</h1>
            <p>
              Hi, ik ben Denise 35 jaar oud en woon samen met mijn man Boi,
              zoontje Bobby en onze kat Andy in Hoofddorp.
            </p>
            <p>
              Aan opleidingen en hobby&apos;s geen gebrek, want ik begon op mijn
              16e aan de kappersopleiding en heb toen fulltime in de kapsalon
              gewerkt. Na een aantal jaar besloot ik dat het tijd was voor iets
              anders en heb ik de doktersassistente opleiding afgerond en
              inmiddels werk ik ruim 10 jaar parttime als assistente op
              verschillende afdelingen.
            </p>
            <p>
              Fotografie is altijd al een hobby van mij geweest, zo spaarde ik
              als kind al fotolijstjes en had ik altijd een (wegwerp) camera op
              zak. Een paar jaar geleden besloot ik om mijn hobby serieus te
              nemen en naast mijn huidige baan ook te gaan fotograferen.
            </p>
            <p>
              Ik ben verschillende cursussen gaan volgen bij onder andere Pier-K
              en Sunfield academy. En heb ik mentorship gevolgd bij Angela
              Bloemsaat. En fotograferen vind ik stiekem toch wel het
              allerleukst om te doen.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;

"use client"

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "@/styles/portfolio.module.css"
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
     <main className={styles.main}>
        <Header />

      </main>
      <Footer />   
    </>
  )
}

export default page
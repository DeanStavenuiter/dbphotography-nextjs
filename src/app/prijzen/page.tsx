"use client"

import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from "@/styles/prijzen.module.css"

const page = () => {
  return (
    <>
      <Head>
      
      </Head>
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
                <p>€210,- voor 25 foto&apos;s. Extra foto&apos;s €5,- per stuk</p>
            </div>
            <div className={styles.prices}>
                <h1>Familie(6 personen of meer)</h1>
                <p>€250,- voor 30 foto&apos;s. Extra foto&apos;s €5,- per stuk</p>
            </div>
            <div className={styles.prices}>
                <h1>Female portrait</h1>
                <p>€210,- voor 25 foto&apos;s. Extra foto&apos;s €5,- per stuk</p>
            </div>
          </div>
        </main>
        <Footer /></>
  )
}

export default page
import Image from "next/image";
import styles from "../styles/page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gezin & Lifestyle Fotografie | Denise B Photography",
  description:
    "Vereeuwig jouw dierbaarste momenten met prachtige foto's. Ervaar onze unieke werkwijze voor warme en natuurlijke familie- en lifestylefotografie. Laat je verrassen door het resultaat!",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imgOuter}>
          <Image
            src={
              "https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/IMG_9752.jpg"
            }
            alt="Bruidspaar op het strand"
            width={5617}
            height={3745}
            priority
          />
        </div>

        <hr className={styles.hr} />

        <div className={styles.mainText}>
          <h1>Familie en Lifestyle fotograaf</h1>
          <br />
          <p>
            Echte momenten op een ongedwongen en liefdevolle manier vastgelegd
          </p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.portfolioCards}>
          <div className={styles.rowCards}>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/bruiloft"}>
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
              <Link href={"/portfolio/female-portrait"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/portfolio-images/female portrait.png"
                  alt="Portrait van een vrouw"
                  width={250}
                  height={350}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/familie"}>
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
          {/* <div className={styles.portfolioCards}> */}
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
              <Link href={"/portfolio/zwangerschap"}>
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
        <hr className={styles.hr} />
        <div className={styles.reviewsOuter}>
          <div className={styles.mainText}>
            <h1>Benieuwd wat andere mensen over mij zeggen? </h1>
            <div className={styles.reviews}>
              <div className={styles.review}>
                <p>
                  Ik heb al meerdere shoots met Denise mogen doen. Ze heeft de
                  gave om het ongemakkelijke toch gemakkelijk te maken. Daardoor
                  ontstaat er een ontspannen sfeer en vergeet je eigenlijk dat
                  ze er is. Het resultaat is altijd prachtig en nog mooier dan
                  je had durven dromen.
                </p>
                <p className={styles.middle}>- Renske</p>
              </div>
              <div className={styles.review}>
                <p>
                  Denise heeft een gave om mooie momenten spontaan vast te
                  leggen, dat blijf ik zo bijzonder vinden! De shoots zijn
                  altijd relaxed en een feestje voor de kids. Wij zijn fan!!
                </p>
                <p className={styles.middle}>- kelly</p>
              </div>
            </div>
          </div>
          <hr className={styles.hr} />
        </div>
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/portfolio.module.css";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.portfolioCards}>
          <div className={styles.rowCards}>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/geboorte/jule"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/portfolio-images/Jule.png"
                  alt="Portfolio Jule"
                  width={250}
                  height={340}
                />
              </Link>
            </div>
            <div className={styles.imgCardWrapper}>
              <Link href={"/portfolio/geboorte/dean"}>
                <Image
                  className={styles.imgCard}
                  src="https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/portfolio-images/dean.png"
                  alt="Portfolio Dean"
                  width={250}
                  height={340}
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

export default Page;


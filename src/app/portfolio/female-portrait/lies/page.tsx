import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elegant Vrouwelijk Portret op een Paard – Unieke Fotoshoot",
  description:
    "Ontdek de schoonheid en gratie van een vrouwelijke portretshoot op een paard. Deze fotoshoot vangt de unieke band tussen vrouw en paard, met betoverende beelden die elegantie en kracht uitstralen. Perfect voor liefhebbers van paarden en fotografie.",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="lies/"
          name="Lies"
          indexEndFirstCol={10}
          indexEndSecondCol={23}
          indexEndThirdCol={33}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;
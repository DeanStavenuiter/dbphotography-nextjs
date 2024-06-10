import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Femke - Kracht & Uitstraling",
  description:
    "Ontdek jezelf en word krachtiger met onze inspirerende portretsessies voor vrouwen. Leg jouw essentie vast, vier je schoonheid en straal zelfvertrouwen uit.",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="Femke/"
          name="Femke"
          indexEndFirstCol={5}
          indexEndSecondCol={11}
          indexEndThirdCol={16}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

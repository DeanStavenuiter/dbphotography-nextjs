import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denise & Hein | Trouwdag",
  description:
    "Trouw herinneringen: Denise & Hein Trouwen! Bekijk foto's van hun ceremonie, receptie en alle speciale momenten daartussen.",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="wedding D&H/"
          name="Denise & Hein"
          indexEndFirstCol={16}
          indexEndSecondCol={34}
          indexEndThirdCol={49}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

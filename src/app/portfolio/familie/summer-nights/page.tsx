import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zomerse Avond in de Duinen met de Familie",
  description:
    "Leg de unieke band en ongedwongen sfeer van jouw familie vast met een professionele duinen shoot. Geniet van prachtige foto's die de pure connectie en plezier tussen hen tonen",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="family:zomer/"
          name="Zomer"
          indexEndFirstCol={8}
          indexEndSecondCol={16}
          indexEndThirdCol={23}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

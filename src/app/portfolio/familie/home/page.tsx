import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thuis Shoot: Een Dag Vol Liefde en Gelach",
  description:
    "Leg de unieke band en ongedwongen sfeer van jouw gezin vast met een professionele thuis shoot. Geniet van prachtige foto's die de pure connectie tussen jullie tonen.",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="family:thuis/"
          name="Thuis"
          indexEndFirstCol={11}
          indexEndSecondCol={25}
          indexEndThirdCol={36}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

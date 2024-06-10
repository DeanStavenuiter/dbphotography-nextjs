import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ode aan Vrouwelijkheid: Portretreis met Laura",
  description:
    "Portretshoot: Laura straalde elegantie en allure uit tegen de prachtige omgeving. Ontdek haar betoverende portretten hier!",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="Laura/"
          name="Laura"
          indexEndFirstCol={2}
          indexEndSecondCol={4}
          indexEndThirdCol={6}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

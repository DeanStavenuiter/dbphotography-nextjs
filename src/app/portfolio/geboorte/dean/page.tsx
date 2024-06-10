import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wonder van het Leven: Bevalling van Dean vastgelegd",
  description:
    "Leg de kracht, schoonheid en emotie van de bevalling vast met een professionele bevallingsfotoshoot. Koester de unieke band tussen moeder en kind met deze onvergetelijke beelden.",
};

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="Dean/"
          name="Dean"
          indexEndFirstCol={9}
          indexEndSecondCol={19}
          indexEndThirdCol={27}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

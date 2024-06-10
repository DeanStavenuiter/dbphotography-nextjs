import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Denise & Jorghino | Trouwdag",
  description:
    "Herbeleef de magie van de trouwdag van Denise & Jorghino met dit prachtige fotoalbum. Geniet van de emoties, lach en liefde van hun bijzondere viering.",
};

const Page = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="wedding D&G/"
          name="D & J"
          indexEndFirstCol={13}
          indexEndSecondCol={23}
          indexEndThirdCol={34}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Page;

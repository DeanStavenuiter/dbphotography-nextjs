import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="Dante/"
          name="Dante"
          indexEndFirstCol={5}
          indexEndSecondCol={9}
          indexEndThirdCol={14}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

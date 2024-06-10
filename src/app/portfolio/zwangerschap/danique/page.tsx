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
          prefix="Danique/"
          name="Danique"
          indexEndFirstCol={8}
          indexEndSecondCol={17}
          indexEndThirdCol={24}
        />
      </main>
      <Footer />
    </>
  );
};

export default Page;

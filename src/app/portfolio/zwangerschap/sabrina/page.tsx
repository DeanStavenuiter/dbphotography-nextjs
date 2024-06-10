import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/styles/album.module.css";
import GetImages from "@/app/components/GetImages";

const Page = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <GetImages
          prefix="Sabrina/"
          name="Sabrina"
          indexEndFirstCol={7}
          indexEndSecondCol={16}
          indexEndThirdCol={24}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Page;

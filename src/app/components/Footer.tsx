import React from "react";
import styles from "@/styles/footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.mobileHide}>
          <p>copyright © 2023 : DB Photography</p>
        </div>

        <div className={styles.instagramLogo}>
          <Link href="https://www.instagram.com/deniseb_photography/">
            <InstagramIcon />
          </Link>
        </div>

        <div className={styles.mobileHide}>
          <Link className={styles.font} href="mailto:denisebiegelaar@gmail.com">
            denisebiegelaar@gmail.com
          </Link>
        </div>
      </div>
      <div className={styles.certificaatOuter}>
        <Link href={"https://degeboortefotograaf.nl"}>
          <Image
            src={
              "https://dbphotography-nextjs.s3.eu-north-1.amazonaws.com/Geschoold+en+gecertificeerd+via+De+Geboortefotograaf.png"
            }
            width={300}
            height={75}
            alt="Geboortefotograaf certificaat"
            className={styles.certificaatImg}
          />
        </Link>
      </div>

      <div className={styles.madeby}>
        <p>Created by Dean Donovan.</p>
      </div>
    </footer>
  );
};

export default Footer;

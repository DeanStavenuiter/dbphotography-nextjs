import React from "react";
import styles from "@/styles/footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.mobileHide}>
          <p>copyright © 2023 : DB Photography</p>
        </div>

        <div className={styles.instagramLogo}>
          <Link href="https://www.instagram.com/deniseb_photography/">
            <InstagramIcon />
          </Link>
        </div>

        <div className={styles.mobileHide}>
          <Link className={styles.font}  href="mailto:denisebiegelaar@gmail.com">
            denisebiegelaar@gmail.com
          </Link>
        </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { SiMicrosoftoutlook } from "react-icons/si";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>Raul Henrique</p>

      <div className={styles.iconsWrapper}>
        <BiLogoWhatsapp />
        <BiLogoGithub />
        <BiLogoLinkedinSquare />
        <SiMicrosoftoutlook />
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  BiLogoWhatsapp,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { SiMicrosoftoutlook } from "react-icons/si";
import styles from "./footer.module.scss";

const Footer = () => {
  const handleClickToWhatsapp = () => {
    try {
      const whatsappLink =
        "https://api.whatsapp.com/send?phone=5581986838081&text=Gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto%20";
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickToGithub = () => {
    try {
      const githubLink = "https://github.com/raulhenrique-x3";
      window.open(githubLink, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickToLinkedin = () => {
    try {
      const linkedinLink = "https://www.linkedin.com/in/raul-henrique/";
      window.open(linkedinLink, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <p>&lt;Raul /&gt;</p>
      <p>&copy;Raul Henrique</p>

      <div className={styles.iconsWrapper}>
        <BiLogoWhatsapp onClick={() => handleClickToWhatsapp()} />
        <BiLogoGithub onClick={() => handleClickToGithub()} />
        <BiLogoLinkedinSquare onClick={() => handleClickToLinkedin()} />
        <a href="mailto:raulheri43@hotmail.com">
          <SiMicrosoftoutlook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

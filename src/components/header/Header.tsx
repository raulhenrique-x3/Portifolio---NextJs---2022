import { NextPage } from "next";
import { Link } from "react-scroll";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsTranslate, BsWhatsapp } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { headerNav } from "../../const/headerNav";
import styles from "../header/header.module.scss";
import { toast } from "react-toastify";

const Header: NextPage = () => {
  const [active, setActive] = useState(false);

  const languageChange = () => {
    toast.warn("Not implemented");
  };
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
    <header className={styles.header}>
      <div data-nosnippet className={styles.logoMenu}>
        <h1>&lt;Raul /&gt;</h1>
        <BiMenu
          onClick={() => setActive(!active)}
          className={styles.headerIconBiMenu}
        />
      </div>

      <div data-nosnippet className={active ? styles.active : styles.unactive}>
        <nav className={styles.navMenu}>
          <ul className={styles.navList}>
            {headerNav.map((item) => (
              <li className={styles.liList} key={item.id}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.socialContacts}>
        <BsGithub
          className={styles.headerIcon}
          onClick={() => handleClickToGithub()}
        />
        <BsLinkedin
          className={styles.headerIcon}
          onClick={() => handleClickToLinkedin()}
        />
        <BsWhatsapp
          className={styles.headerIcon}
          onClick={() => handleClickToWhatsapp()}
        />
        <BsTranslate
          onClick={() => languageChange()}
          className={styles.headerIcon}
        />
      </div>
    </header>
  );
};

export default Header;

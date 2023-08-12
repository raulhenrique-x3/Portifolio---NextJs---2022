import { NextPage } from "next";
import styles from "../header/header.module.scss";
import { useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { BsGithub, BsLinkedin, BsTranslate, BsWhatsapp } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { headerNav } from "../../const/headerNav";

const Header: NextPage = () => {
  const [active, setActive] = useState(false);
  const { changeLanguage } = useLanguage();

  const languageChange = () => {
    changeLanguage(false);
  };

  return (
    <header className={styles.header}>
      <div data-nosnippet className={styles.logoMenu}>
        <h1>Raul</h1>
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
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.socialContacts}>
        <BsGithub className={styles.headerIcon} />
        <BsLinkedin className={styles.headerIcon} />
        <BsWhatsapp className={styles.headerIcon} />
        <BsTranslate
          onClick={() => languageChange()}
          className={styles.headerIcon}
        />
      </div>
    </header>
  );
};

export default Header;

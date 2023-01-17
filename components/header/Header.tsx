import { NextPage } from "next";
import Image from "next/image";
import styles from "../header/header.module.scss";
import { useState } from "react";
import * as Scroll from "react-scroll";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import useLanguage from "../../src/hooks/useLanguage";
import { Tooltip } from "../Tooltip/Tooltip";

const Header: NextPage = () => {
  const [active, setActive] = useState(false);
  const { changeLanguage, language } = useLanguage();

  const languageChange = () => {
    changeLanguage(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div data-nosnippet className={styles.logoMenu}>
          <Image
            objectFit={"cover"}
            src={"/logoRH.png"}
            className={"logoPic"}
            alt={"RH LOGO"}
            width={"100"}
            height={"52"}
          />

          <button onClick={() => setActive(!active)} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className={styles.biList}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
        </div>
        <div data-nosnippet className={active ? styles.active : styles.unactive}>
          <nav className={styles.navMenu}>
            <ul className={styles.navList}>
              {language ? (
                <li className={styles.liList}>
                  <a href="#projects">Projects</a>
                </li>
              ) : (
                <li className={styles.liList}>
                  <a href="#projects">Projetos</a>
                </li>
              )}

              {language ? (
                <li className={styles.liList}>
                  <a href="#whoim">About me</a>
                </li>
              ) : (
                <li className={styles.liList}>
                  <a href="#whoim">Sobre mim</a>
                </li>
              )}

              {language ? (
                <li className={styles.liList}>
                  <a href="#contacts">Contact </a>
                </li>
              ) : (
                <li className={styles.liList}>
                  <a href="#contacts">Contato </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className={styles.socialContacts}>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/raul-henrique/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={styles.biLinkedin}
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.247 0 14.854V1.146zm4.943 12.224V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.224-.015-.709-.52-1.224-1.342-1.224-.822 0-1.359.54-1.359 1.224 0 .694.521 1.224 1.327 1.224h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.biGithub} viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.24-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.24 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://wa.me/5581986838081">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={styles.biWhatsapp}
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.124-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.224-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.24 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </a>
          {language ? (
            <Tooltip description={"Alterar idioma"} direction="left">
              <button onClick={() => languageChange()} className={styles.flagButton}>
                <img src={"/brazil.svg"} width={32} height={32} className={styles.flag} />
              </button>
            </Tooltip>
          ) : (
            <Tooltip description="Change language" direction="left">
              <button onClick={() => languageChange()} className={styles.flagButton}>
                <img src={"/Flag_of_the_United_States.svg"} width={32} height={32} className={styles.flag} />
              </button>
            </Tooltip>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

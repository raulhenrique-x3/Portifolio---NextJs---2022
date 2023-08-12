import { NextPage } from "next";
import Image from "next/image";
import styles from "../section01/section01.module.scss";
import myPhoto from "../../../assets/myPhoto.jpg";
import { Tooltip } from "../Tooltip/Tooltip";
import useLanguage from "../../hooks/useLanguage";
import { BiLogoReact } from "react-icons/bi";

const FirstSect: NextPage = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.sectOne}>
      <div className={styles.infoData}>
        <BiLogoReact className={styles.reactLogo} />

        <div className={styles.personalInfoContainer}>
          <p className={styles.fullStackDevP}>DESENVOLVEDOR FULLSTACK</p>
          <p className={styles.myNameP}>RAUL HENRIQUE</p>
          <p className={styles.iAm}>
            Bem vindo(a) ao meu portifólio!
            <br />
            Espero que você goste do meu trabalho.
          </p>
          <div className={styles.curriculos}>
            <Tooltip description="See" direction="bottom">
              <a
                href="/cv_front_end_en.pdf"
                target="_blank"
                className={styles.aRef}
              >
                <button className={styles.cvButton} aria-label="curriculum">
                  <p className={styles.resumeP}>Resume</p>
                </button>
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSect;

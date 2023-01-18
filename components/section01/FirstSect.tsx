import { NextPage } from "next";
import Image from "next/image";
import styles from "../section01/section01.module.scss";
import myPhoto from "../../assets/myPhoto.jpg";
import { Tooltip } from "../Tooltip/Tooltip";
import useLanguage from "../../src/hooks/useLanguage";

const FirstSect: NextPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className={styles.sectOne}>
        <div className={styles.progScreen}></div>
        <div className={styles.infoData}>
          <Image src={myPhoto} alt={"Photo of my face"} className={styles.myPhoto} width={100} height={100} />
          {language ? (
            <h1 className={styles.iAm}>Hello! My name is Raul and im a Front-End Developer</h1>
          ) : (
            <h1 className={styles.iAm}>Opa! Meu nome é Raul e sou um desenvolvedor Front-End</h1>
          )}

          <div className={styles.curriculos}>
            {language ? (
              <Tooltip description="See" direction="bottom">
                <a href="/cv_front_end_en.pdf" target="_blank" className={styles.aRef}>
                  <button className={styles.cvButton} aria-label="curriculum">
                    Resume
                  </button>
                </a>
              </Tooltip>
            ) : (
              <Tooltip description="Ver" direction="bottom">
                <a href="/cv_front_end_pt_br.pdf" target="_blank" className={styles.aRef}>
                  <button className={styles.cvButton} aria-label="curriculum">
                    Currículo
                  </button>
                </a>
              </Tooltip>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSect;

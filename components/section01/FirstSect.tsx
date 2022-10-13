import { NextPage } from "next";
import Image from "next/image";
import styles from "../section01/section01.module.scss";
import myPhoto from "../../assets/myPhoto.jpg";
import { Tooltip } from "../Tooltip/Tooltip";

const FirstSect: NextPage = () => {
  return (
    <>
      <section className={styles.sectOne}>
        <div className={styles.progScreen}></div>
        <div className={styles.infoData}>
          <Image src={myPhoto} alt={"Photo of my face"} className={styles.myPhoto} width={100} height={100} />
          <h1 className={styles.iAm}>Opa! Meu nome é Raul e sou um desenvolvedor Front-End</h1>
          <div className={styles.curriculos}>
            <Tooltip description="Download" direction="bottom">
              <a href="/rauldevfrontend2022.pdf" download={"Raul - CV - Dev Front-End.pdf"} className={styles.aRef}>
                <button className={styles.cvButton}>Currículo</button>
              </a>
            </Tooltip>

            <Tooltip description="Download" direction="bottom">
              <a href="/English-Cv-DevFront-End.pdf" download={"Resume-Raul-Front-End"} className={styles.aRef}>
                <button className={styles.cvButton}>Resume (EN)</button>
              </a>
            </Tooltip>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSect;

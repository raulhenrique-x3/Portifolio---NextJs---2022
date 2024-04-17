import { NextPage } from "next";
import styles from "../section03/section03.module.scss";
import Image from "next/image";
import { BiLogoReact } from "react-icons/bi";

const aboutMe = [
  {
    id: 0,
    title: "SOBRE",
    photo: "/mySelf.png",
  },
];

const ThirdSect: NextPage = () => {
  return (
    <section className={styles.thirdSect} id="about">
      {aboutMe.map((info) => (
        <div key={info.id} className={styles.thirdSectInfo}>
          <div className={styles.myPhotoWrapper}>
            <Image
              src={info.photo}
              className={styles.myPhoto}
              alt={"My photo"}
              width={100}
              height={100}
              layout={"responsive"}
            />
          </div>

          <div className={styles.myInfo} id="whoim">
            <span className={styles.sectThreeTitle}>
              <BiLogoReact className={styles.reactLogo} />
              <h2 className={styles.title}>{info.title}</h2>
            </span>

            <p className={styles.aboutMeP}>
              Olá, eu sou Raul. Prazer em conhecê-lo! Sou um{" "}
              <strong>desenvolvedor de software</strong>, com mais de 2 anos de
              experiência, fiz diversos serviços para startups, colaborei com
              pessoas talentosas para criar produtos digitais para negócios e
              uso pessoal. Eu sou confiável, naturalmente curioso e estou sempre
              trabalhando para aperfeiçoar minhas habilidades
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdSect;

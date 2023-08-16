import { NextPage } from "next";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "../section03/section03.module.scss";
import Image from "next/image";
import useLanguage from "../../hooks/useLanguage";
import { BiLogoReact } from "react-icons/bi";

const aboutMe = [
  {
    id: 0,
    title: "SOBRE",
    photo: "/mySelf.png",
  },
];

const ThirdSect: NextPage = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.thirdSect}>
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
              <strong>Sou um desenvolvedor Fullstack</strong>, com diversas
              experiências na área.
              <br />
              <br />
              Atualmente cursando o 3º período de
              <strong>Análise e Desenvolvimento de Sistemas</strong> no
              Instituto Federal de Educação, Ciências e Tecnologia, tenho 23
              anos e sou de Pernambuco.
              <br />
              <br />
              Tenho habilidades em <strong>React</strong>,
              <strong>Typescript</strong>, <strong>Node.js</strong>,
              <strong>Python</strong> ,<strong>MySQL</strong> e
              <strong>MongoDB</strong>.
              <br />
              <br />
              Sou comprometido, detalhista e busco constantemente aprimorar
              minhas habilidades. Agradeço a confiança!
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdSect;

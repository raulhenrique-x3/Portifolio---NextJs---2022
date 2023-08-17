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
              Meu nome é Raul Henrique{" "}
              <strong>Sou um desenvolvedor Fullstack</strong> de 23 anos,
              Atualmente cursando o 3º período de
              <strong>Análise e Desenvolvimento de Sistemas</strong> no
              Instituto Federal de Educação, Ciências e Tecnologia, tenho 23
              anos e sou de Pernambuco.
              <br />
              <br />
              Com minha experiência e habilidades, estou confiante de que posso
              criar a melhor solução para o seu negócio.
              <br />
              <br />
              Além disso, tenho experiência em ferramentas de desenvolvimento{" "}
              <strong>front-end</strong>, <strong>back-end</strong> e{" "}
              <strong>mobile</strong> bem como em bancos de dados{" "}
              <strong>SQL </strong>e <strong>NoSQL</strong>.
              <br />
              <br />
              Sou comprometido com o <strong>cumprimento de prazos </strong>e a
              criação de <strong>layouts bonitos e atraentes</strong>. Minha
              ampla gama de habilidades me permite oferecer soluções completas e
              personalizadas para atender às suas necessidades específicas.
              Comigo, você pode ter certeza de que seu projeto está em boas
              mãos.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdSect;

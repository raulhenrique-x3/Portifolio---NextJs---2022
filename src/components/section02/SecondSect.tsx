import { NextPage } from "next";
import styles from "../section02/section02.module.scss";
import { Figure } from "../figures/Figures";
import { figureInfoEn } from "../../const/figuresInfo";
import { BiLogoReact } from "react-icons/bi";

const SecondSect: NextPage = () => {
  return (
    <section className={styles.sectTwo} id="projects">
      <span className={styles.sectTwoTitle}>
        <BiLogoReact className={styles.reactLogo} />
        <p>Projetos</p>
      </span>

      <h2>
        O melhor do serviço de desenvolvimento de software
        <br /> para as suas melhores ideias!
      </h2>
      <div className={styles.myProjects}>
        {figureInfoEn.map((info) => (
          <Figure
            src={info?.src}
            alt={info?.alt}
            title={info?.title}
            description={info?.description}
            code={info?.code}
            website={info?.website}
            key={info?.id}
            objectFit={info?.objectFit}
          />
        ))}
      </div>
    </section>
  );
};

export default SecondSect;

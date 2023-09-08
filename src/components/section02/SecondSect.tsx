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
        <p>Projects</p>
      </span>

      <h2>
        The best development services
        <br /> for your best ideas!
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

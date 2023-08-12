import { NextPage } from "next";
import styles from "../section02/section02.module.scss";
import { Figure } from "../figures/Figures";
import useLanguage from "../../hooks/useLanguage";
import { figureInfoEn, figureInfoPtBr } from "../../const/figuresInfo";

const SecondSect: NextPage = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.sectTwo} id="projects">
      <p>Projects</p>

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
          />
        ))}
      </div>
    </section>
  );
};

export default SecondSect;

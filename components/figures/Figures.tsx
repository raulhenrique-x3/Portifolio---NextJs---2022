import styles from "../section02/section02.module.scss";
import Image from "next/image";
import useLanguage from "../../src/hooks/useLanguage";

interface IFigure {
  src: string;
  alt: string;
  title: string;
  description: string;
  code: string;
  website?: string;
  objectFit?: string | any;
}

export const Figure: React.FC<IFigure> = ({ src, alt, title, description, code, website, objectFit }) => {
  const { language } = useLanguage();
  return (
    <figure className={styles.project1}>
      <Image
        src={src}
        alt={alt}
        className={styles.goldenDuelist}
        width={"500"}
        height={"200"}
        layout="responsive"
        objectFit={objectFit}
      />
      <div className={styles.figCont}>
        <p className={styles.projectName}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.buttons}>
        <a target="_blank" rel="noreferrer" href={code}>
          {language ? (
            <button className={styles.sButton} aria-label="code">
              Code
            </button>
          ) : (
            <button className={styles.sButton} aria-label="code">
              Código
            </button>
          )}
        </a>
        {website !== undefined ? (
          <a target="_blank" rel="noreferrer" href={website}>
            <button className={styles.sButton} aria-label="site">
              Website
            </button>
          </a>
        ) : (
          <></>
        )}
      </div>
    </figure>
  );
};

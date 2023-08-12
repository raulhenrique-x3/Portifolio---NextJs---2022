import styles from "../section02/section02.module.scss";
import Image from "next/image";
import useLanguage from "../../hooks/useLanguage";
import { BsGithub } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

interface IFigure {
  src: string;
  alt: string;
  title: string;
  description: string;
  code: string;
  website?: string;
  objectFit?: string | any;
}

export const Figure: React.FC<IFigure> = ({
  src,
  alt,
  title,
  description,
  code,
  website,
  objectFit,
}) => {
  const { language } = useLanguage();
  return (
    <figure className={styles.figureContainer}>
      <Image
        src={src}
        alt={alt}
        className={styles.figureImage}
        width={"500"}
        height={"200"}
        layout="responsive"
        objectFit={objectFit}
      />
      <div className={styles.figureHeader}>
        <p className={styles.projectName}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.figureButtonsWrapper}>
        <a target="_blank" rel="noreferrer" href={code}>
          <button className={styles.figureButton} aria-label="code">
            <BsGithub className={styles.buttonIcon} />
            Code
          </button>
        </a>
        {website !== undefined ? (
          <a target="_blank" rel="noreferrer" href={website}>
            <AiOutlineGlobal className={styles.buttonIcon} />
            <button className={styles.figureButton} aria-label="site">
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

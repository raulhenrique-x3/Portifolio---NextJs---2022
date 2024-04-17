import styles from "./figure.module.scss";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

interface IFigure {
  src: string;
  alt: string;
  title: string;
  description: string;
  code?: string;
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
  return (
    <figure className={styles.figureContainer}>
      <Image
        src={src}
        alt={alt}
        className={styles.figureImage}
        width={"400"}
        height={"300"}
        layout="responsive"
        objectFit={objectFit}
      />
      <div className={styles.figureHeader}>
        <p className={styles.projectName}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.figureButtonsWrapper}>
        {code !== undefined ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={code}
            aria-label="Botão para Acessar o github"
          >
            <button
              className={styles.figureButton}
              aria-label="Botão para Acessar o github"
            >
              <BsGithub className={styles.buttonIcon} />
              Code
            </button>
          </a>
        ) : (
          <></>
        )}

        {website !== undefined ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={website}
            aria-label="Botão para Acessar o site do projeto"
          >
            <button
              className={styles.figureButton}
              aria-label="Botão para Acessar o site do projeto"
            >
              <AiOutlineGlobal className={styles.buttonIcon} />
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

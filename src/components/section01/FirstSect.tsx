import { NextPage } from "next";
import styles from "../section01/section01.module.scss";
import useLanguage from "../../hooks/useLanguage";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-scroll";

const FirstSect: NextPage = () => {
  return (
    <section className={styles.sectOne}>
      <div className={styles.infoData}>
        <BiLogoReact className={styles.reactLogo} />

        <div className={styles.personalInfoContainer}>
          <p className={styles.fullStackDevP}>FULLSTACK DEVELOPER</p>
          <p className={styles.myNameP}>RAUL HENRIQUE</p>
          <p className={styles.iAm}>
            Welcome to my portifolio
            <br />
            Hope you like my work.
          </p>
          <div className={styles.curriculos}>
            <Link
              to={"whoim"}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              className={styles.aRef}
            >
              <button className={styles.cvButton} aria-label="curriculum">
                <p className={styles.resumeP}>About me</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSect;

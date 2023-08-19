import { NextPage } from "next";
import styles from "../section03/section03.module.scss";
import Image from "next/image";
import { BiLogoReact } from "react-icons/bi";

const aboutMe = [
  {
    id: 0,
    title: "ABOUT",
    photo: "/mySelf.png",
  },
];

const ThirdSect: NextPage = () => {
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
              My name is Raul Henrique Im a 23 year old{" "}
              <strong>Fullstack developer</strong>. Currently studying the 3rd
              period of <strong>Analysis and systems development </strong>
              at the Federal Institute of Education, Science and Technology.
              <br />
              <br />
              With my experience and skills, I am confident that I can create
              the best solution for your business.
              <br />
              <br />
              In addition, I have experience in development tools{" "}
              <strong>front-end</strong>, <strong>back-end</strong> and{" "}
              <strong>mobile</strong> as well as databases <strong>SQL </strong>
              e <strong>NoSQL</strong>.
              <br />
              <br />I am committed to <strong>meeting deadlines </strong>e a and
              creating <strong>beautiful and attractive layouts</strong>. My
              wide range of skills allows me to offer complete solutions and
              customized to meet your specific needs. With me, you can be sure
              that your project is in good shape. hands.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ThirdSect;

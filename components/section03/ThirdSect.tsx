import { NextPage } from "next";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "../section03/section03.module.scss";
import Image from "next/image";
import useLanguage from "../../src/hooks/useLanguage";

const ThirdSect: NextPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className={styles.thirdSect}>
        <svg className={styles.svgBack} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#266398"
            fillOpacity="1"
            d="M0,32L34.3,48C68.6,64,137,96,206,112C274.3,128,343,128,411,122.7C480,117,549,107,617,128C685.7,149,754,203,823,197.3C891.4,192,960,128,1029,101.3C1097.1,75,1166,85,1234,90.7C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div className={styles.thirdSectInfo}>
          <div className={styles.myPhoto0}>
            <Image
              src={"/myPhoto0.png"}
              className={styles.myPhoto}
              alt={"My photo"}
              width={400}
              height={400}
              layout={"responsive"}
            />
          </div>

          <div className={styles.myInfo} id="whoim">
            {language ? (
              <h2 className={styles.aboutMe}>A little about me</h2>
            ) : (
              <h2 className={styles.aboutMe}>Um pouco sobre mim</h2>
            )}
            {language ? (
              <p className={styles.aboutMeP}>
                Im currently studying Systems Analysis and Development at the Federal Institute of Science and
                Technology in my city, Im 22 years old and I love technology a lot! I like to help people with what I
                can and I also like to always be learning new things.
                <br />
                <br />
                My history with the Tech area starts around 2013 when I became interested in the study of web design, in
                2015 I did a brief study on Ruby focused on the back-end area, however, the area that held me back
                during this period was that of information security, where I had the opportunity to study a little more
                about back-end, Linux and its distributions.
                <br />
                <br />
                Now Im a Front-End developer with ambitions to become a senior full-stack developer!
              </p>
            ) : (
              <p className={styles.aboutMeP}>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e
                Tecnologia da minha cidade, tenho 22 anos e muito amor pela área de tecnologia! Gosto de ajudar as
                pessoas com o que posso e também gosto de sempre estar aprendendo coisas novas.
                <br />
                <br />
                Minha história com a área Tech começa por volta de 2013 onde eu me interessei pelo estudo do web design,
                em 2015 fiz um breve estudo sobre Ruby voltado para a área de back-end, porém, a área que me prendeu
                nesse período foi a de segurança da informação, onde tive a oportunidade de estudar um pouco mais sobre
                back-end, o Linux e suas distribuições.
                <br />
                <br />
                Agora sou um desenvolvedor Front-End que tem pretensões de se tornar um desenvolvedor full-stack sênior!
              </p>
            )}

            <div className={styles.mySkills}>
              <p className={styles.hardskill}>Hard skills</p>
            </div>
            <div className={styles.iconList}>
              <div className={styles.iconBox}>
                <Tooltip description="ReactJs" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/react-original-wordmark.svg"
                      width={44}
                      height={44}
                      alt="ReactJs"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="React-Native" direction="top">
                  <div className={styles.listIcon}>
                    <Image className={styles.iconTech} src="/react-native-1.svg" width={44} height={44} alt="ReactJs" />
                  </div>
                </Tooltip>
                <Tooltip description="NextJs" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/nextjs-original-wordmark.svg"
                      width={44}
                      height={44}
                      alt="NextJs Icon"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="Redux-Toolkit" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/redux-original.svg"
                      width={44}
                      height={44}
                      alt="Redux-Toolkit Icon"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="Sass" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/sass-original.svg"
                      width={44}
                      height={44}
                      alt="Sass-Logo-Icon"
                    />
                  </div>
                </Tooltip>
              </div>
              <div className={styles.iconBox}>
                <Tooltip description="Typescript" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/typescript-plain.svg"
                      width={44}
                      height={44}
                      alt="Typescript Icon"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="Node.Js" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/nodejs-original.svg"
                      width={44}
                      height={44}
                      alt="Node.Js Icon"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="MySql" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src="/mysql-original.svg"
                      width={44}
                      height={44}
                      alt="mysql icon"
                    />
                  </div>
                </Tooltip>
                <Tooltip description="Storybook" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src={"/storybook-original.svg"}
                      width={44}
                      height={44}
                      alt="Storybook svg icon"
                    />
                  </div>
                </Tooltip>

                <Tooltip description="React-Testing" direction="top">
                  <div className={styles.listIcon}>
                    <Image
                      className={styles.iconTech}
                      src={"/octopus-64x64.png"}
                      width={44}
                      height={44}
                      alt="React-Testing-Library png icon"
                    />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <svg className={styles.svgWaveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#266398"
            fillOpacity="1"
            d="M0,224L48,208C96,192,192,160,288,122.7C384,85,480,43,576,58.7C672,75,768,149,864,160C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default ThirdSect;

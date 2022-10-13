import { NextPage } from "next";
import { Tooltip } from "../Tooltip/Tooltip";
import styles from "../section03/section03.module.scss";
import Image from "next/image";

const ThirdSect: NextPage = () => {
  return (
    <>
      <section className={styles.thirdSect} id="whoim">
        <p>Quem sou eu?</p>
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

          <div className={styles.myInfo}>
            <h2 className={styles.aboutMe}>Um pouco sobre mim</h2>
            <p className={styles.aboutMeP}>
              Atualmente estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal de Ciência e
              Tecnologia da minha cidade, tenho 22 anos e muito amor pela área de tecnologia! Gosto de ajudar as pessoas
              com o que posso e também gosto de sempre estar aprendendo coisas novas.
              <br />
              <br />
              Minha história com a área Tech começa por volta de 2013 onde eu me interessei pelo estudo do web design,
              em 2015 fiz um breve estudo sobre Ruby voltado para a área de back-end, porém, a área que me prendeu nesse
              período foi a te segurança da informação, onde tive a oportunidade de estudar um pouco mais sobre
              back-end, o Linux e suas distribuições.
            </p>
            <div className={styles.mySkills}>
              <p className={styles.hardskill}>Hard skills</p>
            </div>
            <ul className={styles.iconList}>
              <Tooltip description="ReactJs" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src="/react-original-wordmark.svg"
                    width={44}
                    height={44}
                    alt="ReactJs"
                  />
                </li>
              </Tooltip>
              <Tooltip description="NextJs" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src="/nextjs-original-wordmark.svg"
                    width={44}
                    height={44}
                    alt="NextJs"
                  />
                </li>
              </Tooltip>
              <Tooltip description="Sass" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src="/sass-original.svg"
                    width={44}
                    height={44}
                    alt="Sass-Logo-Icon"
                  />
                </li>
              </Tooltip>
              <Tooltip description="Typescript" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src="/typescript-plain.svg"
                    width={44}
                    height={44}
                    alt="Bootstrap"
                  />
                </li>
              </Tooltip>
              <Tooltip description="Storybook" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src={"/storybook-original.svg"}
                    width={44}
                    height={44}
                    alt="Storybook svg icon"
                  />
                </li>
              </Tooltip>

              <Tooltip description="React-Testing-Library" direction="top">
                <li className={styles.listIcon}>
                  <Image
                    className={styles.iconTech}
                    src={"/octopus-64x64.png"}
                    width={44}
                    height={44}
                    alt="React-Testing-Library png icon"
                  />
                </li>
              </Tooltip>
            </ul>

            <div className={styles.mySkills}>
              <p className={styles.softSkill}>Soft skills</p>
            </div>

            <ul className={styles.iconList}>
              <Tooltip description="Criativo" direction="top">
                <li className={styles.listIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    fill="currentColor"
                    className={styles.biLightbulb}
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                  </svg>
                </li>
              </Tooltip>
              <Tooltip description="Troubleshooter" direction="top">
                <li className={styles.listIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    fill="currentColor"
                    className={styles.biBug}
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z" />
                  </svg>
                </li>
              </Tooltip>
              <Tooltip description="Resiliente" direction="top">
                <li className={styles.listIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    fill="currentColor"
                    className={styles.biFlower3}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268zM9 4a1.468 1.468 0 0 1-.045.205c-.039.132-.1.295-.183.484a12.88 12.88 0 0 1-.637 1.223L8 6.142a21.73 21.73 0 0 1-.135-.23 12.88 12.88 0 0 1-.637-1.223 4.216 4.216 0 0 1-.183-.484A1.473 1.473 0 0 1 7 4a1 1 0 1 1 2 0zM3.67 5.5a1 1 0 0 1 1.366-.366 1.472 1.472 0 0 1 .156.142c.094.1.204.233.326.4.245.333.502.747.742 1.163l.13.232a21.86 21.86 0 0 1-.265.002 12.88 12.88 0 0 1-1.379-.06 4.214 4.214 0 0 1-.51-.083 1.47 1.47 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5zm1.366 5.366a1 1 0 0 1-1-1.732c.001 0 .016-.008.047-.02.037-.013.087-.028.153-.044.134-.032.305-.06.51-.083a12.88 12.88 0 0 1 1.379-.06c.09 0 .178 0 .266.002a21.82 21.82 0 0 1-.131.232c-.24.416-.497.83-.742 1.163a4.1 4.1 0 0 1-.327.4 1.483 1.483 0 0 1-.155.142zM9 12a1 1 0 0 1-2 0 1.476 1.476 0 0 1 .045-.206c.039-.131.1-.294.183-.483.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223.083.19.144.352.183.484A1.338 1.338 0 0 1 9 12zm3.33-6.5a1 1 0 0 1-.366 1.366 1.478 1.478 0 0 1-.2.064c-.134.032-.305.06-.51.083-.412.045-.898.061-1.379.06-.09 0-.178 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4.1 4.1 0 0 1 .327-.4c.046-.05.085-.086.114-.11.026-.022.04-.03.041-.032a1 1 0 0 1 1.366.366zm-1.366 5.366a1.494 1.494 0 0 1-.155-.141 4.225 4.225 0 0 1-.327-.4A12.88 12.88 0 0 1 9.74 9.16a22 22 0 0 1-.13-.232l.265-.002c.48-.001.967.015 1.379.06.205.023.376.051.51.083.066.016.116.031.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </li>
              </Tooltip> 
              <Tooltip description="Team work" direction="top">
                <li className={styles.listIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={44}
                    height={44}
                    fill="currentColor"
                    className={styles.biPeople}
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </li>
              </Tooltip>
            </ul>
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

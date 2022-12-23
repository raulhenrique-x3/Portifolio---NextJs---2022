import { NextPage } from "next";
import styles from "../section02/section02.module.scss";
import Image from "next/image";

const SecondSect: NextPage = () => {
  return (
    <>
      <section className={styles.sectTwo} id="projects">
        <p>Projetos</p>
        <div className={styles.myProjects}>
          <figure className={styles.project1}>
            <Image
              src={"/goldenDuelist.png"}
              alt={
                "Projeto Golden Duelist, basead no cardGame Yu-Gi-Oh, criado com React.Js, SASS, Typescript e Redux-Toolkit"
              }
              className={styles.goldenDuelist}
              width={"500"}
              height={"200"}
              layout="responsive"
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Golden Duelist</p>
              <h3>
                O site criado com React.js, SASS, Typescript e Redux-Toolik sobre o cardgame Yu-Gi-Oh! é um marketplace
                responsivo e interativo. Ele permite aos usuários pesquisar cartas, trocar cartas e analisar preços para
                essas trocas.
              </h3>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3/Golden-Duelist">
                <button className={styles.sButton}>Código</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://golden-duelist.vercel.app/">
                <button className={styles.sButton}>Website</button>
              </a>
            </div>
          </figure>
          <figure className={styles.project1}>
            <Image
              src={"/movieshop.png"}
              alt={"movieshop web app"}
              className={styles.petLover}
              width={"500"}
              height={"200"}
              layout={"responsive"}
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Movie App</p>
              <h3>
                Criei esse webapp utilizando ReactJs, Typescript, ReactHookForm, ReactRouterDom, TMDB API e Context API.
              </h3>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3/MovieApp-ReactJs-Typescript">
                <button className={styles.sButton}>
                  <p>Código</p>
                </button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://movieapp-reactjs-ts.vercel.app/">
                <button className={styles.sButton}>Website</button>
              </a>
            </div>
          </figure>

          <figure className={styles.project1}>
            <Image
              src={"/bolaOval.png"}
              alt={"Projeto bola oval"}
              className={styles.petLover}
              width={"500"}
              height={"200"}
              layout={"responsive"}
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Projeto Bola Oval</p>
              <h3>
                Projeto criado com uma equipe para aprender desenvolvimento de componentes utilizando o Storybook e
                também para aprender sobre testes.
              </h3>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3/cheestorybook">
                <button className={styles.sButton}>
                  <p>Código</p>
                </button>
              </a>
            </div>
          </figure>
          <figure className={styles.project1}>
            <Image
              src={"/academiaTopTreino.png"}
              alt={"Top Treino website"}
              className={styles.topTreino}
              width={"500"}
              height={"200"}
              layout="responsive"
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Academia Top Treino</p>
              <h3>Trabalho freelancer feito com NextJs e SCSS.</h3>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3/Top-Treino-Next-Js">
                <button className={styles.sButton}>Código</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://top-treino.vercel.app/">
                <button className={styles.sButton}>Website</button>
              </a>
            </div>
          </figure>
          <figure className={styles.project1}>
            <Image
              src={"/henriqueAdv.png"}
              alt={"petLover website"}
              className={styles.petLover}
              width={"500"}
              height={"200"}
              layout={"responsive"}
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Henrique Advocacia</p>
              <h3>Landing Page responsiva criada com NextJs, Typescript, SCSS e algumas libs React.</h3>
            </div>
            <div className={styles.buttons}>
              <a target="_blank" rel="noreferrer" href="https://github.com/raulhenrique-x3/raul-henrique-advocacia">
                <button className={styles.sButton}>
                  <p>Código</p>
                </button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://henrique-advocacia.vercel.app/">
                <button className={styles.sButton}>Website</button>
              </a>
            </div>
          </figure>
          <figure className={styles.project1}>
            <Image
              src={"/ygoApi.png"}
              alt={"ygoApi website"}
              className={styles.ygoApi}
              width={"500"}
              height={"200"}
              layout="responsive"
              objectFit={"contain"}
            />
            <div className={styles.figCont}>
              <p className={styles.projectName}>Yu-Gi-Oh Card of The Day</p>
              <h3>
                Esse Webapp foi criado com ReactJs, consumindo a API do Yu-Gi-Oh! para que seja mostrado ao usuário um
                card aleatório do cardgame.
              </h3>
            </div>
            <div className={styles.buttons}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/raulhenrique-x3/Yu-Gi-Oh-Card-of-the-Day-API-"
              >
                <button className={styles.sButton}>Código</button>
              </a>
              <a target="_blank" rel="noreferrer" href="https://yu-gi-oh-card-of-the-day-api.vercel.app/">
                <button className={styles.sButton}>Website</button>
              </a>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default SecondSect;

import { NextPage } from "next";
import styles from "../section02/section02.module.scss"
import Image from "next/image";

const SecondSect: NextPage = () => {
    return (
        <>
            <section className={styles.sectTwo} id='projects'>
                <p>Projetos</p>

                <div className={styles.myProjects}>
                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'}
                            layout={'responsive'} />
                        <div className={styles.figCont}>
                            <h1>Pet Lover</h1>
                            <h3>
                                Projeto desenvolvido com o intuito de estudar sobre React-Router, React-Hook-Forms,
                                consumo de multiplas APIs via Axios e firmar meu conhecimento em ReactJs.
                            </h3>

                        </div>

                        <div className={styles.buttons}>
                            <a href="https://github.com/raulhenrique-x3/React-SPA-PetLover"><button className={styles.sButton}><p>Código</p></button></a>
                            <a href="https://react-spa-pet-lover.vercel.app/"><button className={styles.sButton}>Website</button></a>
                        </div>

                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/ygoApi.png'}
                            alt={'ygoApi website'}
                            className={styles.ygoApi}
                            width={'500'}
                            height={'200'}
                            layout="responsive" />
                        <div className={styles.figCont}>
                            <h1>Yu-Gi-Oh Card of The Day</h1>
                            <h3>
                                Esse Webapp foi criado com ReactJs, consumindo a API do Yu-Gi-Oh! para que seja
                                mostrado ao usuário um card aleatório do cardgame.
                            </h3>

                        </div>

                        <div className={styles.buttons}>
                            <a href="https://github.com/raulhenrique-x3/Yu-Gi-Oh-Card-of-the-Day-API-"><button className={styles.sButton}>Código</button></a>
                            <a href="https://yu-gi-oh-card-of-the-day-api.vercel.app/"><button className={styles.sButton}>Website</button></a>
                        </div>
                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/uxForm.png'}
                            alt={'uxForm website'}
                            className={styles.uxForm}
                            width={'500'}
                            height={'200'}
                            layout="responsive" />
                        <div className={styles.figCont}>
                            <h1>Ux Form</h1>
                            <h3>
                                Formulário criado para estudar renderização condicional no ReactJs.
                                Leia o README no GitHub.
                            </h3>


                        </div>

                        <div className={styles.buttons}>
                            <a href="https://github.com/raulhenrique-x3/Formulario-condicional---ReactJs"><button className={styles.sButton}>Código</button></a>
                            <a href="https://formulario-condicional-react-js.vercel.app/"><button className={styles.sButton}>Website</button></a>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    )
}

export default SecondSect;
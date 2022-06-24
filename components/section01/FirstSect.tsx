import { NextPage } from "next";
import Image from "next/image";
import styles from "../section01/section01.module.scss"
import FSectScreen from "../../assets/programingScreen.gif"
import myPhoto from "../../assets/myPhoto.jpg"
import { useState } from "react";

const FirstSect: NextPage = () => {

    const [handleClick, setHandleClick] = useState(false);



    return (
        <>
            <section className={styles.sectOne}>
                <div className={styles.progScreen}>
                    {/* <Image src={FSectScreen}
                        alt={'programingScreenGif'}
                        className={styles.FSectScreen}
                        width={700}
                        height={1075}
                    /> */}
                </div>

                <div className={styles.infoData}>
                    <Image src={myPhoto}
                        alt={'Photo of my face'}
                        className={styles.myPhoto}
                        width={100}
                        height={100} />
                    <p className={styles.iAm}>Opa! Meu nome é Raul e sou um desenvolvedor Front-End</p>
                    <button
                        className={styles.cvButton}
                        onClick={() => setHandleClick(!handleClick)}>Currículo/Resume
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.squareFill} viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 4a.5.5 0 0 0-.374.832l4 4.5a.5.5 0 0 0 .748 0l4-4.5A.5.5 0 0 0 12 6H4z" />
                        </svg>

                    </button>
                    {handleClick && <div className={styles.cV}>
                        <a href="/CvDevFrontEnd.pdf" download={'cvRaul-Front-End.pdf'}
                            className={styles.aRef}>
                            <div className={styles.cvPtBr}>
                                <p>
                                    Currículo(PT-BR)
                                </p>
                            </div>
                        </a>
                        <hr />
                        <a href="/English-Cv-DevFront-End.pdf" download={'Resume-Raul-Front-End'} className={styles.aRef}>
                            <div className={styles.cvEn}>
                                <p>
                                    Resume(EN-US)
                                </p>
                            </div>
                        </a>
                    </div>}

                </div>


            </section>

        </>
    )
}

export default FirstSect
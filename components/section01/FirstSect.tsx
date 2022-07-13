import { NextPage } from "next";
import Image from "next/image";
import styles from "../section01/section01.module.scss"
import myPhoto from "../../assets/myPhoto.jpg"
import { useState } from "react";

const FirstSect: NextPage = () => {
    return (
        <>
            <section className={styles.sectOne}>
                <div className={styles.progScreen}></div>
                <div className={styles.infoData}>
                    <Image src={myPhoto}
                        alt={'Photo of my face'}
                        className={styles.myPhoto}
                        width={100}
                        height={100} />
                    <p className={styles.iAm}>Opa! Meu nome é Raul e sou um desenvolvedor Front-End</p>
                    <div className={styles.curriculos}>
                        <a href="/CvDevFrontEnd.pdf" download={'cvRaul-Front-End.pdf'} className={styles.aRef}>
                            <button className={styles.cvButton}>Currículo</button>
                        </a>
                        <a href="/English-Cv-DevFront-End.pdf" download={'Resume-Raul-Front-End'} className={styles.aRef}>
                            <button className={styles.cvButton}>Resume (EN)</button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstSect
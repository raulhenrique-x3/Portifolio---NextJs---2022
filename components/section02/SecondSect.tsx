import { NextPage } from "next";
import styles from "../section02/section02.module.scss"
import Image from "next/image";

const SecondSect: NextPage = () => {
    return (
        <>
            <section className={styles.sectTwo}>
            <p>Projetos</p>

                <div className={styles.myProjects}>
                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout={'responsive'}/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>
                        <div className={styles.buttons}>
                            <a href="https://github.com/raulhenrique-x3/React-SPA-PetLover"><button className={styles.sButton}><p>Código</p></button></a>
                            <a href="https://react-spa-pet-lover.vercel.app/"><button className={styles.sButton}>Website</button></a>
                        </div>
                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout="responsive"/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>

                        <div className={styles.buttons}>
                            <button className={styles.sButton}>Código</button>
                            <button className={styles.sButton}>Website</button>
                        </div>
                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout="responsive"/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>

                        <div className={styles.buttons}>
                            <button className={styles.sButton}>Código</button>
                            <button className={styles.sButton}>Website</button>
                        </div>
                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout="responsive"/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>

                        <div className={styles.buttons}>
                            <button className={styles.sButton}>Código</button>
                            <button className={styles.sButton}>Website</button>
                        </div>
                    </figure>

                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout="responsive"/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>

                        <div className={styles.buttons}>
                            <button className={styles.sButton}>Código</button>
                            <button className={styles.sButton}>Website</button>
                        </div>
                    </figure>
                    <figure className={styles.project1}>
                        <Image
                            src={'/petLover.png'}
                            alt={'petLover website'}
                            className={styles.petLover}
                            width={'500'}
                            height={'200'} 
                            layout="responsive"/>
                        <h1>Pet Lover</h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book.
                        </h3>

                        <div className={styles.buttons}>
                            <button className={styles.sButton}>Código</button>
                            <button className={styles.sButton}>Website</button>
                        </div>
                    </figure>
                </div>
            </section>
        </>
    )
}

export default SecondSect;
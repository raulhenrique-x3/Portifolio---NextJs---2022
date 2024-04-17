import styles from "../section01/section01.module.scss";
import { Link } from "react-scroll";
import Image from "next/image";

const FirstSect = () => {
  return (
    <section className={styles.sectOne}>
      <div className={styles.infoData}>
        <div className={styles.avatarCircle}>
          <Image
            src="/my-avatar.png"
            width={250}
            height={250}
            alt="my-avatar"
            className={styles.myAvatar}
          />
        </div>

        <div className={styles.personalInfoContainer}>
          <p className={styles.myNameP}>RAUL HENRIQUE</p>
          <p className={styles.fullStackDevP}>Desenvolvedor de Software</p>
          <p className={styles.iAm}>
            Eu desenvolvo com simplicidade e tenho muito amor pelo que faço.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FirstSect;

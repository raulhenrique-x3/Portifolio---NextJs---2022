import { Link } from "react-scroll";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { headerNav } from "../../const/headerNav";
import styles from "../header/header.module.scss";

const linksToSocialMedia = [
  { icon: BsGithub, link: "https://github.com/raulhenrique-x3" },
  { icon: BsLinkedin, link: "https://www.linkedin.com/in/raul-henrique/" },
  {
    icon: BsWhatsapp,
    link: "https://api.whatsapp.com/send?phone=5581986838081&text=Gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto%20",
  },
];

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClickToWhatsapp = (link: string) => {
    try {
      window.open(link, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={styles.header}>
      <div data-nosnippet className={styles.logoMenu}>
        <h1>&lt;Raul /&gt;</h1>
        <BiMenu
          onClick={() => setActive(!active)}
          className={styles.headerIconBiMenu}
        />
      </div>

      <div data-nosnippet className={active ? styles.active : styles.unactive}>
        <nav className={styles.navMenu}>
          <ul className={styles.navList}>
            {headerNav.map((item) => (
              <li className={styles.liList} key={item.id}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.socialContacts}>
        <div className={styles.socialContacts}>
          {linksToSocialMedia.map((item, index) => (
            <a key={index}>
              <item.icon
                key={index}
                onClick={() => handleClickToWhatsapp(item.link)}
                className={styles.headerIcon}
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

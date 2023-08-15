import React from "react";
import { mySkills } from "../../const/mySkills";
import Image from "next/image";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import styles from "./section04.module.scss";
import { BiLogoReact } from "react-icons/bi";

const FourthSect = () => {
  return (
    <section>
      <span className={styles.sectFourhTitle}>
        <BiLogoReact className={styles.reactLogo} />
        <h2 className={styles.sectionTitle}>Skills</h2>
      </span>
      <div className={styles.fourthSectionContainer}>
        <Dropdown label="Front-end">
          {mySkills[0].frontEnd.map((skill) => (
            <DropdownItem key={skill.id}>
              <Image
                src={skill.icon}
                alt={skill.title}
                width={50}
                height={50}
              />
              <h3>{skill.title}</h3>
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
    </section>
  );
};

export default FourthSect;

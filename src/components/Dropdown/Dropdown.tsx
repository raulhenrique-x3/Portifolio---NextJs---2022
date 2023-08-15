import React, { useState } from "react";
import styles from "./dropdown.module.scss";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownProps {
  label: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={styles.dropdownContainer}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.dropdownLabelWrapper}>
        <p className={styles.dropdownLabel}>{label}</p>
        <button className={styles.dropdownButton}>
          <IoIosArrowDown />
        </button>
      </span>
      {isOpen ? (
        <div className={styles.childrenContainer}>{children}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;

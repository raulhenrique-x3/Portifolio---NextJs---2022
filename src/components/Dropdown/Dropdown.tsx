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
      className={
        isOpen ? styles.dropdownContainer : styles.dropdownContainerClosed
      }
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.dropdownLabelWrapper}>
        <p className={styles.dropdownLabel}>{label}</p>
        <button className={styles.dropdownButton}>
          <IoIosArrowDown />
        </button>
      </span>

      <div
        className={
          isOpen ? styles.childrenContainer : styles.childrenContainerClosed
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;

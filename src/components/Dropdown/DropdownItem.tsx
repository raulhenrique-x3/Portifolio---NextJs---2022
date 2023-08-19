import React from "react";
import styles from "./dropdown.module.scss";
interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children }) => {
  return <div className={styles.dropdownItemContainer}>{children}</div>;
};

export default DropdownItem;

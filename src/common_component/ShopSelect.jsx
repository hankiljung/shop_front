import React from "react";
import styles from "./ShopSelect.module.css";
const ShopSelect = ({ children, ...a }) => {
  return (
    <select className={styles.select} {...a}>
      {children}
    </select>
  );
};

export default ShopSelect;

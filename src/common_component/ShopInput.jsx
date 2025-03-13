import React from "react";
import styles from "./ShopInput.module.css";
const ShopInput = ({ type = "text", size = "", ...a }) => {
  return (
    <>
      <input
        type={type}
        className={
          size === "" ? styles.input : [styles.input, styles[size]].join(" ")
        }
        {...a}
      />
    </>
  );
};

export default ShopInput;

import React from "react";
import styles from "./ShopButton.module.css";

const ShopButton = ({ title = "버튼", size = "normal", ...r }) => {
  return (
    <>
      <button
        type="button"
        className={[styles.btn, styles[size]].join(" ")}
        {...r}
      >
        {title}
      </button>
    </>
  );
};

export default ShopButton;

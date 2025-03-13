import React from "react";
import styles from "./UserHeader.module.css";
import { Link } from "react-router-dom";
import Login from "./Login";

const UserHeader = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.login_div}>
        <span className={[styles.fontSmall, styles.gray].join(" ")}>|</span>
        <span className={[styles.fontSmall, styles.gray].join(" ")}>
          <Link to="login">로그인</Link>
        </span>
        <span className={[styles.fontSmall, styles.gray].join(" ")}>|</span>
        <span className={[styles.fontSmall, styles.gray].join(" ")}>
        <Link to="join">회원가입</Link>
        </span>
        <span className={[styles.fontSmall, styles.gray].join(" ")}>|</span>
      </div>
      <div className={styles.banner_div}>
        <img src="/book_banner.PNG" />
        <p>BOOK CAFE</p>
      </div>
      <div className={styles.menu_div}>
        <ul className={styles.menu_ul}>
          <li>전체</li>
          <li>IT/인터넷</li>
          <li>소설</li>
          <li>자기계발</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHeader;

import React, { useState } from "react";
import styles from "./Login.module.css";
import ShopInput from "../common_component/ShopInput";
import ShopButton from "../common_component/ShopButton";
import axios from "axios";
import { loginUser } from "./apis/userApi";
const Login = () => {
  /* axios.get 으로 여러 데이터를 전달하는 방법 */
  /* axios.get('url', {params:전달할데이터}) */

  /* 전달할 데이터는 객체형식으로 전달 */
  /* 1. RequestParam 어노테이션을 사용하여 받거나 */
  /* 2. DTO 객체로 데이터를 받으면 된다. */
  /* 리액트 2번 pdf참조 */

  const [loginD, setLogin] = useState({
    userId: "",
    userPw: "",
  });

  const changeData = (e) => {
    setLogin({
      ...loginD,
      [e.target.name]: e.target.value,
    });
  };
  console.log(loginD);

  const login = () => {
    loginUser(loginD).then((res) => {
      if (res.data) {
        console.log(res.data);
        alert("로그인 성공");
        //로그인에 성공하면 session storage에
        //로그인하는 회원의 아이디, 이름, 권한 정보를 저장한다.
        sessionStorage.setItem("userName", `${res.data.userName}`);
        sessionStorage.setItem("userId", `${res.data.userId}`);
        sessionStorage.setItem("userRoll", `${res.data.userRoll}`);
      } else {
        console.log("로그인 실패");
        alert("로그인 실패");
      }
    });
  };

  return (
    <>
      <div className={styles.container}>
        <h3>로그인</h3>
        <div className={styles.contentContainer}>
          <div>
            <p>아이디</p>
            <ShopInput size="wide" name="userId" onChange={changeData} />
          </div>
          <div>
            <p>비밀번호</p>
            <ShopInput
              type="password"
              size="wide"
              name="userPw"
              onChange={changeData}
            />
          </div>
          <div>
            <ShopButton title="로그인" onClick={login} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

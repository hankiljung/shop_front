import React, { useState } from "react";
import ShopInput from "../common_component/ShopInput";
import ShopButton from "../common_component/ShopButton";
import ShopSelect from "../common_component/ShopSelect";
import "./Join.css";
import { insertUser } from "./apis/userApi";

const Join = () => {
  const [user, setUser] = useState({
    userId: "",
    userPw: "",
    userName: "",
    email1: "",
    email2: "",
    userEmail: "",
    userTel: "",
    tel1: "",
    tel2: "",
    tel3: "",
  });
  const [eMsg, setEMsg] = useState({
    userId: "",
    userPw: "",
    userName: "",
    userTel: "",
  });

  const joinValidate = () => {
    let result = 0;

    setEMsg((state) => {
      return {
        userPw: "",
        userId: "",
      };
    });

    //4~16글자의 영문자로만 이루어진 정규식
    const regex_id = /^[a-zA-Z]{4,16}$/;
    if (!regex_id.test(user.userId)) {
      result = 1;

      setEMsg((state) => {
        return {
          ...state,
          userId: "잘못된 아이디입니다.",
        };
      });
    }

    //비밀번호 정규식
    //영어는 소문자나 대문자 + 숫자는 포함
    const regex_pw = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    if (!regex_pw.test(user.userPw)) {
      result = 1;

      setEMsg((state) => {
        return {
          ...state,
          userPw: "잘못된 비밀번호입니다.",
        };
      });
    }

    //연락처 정규식
    const regex_tel = /^(01[0-9]-\d{3,4}-\d{4}|0[2-9]-\d{3,4}-\d{4})$/;
    if (!regex_tel.test(user.userTel)) {
      result = 1;

      setEMsg((state) => {
        return {
          ...state,
          userTel: "잘못된 연락처입니다",
        };
      });
    }

    return result;
  };

  //회원가입 버튼 클릭 시 회원가입 진행
  const join = () => {
    //유효성 검사
    const result = joinValidate();

    if (result === 0) {
      insertUser(user)
        .then((res) => {
          alert("회원가입을 축하합니다.");
        })
        .catch();
    }
  };

  function onChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  user.userTel = [user.tel1, user.tel2, user.tel3].join("-");
  user.userEmail = [user.email1, user.email2].join("");

  return (
    <>
      <div className="joinMainContainer">
        {/* 오른쪽 인풋 */}
        <div className="joinRightCon">
          <div>회원아이디</div>
          <div>
            <ShopInput name="userId" onChange={onChange} />
          </div>
          <p className="redText">{eMsg.userId}</p>

          <div>회원암호</div>
          <div>
            <ShopInput type="password" name="userPw" onChange={onChange} />
          </div>
          <p className="redText">{eMsg.userPw}</p>

          <div>회원이름</div>
          <div>
            <ShopInput name="userName" onChange={onChange} />
          </div>
          <p className="redText">{eMsg.userName}</p>

          <div>email</div>
          <div>
            <ShopInput name="email1" value={user.email1} onChange={onChange} />
            <ShopSelect name="email2" onChange={onChange}>
              <option value="">선택하세요</option>
              <option value="@naver.com">@naver.com</option>
              <option value="@gmail.com">@gmail.com</option>
            </ShopSelect>
          </div>
          <div>휴대폰</div>
          <div>
            <ShopInput name="tel1" value={user.tel1} onChange={onChange} />
            <ShopInput name="tel2" value={user.tel2} onChange={onChange} />
            <ShopInput name="tel3" value={user.tel3} onChange={onChange} />
          </div>
          <p className="redText">{eMsg.userTel}</p>
          <ShopButton title="저장" onClick={join} />
        </div>
      </div>
    </>
  );
};

export default Join;

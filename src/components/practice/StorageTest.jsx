import React, { useEffect, useState } from "react";

/* sessionStorage */
/* localStorage */
/* 위의 두개는 웹 상에 데이터를 저장할 수 있는 공간이다. */

/* 이 두 곳에 저장된 데이터는 개발자 모드의 application 탭에서 확인 가능 */
/* 로컬스토리지와 세션스토리지는 새로고침해도 데이터가 둘다 살아있다  */
/* Localstorage는 웹브라우저가 종료되어도 데이터가 살아있다. */
/* Localstorage는 탭간에 데이터를 공유한다. */
/* SessionStorage는 웹브라우저가 종료되는 데이터가 사라진다. */
/* SessionStorage는 탭간에 데이터를 공유 안한다. */
const StorageTest = () => {
  useEffect(() => {
    localStorage.setItem("name", "hong");
    localStorage.setItem("age", "20");
    localStorage.setItem("name", "kim");
    localStorage.setItem("loginInfo", { id: "hong2", name: "hong" });
    /* 이 두 곳에는 객체 데이터는 저장이 안된다. 하지만 다른 방법으로 객체를 사용할 수 있다. */

    sessionStorage.setItem("addr", "울산시");
  }, []);

  return (
    <>
      <div>StorageTest</div>
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("name");
          sessionStorage.removeItem("addr");
        }}
      >
        데이터 삭제버튼
      </button>
      <button
        type="button"
        onClick={() => {
          const age = localStorage.getItem("age");
          const addr = sessionStorage.getItem("addr");
          alert(`나이는 ${age} 주소는 ${addr}`);
        }}
      >
        데이터 확인 버튼
      </button>
    </>
  );
};

export default StorageTest;

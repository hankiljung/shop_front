import React, { useEffect, useState } from "react";
import { useFetcher } from "react-router-dom";

/* 
동기방식과 비동기 방식의 차이

동기방식 : 코드의 결과를 기다린 후 다음 코드를 진행
비동기방식 : 코드의 결과를 기다리지 않고 다음 코드를 진행

동기방식으로 동작되는 대표 코드 : 
비동기방식으로 동작되는 대표 코드 : state변경함수, axios

state 변경함수는 모든 코드 해석 후 마지막에 일괄 처리한다.
때문에 state변경함수가 여러 줄 실행되도 한번만 재렌더링한다.

*/

const State변경함수 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log(1);
    console.log(2);
    console.log(3);

    setNum1(num1 + 1);
    setNum2(num1 + 1);
  }, []);

  console.log("리렌더2");
  return (
    <>
      <div>State변경함수흐름</div>
      <h3>{num1}</h3>
      <h3>{num2}</h3>
    </>
  );
};

export default State변경함수;

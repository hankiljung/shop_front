/* 해당 파일에 도서 카테고리와 도서 관련 axios 기능을 모아놓음 */

import axios from "axios";
import { useState } from "react";

/* 
카테고리 목록 조회
*/

//외부파일에서 선언한 변수 및 함수를 사용하기 위해서
//export와 import를 적절히 사용해야함

//export default는 파일당 하나만 사용 가능
//export default로 내보낸 데이터는 사용할때 이름을 변경해서 받을 수 있음.

//첫번째 방식 export default

//두번째 방식

/* 변수나 함수 앞에 export 키워드만 붙여서 내보내기 가능 */
/* 필요한 만큼 여러번 사용 가능하다 */
/* export로 내보내진 데이터는 사용 시 반드시 동일한 이름으로 사용해야한다. */
//export로 내보내진 데이터는 중괄호 안에 데이터 이름적음

/* 
----------------------------------- */
/* 
  ./ -> 현재위폴더에서 
  ../ ->상위 폴더에서  
*/

/* 카테고리 목록조회 */
export const getCateList = () => {
  const response = axios.get("/api/categories");
  return response;
};

/* 카테고리 등록 */
//매개변수 = 카테고리 객체
export const insertCate = (e) => {
  const response = axios.post("/api/categories", e);
  return response;
};

/* 도서 등록 */
//매개변수 = 도서데이터 객체
export const bookInsert = (a) => {
  const res = axios.post("/api/books", a);
  return res;
};

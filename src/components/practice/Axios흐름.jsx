import axios from "axios";
import React, { useEffect, useState } from "react";

/* axios는 then안에 적어야 실행된다. */

const Axios흐름 = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("통신 전");
    axios.get("/api/test/1").then((res) => {
      console.log("통신성공");
      setNum(res.data);
      console.log("통신 후");
    });
  }, []);

  return (
    <>
      <div>Axios흐름</div>
      <div>{num}</div>
    </>
  );
};

export default Axios흐름;

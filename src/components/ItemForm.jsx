import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { getCateList, bookInsert } from "./apis/bookApi";
import ShopButton from "../common_component/ShopButton";
import ShopInput from "../common_component/ShopInput";

// 상품 등록 컴포넌트

const ItemForm = () => {
  const [book, setBook] = useState({
    /* 도서 등록 데이터 */ cateCode: "",
    bookName: "",
    bookPrice: "",
    publisher: "",
  });
  const [trigger, setTrigger] = useState(0);

  const [cate, setCate] = useState([]); /* 도서 카테고리 */

  function sendData() {
    /* 저장시 axios post 호출 함수 */
    if (book.cateCode === "") {
      alert("카테고리는 필수입니다.");
      return;
    }

    if (book.bookName === "") {
      alert("책 제목은 필수입니다.");
      return;
    }

    if (book.bookPrice === "") {
      alert("책 가격은 필수입니다.");
      return;
    }

    if (book.publisher === "") {
      alert("출판사는 필수입니다.");
      return;
    }

    bookInsert(book)
      .then((res) => {
        console.log("전송완료");
        alert("책 등록이 완료되었습니다.");

        setTrigger(+1);
      })
      .catch();
  }

  const onChange = (e) => {
    /* 책 정보 담을 함수 */

    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  console.log(book);

  useEffect(() => {
    getCateList()
      .then((res) => {
        setCate(res.data);
        setBook({
          cateCode: "",
          bookName: "",
          bookPrice: "",
          publisher: "",
        });
      })
      .catch((error) => console.log("error accur"));
  }, [trigger]);

  return (
    <>
      <div className="item-form-container">
        <div>
          <h3>도서 등록</h3>
        </div>
        <div>
          <div>
            {/* 카테고리 map으로 받아올것 */}
            <div>
              <p>카테고리</p>
              <select
                name="cateCode"
                id=""
                value={book.cateCode}
                onChange={onChange}
              >
                <option value="">선택하세요</option>
                {cate.map((cate, i) => {
                  return (
                    <option value={cate.cateCode} key={i}>
                      {cate.cateName}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* 도서명 */}
            <div>
              <p>도서명</p>
              <ShopInput type="text" name="bookName" onChange={onChange} />
            </div>
          </div>

          {/* 출판사 */}
          <div>
            <p>출판사</p>
            <ShopInput type="text" name="publisher" onChange={onChange} />
          </div>

          {/* 도서가격 */}
          <div>
            <p>도서 가격</p>
            <ShopInput
              type="text"
              name="bookPrice"
              pattern="[0-9]+"
              onChange={onChange}
            />
          </div>

          {/* 도서 소개 */}
          <div>
            <p>도서 소개</p>
            <textarea name="bookIntro" onChange={onChange}></textarea>
          </div>
        </div>

        <div>
          <ShopButton title="저장" click={sendData} size="small" />
          <ShopButton title="취소" size="small" />
        </div>
      </div>
    </>
  );
};

export default ItemForm;

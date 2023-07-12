import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

export default function Product({ products }) {
  const [selectedOption, setSelectedOption] = useState("");

  // id를 구조분해할당해서 id별로 상세상품을 나오게 하기위해서
  const { id } = useParams();

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* 상세상품 필터로 id값이 같은것만거르고 map함수로 뿌려준다. */}
          {products
            .filter((item) => id == item.id)
            .map((pd) => {
              return (
                <Fragment key={pd.id}>
                  <div
                    style={{
                      width: "200px",
                      height: "240px",
                      backgroundColor: "#068FFF",
                    }}
                  >
                    {pd.name}
                  </div>
                  <div>
                    <h3>가격 :{pd.price}</h3>
                    <h3>좋아요 :{pd.likeCount}</h3>
                    <h3>구매옵션</h3>

                    <select
                      style={{
                        width: "100px",
                      }}
                      onChange={(e) => {
                        setSelectedOption(e.target.value);
                      }}
                      value={selectedOption}
                    >
                      {/* 구매옵션을 원하는 수량만큼 맞추기위해서 */}
                      <option>선택하세요</option>
                      {pd.options.map((option) => {
                        if (option > 3) {
                          option = option.slice(0, 3);
                        }
                        return <option key={option}>{option}</option>;
                      })}
                    </select>
                    <p>구매옵션 :{selectedOption}</p>
                  </div>
                </Fragment>
              );
            })}
        </div>
      </div>
    </>
  );
}

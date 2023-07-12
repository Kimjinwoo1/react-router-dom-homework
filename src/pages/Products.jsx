import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Products({ products }) {
  // 필터링해서 사용하기 위해
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <button
              onClick={() => {
                setSearchParams({
                  sort: "price",
                });
              }}
            >
              가격순 정렬
            </button>
            {products.map((item) => {
              return (
                <div
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                  }}
                  key={item.id}
                >
                  <Link to={`${item.id}`}>
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

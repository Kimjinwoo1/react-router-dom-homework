import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  // 로그인 회원가입 을 누를시 경로 설정을 위해서
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
          cursor: "pointer",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          로고
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <div
            onClick={() => {
              navigate("/products/login");
            }}
          >
            로그인
          </div>
          <div
            onClick={() => {
              navigate("/products/sinup");
            }}
          >
            회원가입
          </div>
        </div>
      </header>
      {/* 헤더와 푸터사이에 넣기위해서 main products product */}
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}

export default Layout;

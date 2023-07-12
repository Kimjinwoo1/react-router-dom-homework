import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Sinin from "./pages/Sinin";
import Sinup from "./pages/Sinup";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "멋진 바지",
      price: "20000",
      section: "선택하세요",
      likeCount: 100,
      options: ["28", "30", "32"],
    },
    {
      id: 1,
      name: "멋진 셔츠",
      price: "10000",
      section: "",
      likeCount: 200,
      options: ["small", "medium", "large"],
    },
    {
      id: 2,
      name: "멋진 신발",
      price: "30000",
      section: "",
      likeCount: 300,
      options: ["230", "240", "250", "260", "270"],
    },
  ]);

  return (
    // 컴포넌트들을 관리하기위해
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main products={products} />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:id" element={<Product products={products} />} />
        {/* 로그인 ,회원가입을 위한 라우트 */}
        <Route path="/products/login" element={<Sinin />} />
        <Route path="/products/sinup" element={<Sinup />} />
      </Route>
      {/* 없는페이지 만들기위해 */}
      <Route
        path="/*"
        element={
          <>
            <div>없는 페이지 입니다.</div>
            <Link to="/">홈으로이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;

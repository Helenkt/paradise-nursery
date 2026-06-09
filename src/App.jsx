import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function LandingPage({ companyName, handleGetStarted }) {
  return (
    <section className="landing-page paradise-nursery-landing background-image">
      <div className="landing-content">
        <p className="eyebrow">Indoor plant shop</p>
        <h1>{companyName}</h1>
        <p>
          Bring calm, texture, and clean air into your home with thoughtfully selected
          houseplants for every room and experience level.
        </p>
        <button className="primary-button get-started-button" type="button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const companyName = "Paradise Nursery";
  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            showProductList ? (
              <ProductList />
            ) : (
              <LandingPage companyName={companyName} handleGetStarted={handleGetStarted} />
            )
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </main>
  );
}

export default App;

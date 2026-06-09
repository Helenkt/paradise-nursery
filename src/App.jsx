import { Route, Routes, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";

function LandingPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/plants");
  };

  return (
    <section className="landing-page paradise-nursery-landing background-image">
      <div className="landing-content">
        <p className="eyebrow">Indoor plant shop</p>
        <h1>Paradise Nursery</h1>
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
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

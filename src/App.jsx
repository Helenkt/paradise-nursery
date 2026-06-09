import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import { selectCartCount } from "./CartSlice.jsx";

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <Link className="brand" to="/">
        Paradise Nursery
      </Link>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label={`Cart with ${cartCount} items`}>
          <span className="cart-icon" aria-hidden="true">Cart</span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function LandingPage() {
  return (
    <section className="landing-page">
      <div className="landing-content">
        <p className="eyebrow">Indoor plant shop</p>
        <h1>Paradise Nursery</h1>
        <p>
          Bring calm, texture, and clean air into your home with thoughtfully selected
          houseplants for every room and experience level.
        </p>
        <Link className="primary-button" to="/plants">
          Get Started
        </Link>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
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

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addItem, selectCartCount, selectCartItems } from "./CartSlice.jsx";
import plant1 from "./assets/plant-1.svg";
import plant2 from "./assets/plant-2.svg";
import plant3 from "./assets/plant-3.svg";
import plant4 from "./assets/plant-4.svg";
import plant5 from "./assets/plant-5.svg";
import plant6 from "./assets/plant-6.svg";

const plantsByCategory = [
  {
    category: "Low Maintenance",
    plants: [
      { id: "snake-plant", name: "Snake Plant", price: 18, cost: 18, image: plant1, thumbnail: plant1 },
      { id: "zz-plant", name: "ZZ Plant", price: 22, cost: 22, image: plant2, thumbnail: plant2 },
      { id: "pothos", name: "Golden Pothos", price: 16, cost: 16, image: plant3, thumbnail: plant3 },
      { id: "rubber-plant", name: "Rubber Plant", price: 28, cost: 28, image: plant4, thumbnail: plant4 },
      { id: "jade-plant", name: "Jade Plant", price: 19, cost: 19, image: plant5, thumbnail: plant5 },
      { id: "cast-iron", name: "Cast Iron Plant", price: 25, cost: 25, image: plant6, thumbnail: plant6 },
    ],
  },
  {
    category: "Air Purifying",
    plants: [
      { id: "peace-lily", name: "Peace Lily", price: 24, cost: 24, image: plant2, thumbnail: plant2 },
      { id: "areca-palm", name: "Areca Palm", price: 34, cost: 34, image: plant3, thumbnail: plant3 },
      { id: "boston-fern", name: "Boston Fern", price: 20, cost: 20, image: plant4, thumbnail: plant4 },
      { id: "aloe-vera", name: "Aloe Vera", price: 15, cost: 15, image: plant5, thumbnail: plant5 },
      { id: "spider-plant", name: "Spider Plant", price: 17, cost: 17, image: plant6, thumbnail: plant6 },
      { id: "english-ivy", name: "English Ivy", price: 21, cost: 21, image: plant1, thumbnail: plant1 },
    ],
  },
  {
    category: "Statement Plants",
    plants: [
      { id: "monstera", name: "Monstera Deliciosa", price: 38, cost: 38, image: plant3, thumbnail: plant3 },
      { id: "fiddle-leaf", name: "Fiddle Leaf Fig", price: 45, cost: 45, image: plant4, thumbnail: plant4 },
      { id: "bird-paradise", name: "Bird of Paradise", price: 48, cost: 48, image: plant5, thumbnail: plant5 },
      { id: "calathea", name: "Calathea Orbifolia", price: 32, cost: 32, image: plant6, thumbnail: plant6 },
      { id: "philodendron", name: "Philodendron Brasil", price: 27, cost: 27, image: plant1, thumbnail: plant1 },
      { id: "majesty-palm", name: "Majesty Palm", price: 40, cost: 40, image: plant2, thumbnail: plant2 },
    ],
  },
];

function ProductListNavbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar page-navbar">
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

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedPlantIds = new Set(cartItems.map((item) => item.id));

  return (
    <>
      <ProductListNavbar />
      <section className="page-section">
        <div className="section-heading">
          <p className="eyebrow">Shop houseplants</p>
          <h1>Plant Collection</h1>
        </div>

        {plantsByCategory.map((group) => (
          <section className="plant-category" key={group.category}>
            <h2>{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const isAdded = addedPlantIds.has(plant.id);
                return (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.thumbnail} alt={`${plant.name} thumbnail`} />
                    <div>
                      <h3>{plant.name}</h3>
                      <p className="plant-price">${plant.cost.toFixed(2)}</p>
                    </div>
                    <button
                      type="button"
                      className="add-cart-button"
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}

export default ProductList;

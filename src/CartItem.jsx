import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  updateQuantity,
} from "./CartSlice.jsx";

function CartNavbar() {
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

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  return (
    <>
      <CartNavbar />
      <section className="page-section cart-page">
        <div className="section-heading">
          <p className="eyebrow">Shopping cart</p>
          <h1>Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link className="primary-button" to="/plants">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <span>Total Cart Amount</span>
              <strong>${totalAmount.toFixed(2)}</strong>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={`${item.name} thumbnail`} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Total Cost: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </article>
              ))}
            </div>

            <div className="cart-actions">
              <button type="button" onClick={() => alert("Coming Soon")}>
                Checkout
              </button>
              <Link className="secondary-button" to="/plants">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default CartItem;

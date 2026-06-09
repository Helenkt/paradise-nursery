import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "./CartSlice.jsx";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  return (
    <section className="page-section cart-page">
      <div className="section-heading">
        <p className="eyebrow">Shopping cart</p>
        <h1>Your Plants</h1>
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
                  <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => dispatch(increaseQuantity(item.id))}>
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
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
  );
}

export default CartItem;

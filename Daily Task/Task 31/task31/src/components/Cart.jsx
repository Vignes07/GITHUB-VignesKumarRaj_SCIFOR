import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity } from "../store/store";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in the cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <p>
              {item.title} - ${item.price} x {item.quantity}
            </p>
            <div className="cart-buttons">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;

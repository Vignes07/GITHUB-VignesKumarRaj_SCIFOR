import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrement, removeFromCart } from "../store/store";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                <div className="quantity-control">
                  <button onClick={() => dispatch(decrement(item.id))}>
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))}>+</button>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </>
      )}
    </div>
  );
};

export default Cart;

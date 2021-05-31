import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          alt=" "
          src="https://disruptiveadvertising.com/static/c653234a6e43c8c1c2c33cb2ac5e4477/7f757/Screen-Shot-2018-10-29-at-11.50.03-AM.png"
        />
        <div>
          <h3>Hello, {user.email}</h3>
          <h2 className="checkout_title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          {/* checkout Poduct */}
          {/* checkout Poduct */}
          {/* checkout Poduct */}
          {/* checkout Poduct */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

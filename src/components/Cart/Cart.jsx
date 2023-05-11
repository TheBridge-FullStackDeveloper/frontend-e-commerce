import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Empty, notification } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const { createOrder } = useContext(OrdersContext);

  const orderFinish = () => {
    createOrder(cart);
    setTimeout(() => {
      clearCart();
    }, 1000);
    notification.success({
      message: "Order created",
    });
  };

  if (cart.length < 1) {
    return <Empty description={<span>No products</span>} />;
  }
  return (
    <div>
      {cart.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price} €</p>
          </div>
        );
      })}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => orderFinish()}>Create order</button>
    </div>
  );
};

export default Cart;

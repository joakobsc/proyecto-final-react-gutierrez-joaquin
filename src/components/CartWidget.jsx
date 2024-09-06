import cart from "../assets/cartwidget.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <Link to="/cart">
      <img src={cart} alt="carrito" height={30} />
      <span>{quantity}</span>
    </Link>
  );
};

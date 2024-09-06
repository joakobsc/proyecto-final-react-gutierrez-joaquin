import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {
  const { items, reset } = useContext(CartContext);

  return (
    <>
      <button onClick={reset}>Vaciar</button>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt="" style={{ width: "20%" }} />
            <p style={{ fontSize: "50px" }}>{item.quantity}</p>
          </div>
        );
      })}
    </>
  );
};

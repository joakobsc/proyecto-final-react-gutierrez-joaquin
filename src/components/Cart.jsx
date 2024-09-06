import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";

export const Cart = () => {
  const { items, reset, removeItem } = useContext(CartContext);

  return (
    <Container className="mt-4">
      <button onClick={reset}>Vaciar</button>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.imageId} alt="" style={{ width: "20%" }} />
            <p style={{ fontSize: "3vh" }}>x{item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>
              ❌Sacar del Carrito
            </button>
          </div>
        );
      })}
    </Container>
  );
};

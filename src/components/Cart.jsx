import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Container from "react-bootstrap/Container";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const initialOrder = {
  name: "",
  email: "",
  phone: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialOrder);
  const { items, reset, removeItem } = useContext(CartContext);
  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);
  const navigate = useNavigate();
  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        reset();
        setBuyer(initialOrder);
        navigate("/");
      }
    });
  };
  const handleChange = (e) => {
    setBuyer((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
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
      <form>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            value={buyer.name}
            onChange={handleChange}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="">Teléfono</label>
          <input
            value={buyer.phone}
            onChange={handleChange}
            type="text"
            name="phone"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            value={buyer.email}
            onChange={handleChange}
            type="text"
            name="email"
          />
        </div>
        <button type="button" onClick={sendOrder}>
          Comprar
        </button>
      </form>
      <p>Total: {total}</p>
    </Container>
  );
};

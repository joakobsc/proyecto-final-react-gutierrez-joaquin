import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../data/inventario.json";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    new Promise((res) => setTimeout(() => res(data), 2000))
      .then((res) => {
        const foundItem = res.find((i) => i.id === Number(id));
        setItem(foundItem);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "Loading...";

  return (
    <Container className="mt-4">
      <h1>{item.modelo}</h1>
      <h2 className="center">{item.category}</h2>
      <p className="center">{item.description}</p>
      <img
        src={item.pictureUrl}
        alt={item.modelo}
        style={{ width: "100%", maxWidth: "800px" }}
        className="mx-auto d-block"
      />
      <br />
      <b>${item.precio}</b>
      <button onClick={() => addItem(item)}>Comprar</button>
    </Container>
  );
};

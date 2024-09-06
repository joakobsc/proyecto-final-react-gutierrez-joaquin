import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc, snapshotEqual } from "firebase/firestore";
import { ItemCount } from "./ItemCount";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "Items", id);
    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);
  const onAdd = (quantity) => addItem({ ...item, quantity });
  if (loading) return "Loading...";

  return (
    <Container className="mt-4">
      <h1>{item.title}</h1>
      <h2 className="center">{item.categoryId}</h2>
      <p className="center">{item.description}</p>
      <img
        src={item.imageId}
        alt={item.title}
        style={{ width: "100%", maxWidth: "800px" }}
        className="mx-auto d-block"
      />
      <br />
      <b>${item.price}</b>
      <br />
      <b>Stock {item.stock}</b>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </Container>
  );
};

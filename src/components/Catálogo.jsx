import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";
/* import data from "../data/inventario.json"; */

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const refCollection = !id
      ? collection(db, "Items")
      : query(collection(db, "Items"), where("categoryId", "==", id));
    getDocs(refCollection)
      .then((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <Row>
        {items.map((item) => (
          <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
            <Card
              className="card-custom"
              style={{ width: "90%", minHeight: "100%" }}
            >
              <Card.Img variant="top" src={item.imageId} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Clase: {item.categoryId}</Card.Text>
                <Card.Text>Precio: ${item.price}</Card.Text>
                <Link to={`/item/${item.id}`}>
                  <Button variant="primary">Ver</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

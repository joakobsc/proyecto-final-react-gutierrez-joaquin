import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import data from "../data/inventario.json";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    new Promise((res, rej) => {
      setTimeout(() => res(data), 2000);
    })
      .then((response) => {
        if (!id) {
          setItems(response);
        } else {
          const filtered = response.filter((i) => i.category === id);
          setItems(filtered);
        }
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
              <Card.Img variant="top" src={item.pictureUrl} />
              <Card.Body>
                <Card.Title>{item.modelo}</Card.Title>
                <Card.Text>Clase: {item.category}</Card.Text>
                <Card.Text>Precio: ${item.precio}</Card.Text>
                <Link to={`/item/${item.id}`}>
                  <Button variant="primary">Comprar</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

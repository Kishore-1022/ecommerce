import React from 'react'
import { products } from './Product';
import{Navbar,Container,Card,Row,Col,Nav} from 'react-bootstrap'

const List = () => {

   return ( 
    <>
    <Navbar bg="secondary" expand="lg" className="d-flex justify-content-center">
      <h1 className="text-light tes">The Generics</h1>
    </Navbar>
    <div className="text-center font-italic fw-bolder fs-2">iProducts</div>
    <Container>
      <Row className="mx-2 mx-md-4 mx-lg-5">
        {products.map((item) => (
          <Col md={6} lg={4} xl={3} key={item.id}>
            <Card className="m-2">
              <Nav.Link href={`/list/${item.id}`} className="text-decoration-none text-dark">
                <Card.Title className="text-center fw-bolder">{item.name}</Card.Title>
                <Card.Img variant="top" src={item.img1} className="img-fluid" alt={item.name} />
                <Card.Text className="fw-bolder">${item.price}</Card.Text>
              </Nav.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </>
);
};


export default List
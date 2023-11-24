import React from 'react'
import Cart from './Cart';
import { products } from './Product';


import{Navbar,Button,Container,Card,Row,Col,Nav} from 'react-bootstrap'

const List = (props) => {

   return (
     
    <>
    
        <Navbar bg='secondary' expand='lg'  className='d-flex justify-content-center'>
            <h1 className='text-light tes'>The Generics</h1>          
        </Navbar>
        <div className='text-center font-italic fw-bolder fs-2'>iProducts</div>
        <Container  >
            <Row className='mx-6'>
            {products.map(item=>(
                <Col>
                    <Card style={{ width: '14rem'}} className='m-2' >
                        <Nav.Link href={`/list/${item.id}`}>
                            <Card.Title className='text-center fw-bolder'>{item.name}</Card.Title>
                            <Card.Img variant="top" src={item.img1} width='350px' height='250px' /><br/>
                           
                            <Card.Text className='fw-bolder'>${item.price}</Card.Text>
                        </Nav.Link>     
                            <Button variant="primary" onClick={()=>props.addHandler(item.id)}>ADD TO CART</Button>                       
                    </Card>               
                </Col>  
            ))}
            </Row>
        </Container>
        <Cart show={props.show} handleClose={props.handleClose}  remover={props.remover} cart={props.cart}/>
    </>
   
   )
 }
  


export default List
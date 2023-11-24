import React from 'react'
import { Navbar,Container,Nav, Badge } from 'react-bootstrap'

import {Button} from 'react-bootstrap'



const Header = (props) => {
 
  
  return (
    <>
    <Navbar bg="dark" expand="sm" className='col find'>
        <Container className='d-flex text-light '>
            <div className='d-flex w-75 justify-content-between '>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/list">STORE</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          
            </div>
            <Button className='d-flex fw-bolder' onClick={props.handleShow}>Cart <Badge className='ms-2 fw-bolder '  bg="danger"> {props.cart.length}</Badge></Button> 
        </Container>
     </Navbar>
    
    </>
  )
}

export default Header
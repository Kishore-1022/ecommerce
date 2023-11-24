import React from 'react'
import { Offcanvas,Button } from 'react-bootstrap';

 const Cart = (props) => {
  return (
    <>
     <Offcanvas show={props.show} onHide={props.handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='fs-3 fw-bolder m-auto'>CART ITEMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='w-100 '>
           <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
              {props.cart.map((i,index)=>(
                <tr >   
                  <td className='d-flex '>
                    <div>{index+1}</div>
                    <img src={i.img1} alt="" width='50px' height='50px' />
                    <div>{i.name}</div>
                  </td>
                  <td >{i.price}</td>
                  <td className='d-flex  m-1'>
                    <div>{i.quantity}</div>
                    <Button variant='danger' onClick={()=>props.remover(i.id)}>Remove</Button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>  
         
            
          <div className='w-100 text-end mt-1 fw-bolder'>Total: 0</div>
          <Button className='mt-5 w-100'>Purchase</Button>
         
        </Offcanvas.Body>
       
      </Offcanvas>
    </>
  )
}
export default Cart;

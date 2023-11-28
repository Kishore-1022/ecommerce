import React, { useEffect, useState } from 'react'
import { Offcanvas,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

 const Cart = (props) => {
  const [cartItems,setCartItems]=useState([]);
  const [total,setTotal]=useState(0)
  const navigate=useNavigate()
 
  const [cart,setCart]=useState(false)
 
  const email=localStorage.getItem('email')
  const updated=email.replace('@gmail.com', '');

  useEffect(()=>{
    getHandlder()
    setCart(true)
  },[])

  const handleClose=()=>{
    setCart(false)
    navigate('/list')
  }

  
  const getHandlder=async()=>{
    try{
      const res= await fetch(`https://crudcrud.com/api/4d8d1910515042cebdc33245837ceee6/${updated}`)
      const data= await res.json()
  
      setCartItems(data)  ;
      const count= data.reduce((acc,item)=>acc+ item.quantity*item.price,0);
      setTotal(count)
     
     }catch(err){
       console.log(err.message)
     }
  }
  const remover=async(id)=>{
  
    try{
      const res= await fetch(`https://crudcrud.com/api/4d8d1910515042cebdc33245837ceee6/${updated}/${id}`,{
        method: "DELETE",
      })
      setCartItems((prev) => prev.filter((item)=>item._id !== id))
      const count = cartItems.reduce((acc,item)=> acc + item.quantity*item.price,0);
      setTotal(count)
      props.getHandlder()
      }catch(err){
        console.log(err.message)
      }
  }

  return (
    <>
     <Offcanvas  show={cart} onHide={handleClose} placement="end" >
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
              {cartItems.map((i,index)=>(
                <tr >   
                  <td className='d-flex '>
                    <div>{index+1}</div>
                    <img src={i.img1} alt="" width='50px' height='50px' />
                    <div>{i.name}</div>
                  </td>
                  <td >{i.price}</td>
                  <td className='d-flex  m-1'>
                    <div>{i.quantity}</div>
                    <Button variant='danger' onClick={()=>remover(i._id)}>Remove</Button>
                  </td>
                </tr>
                 ))}
              </tbody>
            </table>     
          <div className='w-100 text-end mt-1 fw-bolder'>Total:{total} </div>
          <Button className='mt-5 w-100'>Purchase</Button>      
        </Offcanvas.Body>    
      </Offcanvas>
    </>
  )
}
export default Cart;

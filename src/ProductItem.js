import React , { useState }from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Product'
import { Badge, Button, Carousel } from 'react-bootstrap'




const ProductItem = (props) => {
    const{id}=useParams() 
    const items= products.find(i=>(i.id).toString()===id)
    const email=localStorage.getItem('email')
    const updated=email.replace('@gmail.com', '');
    const [cartBump, setCartBump] = useState(false);

    const fetchHandler=async()=>{ 
      setCartBump(true); 
      try{
      const res= await fetch(`https://crudcrud.com/api/9375afc638b44245a7f210cd4244b7cb/${updated}`,{
        method: "POST",
        body: JSON.stringify(items),
        headers:{'Content-Type':'application/json'}
      })
      props.getHandlder()
      
      }catch(err){
        console.log(err.message)
      }
}


  return (
    <>
    <div className=' mx-2'>
      <div className='product-container'>
        <Carousel className='carousel mr-2' >
          <Carousel.Item> <img src={items.img1} alt="" height='400px' className=' d-block w-100' /></Carousel.Item>
          <Carousel.Item><img src={items.img2} alt="" height='400px' className='d-block w-100 '/> </Carousel.Item>
          <Carousel.Item><img src={items.img3} alt="" height='400px' className='d-block w-100 '/></Carousel.Item>
        </Carousel>
        <div className='button-container'>
          <Button  variant="outline-success">Buy Now</Button>
          <Button  variant="outline-warning"  className={cartBump ? 'bump-animation' : ''} onClick={fetchHandler}>Add to Cart</Button>
        </div>
      </div>
      
      <div className='mx-auto product-details'>
          <h1>{items.name}</h1>
          <p className='fw-bolder'>Rs.{items.price}/-</p>
          <Badge>{items.rating}⭐</Badge>
          <div className='offers'>
            <h3>Available offers</h3>
            <p>🏷️ Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C</p>
            <p>🏷️ Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1000 on orders of ₹5000 and aboveT&C</p>
            <p>🏷️ Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,000 on orders of ₹5,000 and aboveT&C</p>
            <p>🏷️ Special PriceGet extra ₹8901 off (price inclusive of cashback/coupon)T&C</p>
          </div>
          <div className='reviews'>
            <h4>Reviews</h4>
            <div className='d-flex'><Badge >5⭐</Badge><h6>Terrific</h6></div> 
            <p>I've reviewed and tested iPhones for years, but Apple's new iPhone 15 Pro Max is the first time I've ever been this enamored.</p>
            <div className='d-flex'><Badge >4.3⭐</Badge><h6>Super !</h6></div> 
            <p>Excellent . Just loved it .😍.</p>
            <div className='d-flex'><Badge >4.3⭐</Badge><h6>Excellent...</h6></div> 
            <p>The phone is just 10/10. Amazing cameras, especially the 5x telephoto. Battery life goes over a day. The bezels look thin as well. Better to use with a case to prevent discolouration of the titanium body.</p>
          </div>
      </div>  
    </div>
      
     
    </>
  )
}

export default ProductItem
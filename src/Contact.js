import React from 'react'
import { Form,Button } from 'react-bootstrap'
import { useRef } from 'react'

const Contact = () => {
    const name=useRef()
    const email=useRef()
    const phone=useRef()
    
    const file=async(updatedForm)=>{
        const response=await fetch('https://form-issue-23647-default-rtdb.asia-southeast1.firebasedatabase.app/file.json',{
            method:'POST',
            body:JSON.stringify(updatedForm),
            headers:{"Content-Type":'application/json' }
        })
        const data= await response.json()
       

    }

    const formHandler=(e)=>{
        e.preventDefault()
        const formList={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
        }
        file(formList)
        name.current.value=''
        email.current.value=''
        phone.current.value=''
        

    }
  return (
    <>
     <Form className="mx-4 my-2" onSubmit={formHandler}>
        <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" ref={name}  />
        </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"  ref={email} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone No.</Form.Label>
        <Form.Control type="number" placeholder="+91"  ref={phone} />
      </Form.Group>
      <div className='text-end'><Button size='lg' type='submit'> Submit</Button></div>
      
     
    </Form>
    </>
  )
}

export default Contact
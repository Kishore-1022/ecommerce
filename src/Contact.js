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
        e.target.reset();
    };
  return (
    <div className='contact-container'>
    <Form onSubmit={formHandler}>
      <Form.Group className='form-group'>
        <Form.Label className='form-label'>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter your name' ref={name} />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label className='form-label'>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter your email' ref={email} />
      </Form.Group>
      <Form.Group className='form-group'>
        <Form.Label className='form-label'>Phone No.</Form.Label>
        <Form.Control type='number' placeholder='Enter your phone number' ref={phone} />
      </Form.Group>
      <div className='text-end'>
        <Button className='submit-button' size='lg' type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  </div>
);
};

export default Contact
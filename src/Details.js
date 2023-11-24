import React, { useRef } from 'react'
import { Button,Form } from 'react-bootstrap'
const Details = (props) => {
    const title=useRef()
    const releaseDate=useRef()
    const openText=useRef()

    const submitHandler=(e)=>{
        e.preventDefault();
        const movie={
            title:title.current.value,
            releaseDate:releaseDate.current.value,
            openText:openText.current.value
        }
        props.movieHandler(movie)
        
        title.current.value=''
        releaseDate.current.value=''
        openText.current.value ='' 
    }
  return (
    <>
    <Form className='px-4' onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-bolder'>Title</Form.Label>
            <Form.Control type="text"  ref={title} />   
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='fw-bolder'>Opening Text</Form.Label>
            <Form.Control as="textarea" rows={3} ref={openText}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fw-bolder'>Release Date</Form.Label>
            <Form.Control type="text" ref={releaseDate} />
        </Form.Group>
        <div  className='text-center'>
          <Button variant="primary" type="submit" className='px-5'>Submit</Button>
        </div>    
    </Form>
    </>
  )
}

export default Details
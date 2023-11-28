import React, { useCallback, useEffect, useState } from 'react'
import Details from './Details';
import { Button, Navbar,Container,ListGroup,Spinner,CloseButton } from 'react-bootstrap'

const Home = () => {
    const [list,setList]=useState([])
    const [err,setErr]=useState()

      const  fetchHandler=useCallback(async()=>{ 
            try{
                const response= await fetch('https://react-works-d3482-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json')
                const data= await response.json()
                const loadedMovies=[];

                for (let i in data){
                  loadedMovies.push({
                    id:i,
                    title:data[i].title,
                    releaseDate:data[i].releaseDate,
                    openText:data[i].openText
                  })
                }
                setList(loadedMovies)
            }catch(err){
                setErr('something went wrong')
            }  
        },[])
        useEffect(()=>{
            fetchHandler()
        },[list])
        
    const movieHandler=async(movie)=>{
      
       const response=await fetch('https://react-works-d3482-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',{
        method:'POST',
        body:JSON.stringify(movie),
        headers:{
           "Content-Type":'application/json'
        }
       })     
    }
    const removeHandler=async(id)=>{
      const response=await fetch(`https://react-works-d3482-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,{method:'DELETE'})

    }

   
  return (
    <>
      <Navbar bg='secondary' expand='lg' className=''>
        <Container className='target'>
           <h1 className='text-light tes'>The Generics</h1>
           <Button variant="outline-primary " size='lg'>Get our Latest Album</Button><br />
           <Button variant="outline-primary" size='lg' className='round'>►</Button>
        </Container>    
      </Navbar>
      <h1 className='text-center mt-1'>MOVIES</h1>

      <Details movieHandler={movieHandler}/>
     
      <ListGroup className='w-75 m-auto mt-3'>
        {list.length>0 &&list.map(i=>(
         <ListGroup.Item key={i.episode_id} className='d-flex justify-content-between'>
            <span>{i.releaseDate}</span>
            <span>{i.title}</span>
            <Button>Buy Tickets</Button>
            <CloseButton onClick={()=>removeHandler(i.id)} />

         </ListGroup.Item> 
        ))} 
        {err?<p className='text-center fs-5 fw-bolder'>{err}</p>:!err&&list.length==0?<p className='text-center fs-5 fw-bolder'>Loading<Spinner animation="border" variant="danger"  size="sm"/></p>:''}
      </ListGroup>
    </>
  )  
}

export default Home
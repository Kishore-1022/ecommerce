
import { About } from "./About";
import { Route, Routes } from "react-router";
import Header from "./Header";
import Home from "./Home";
import List from "./List";
import Contact from "./Contact";
import ProductItem from "./ProductItem";
import { products } from "./Product";
import { useState ,useContext} from "react";

import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";



function App() {
  const authCtx=useContext(AuthContext)
  const [show, setShow] = useState(false);
  const [cart,setCart]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const addHandler = (id) => {
      const item = products.find((item) => item.id === id);
      const existingItem = cart.findIndex((i) => i.id === id);
      if (existingItem!==-1) {
        setCart(prev=>{
          let avail=[...prev]
          avail[existingItem]={...item,quantity:item.quantity+1}
          return avail
          
        })
      } else {
        setCart((prev) => [...prev, item]);
      }
    };
    const remover=(id)=>{
    
      const decrease=cart.map(i=>{
          if (i.id===id && i.quantity>1){
              return {...i,quantity:i.quantity-1}
          }else if(i.id===id && i.quantity===1){
              return null
          }else{
              return i
          } 
      })
      const updatedDecrease=decrease.filter(i=>i!==null) 
      setCart(updatedDecrease)

    }
  return (
    <> 
     <Layout>
    
     {authCtx.isLoggedIn &&<Header cart={cart} handleShow={handleShow}/>}
      <Routes>
        <Route path="/" element={
          <>
            {authCtx.isLoggedIn &&<Home />}
            <HomePage/>
          </>}/>
        <Route>
            <Route path="/list"element={
            <List
              addHandler={addHandler}
              show={show}
              cart={cart}
              handleClose={handleClose}
              remover={remover}
              handleShow={handleShow}
            />}/>
            <Route path='/list/:id' element={<ProductItem/>}/>
        </Route>
        <Route path='/profile' element={
          <>
           {authCtx.isLoggedIn && <UserProfile />}
           {!authCtx.isLoggedIn &&  <AuthPage/>}
          </>
        }/>
         {!authCtx.isLoggedIn&&<Route path='/auth' element={<AuthPage />} />}
        <Route path="/list" element={<List/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
       
      </Routes>
    </Layout>
    </>
    
  ) 
}

export default App;

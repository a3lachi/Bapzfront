import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";


import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage'
import Product from './pages/Product'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { useSelector  } from "react-redux";
import { updateCart } from './redux/cartSlice';
import {   setJwt } from './redux/userSlice'
import { store } from './redux/store'
import Checkout from './pages/Checkout';

import {useEffect , useState} from 'react'

function App() {

  const  [ jwtExpired , setJwtExpired ] = useState(false)


  const Customer = useSelector((state) =>  state.user.email) ;
  var cart = useSelector((state) =>  state.cart.itms)

  const jwt = useSelector((state) =>  state.user.jwt)

  

  


  const maybeJwt = document.cookie.split("; ").map(element => element.split('=')).filter(element => element[0]==='jwt')[0]
  const jwwt = maybeJwt ? maybeJwt[1] : ""
  
  // jwt is found to be equal to "jwt=expiry date" right after deleting the cookie
  if (jwwt.length > jwt.length || jwt.split('=').length>1) {
    store.dispatch(setJwt(jwwt))
  }

  const storedCart =  JSON.parse(window.localStorage.getItem('state')) 
  if (cart?.length === 0 && storedCart?.length>0) {
    store.dispatch(updateCart())
  }

  useEffect(()=>{
    setJwtExpired(jwt.includes('Jan 1970') || jwt.length<5)
    console.log('JWT IN APP',jwt,jwtExpired)
  },[jwt])
  return (
    <Router>
      <Routes>
            <Route exact path="/"  element={<Home id={Customer} />} />

            <Route path="/apparel/:category"  element={<ProductsPage id={Customer}  />} />

            <Route path="/apparel/:category/:productname/:id"  element={<Product id={Customer}  />} />

            <Route path="/login" element={  jwt.length>5 ? <Navigate to='/' /> : <Login />  }    />

            <Route path="/profil"  element={  jwtExpired === false ?   <Profil /> : <Navigate to='/' /> } />
              

            <Route path="/register" element={ jwt?.length>5 ? <Navigate to='/' /> :  <Register />} />

            <Route path="/cart" element={ <Cart id={Customer}  />} />

            <Route path="/checkout" element={ <Checkout prods={cart}  /> } />
        </Routes>
    </Router>
  );
}

export default App;

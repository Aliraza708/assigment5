
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import AddtoCart from './pages/Cart'
import CheckOut from './pages/CheckOut'
// import YourOrderProduct from './pages/YourPrductPage'
// import MyPopup from './pages/Popap'


function App() {
return(
  <BrowserRouter>
  <Header/>
    <Routes>
     <Route path="/" element={<Home/>} /> 
     <Route path='/Shop' element={<Shop/>} />
     <Route path='/AddtoCart' element={<AddtoCart/>} />
     <Route path='/Shop/:id' element={<ProductDetail/>}/>
     <Route path='/CheckOut' element={<CheckOut/>}/>
     {/* <Route path='/YourOrderProduct' element={<YourOrderProduct/>}/> */}

    </Routes>
    <Footer/>
  </BrowserRouter>
)
}

export default App

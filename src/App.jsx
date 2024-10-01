
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import Footer from './Components/Footer'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'

function App() {
return(
  <BrowserRouter>
  <Header/>
    <Routes>
     <Route path="/" element={<Home/>} /> 
     <Route path='/Shop' element={<Shop/>} />
     <Route path='/Shop/:id' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
}

export default App

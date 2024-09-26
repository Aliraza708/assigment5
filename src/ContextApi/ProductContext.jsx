import { createContext, useEffect, useState } from "react";

import image1 from '../assets/images/Images8.png';
import image2 from '../assets/images/Images6.png';
import image3 from '../assets/images/Images7.png';
import image4 from '../assets/images/Images9.png';
import image5 from '../assets/images/Images3.png';
import image6 from '../assets/images/Images2.png';
import image7 from '../assets/images/Images5.png';
// import image8 from '../assets/images/Images8.png';



export const ProductContext = createContext()

function ProductContextProvider({ children }) {
  const arr = [
    { title: 'Syltherine', id: 1, categories: 'Stylish cafe chair', price: "2.500.000", image: image1 },
    { title: 'Leviosa', id: 2, categories: 'Stylish cafe chair', price: "2.500.000", image: image2 },
    { title: 'Lolito', id: 3, categories: 'Luxury big sofa', price: "7.00.000", image: image3 },
    { title: 'Respira', id: 4, categories: 'Outdoor bar table and stool', price: "500.000", image: image4 },
    { title: 'Grifo', id: 5, categories: 'Night lamp', price: "1.500.000", image: image5 },
    { title: 'Muggo', id: 6, categories: 'Small mug', price: "150.000", image: image6 },
    { title: 'Pingky', id: 7, categories: 'Cute bed set', price: "7.00.000", image: image7 },
    // { title: 'Potty', id: 8, categories: 'Minimalist flower pot', price: "500.000", image: image8 }
    ,
   
  ]





  const [Product, setProduct] = useState([])
  useEffect(() => {
    setProduct(arr)
  }, [])
  return (
    <ProductContext.Provider value={{ Product, setProduct }} >
      {children}
    </ProductContext.Provider>
  )


}

export default ProductContextProvider
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const arr = [
    { title: 'Syltherine', id: 1, categories: 'Stylish cafe chair', price: "2.500.000", image: '/images/images8.png' },
    { title: 'Leviosa', id: 2, categories: 'Stylish cafe chair', price: "2.500.000", image: '/images/images6.png' },
    { title: 'Lolito', id: 3, categories: 'Luxury big sofa', price: "7.00.000", image: '/images/images7.png' },
    { title: 'Respira', id: 4, categories: 'Outdoor bar table and stool', price: "500.000", image: '/images/images9.png' },
    { title: 'Grifo', id: 5, categories: 'Night lamp', price: "1.500.000", image: '/images/images3.png' },
    { title: 'Muggo', id: 6, categories: 'Small mug', price: "150.000", image: '/images/images2.png' },
    { title: 'Pingky', id: 7, categories: 'Cute bed set', price: "7.00.000", image: '/images/images5.png' },
    { title: 'Potty', id: 8, categories: 'Minimalist flower pot', price: "500.000", image: '/images/images4.png' },
  ];

  const [Product, setProduct] = useState([]);
  
  useEffect(() => {
    setProduct(arr);
  }, []);

  return (
    <ProductContext.Provider value={{ Product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;

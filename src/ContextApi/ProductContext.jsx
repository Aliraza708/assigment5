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
    {
      id: 14,
      title: "Vintage Rocking Chair",
      categories: "furniture",
      price: 999.99,
      image: '/images/rockingchair.jpg',
    },
    {
      id: 15,
      title: "Glass Coffee Table",
      categories: "Living Room",
      price: 249.99,
      image: '/images/coffeetable.jpg',
    },
    {
      id: 16,
      title: "Leather Recliner Sofa",
      categories: "furniture",
      price: 1299.99,
      image: '/images/reclinersofa.jpg',
    },
    {
      id: 17,
      title: "Modern Dining Set",
      categories: "Dining Room",
      price: 1999.99,
      image: '/images/diningset.jpg',
    },
    {
      id: 18,
      title: "Outdoor Lounge Chair",
      categories: "Outdoor",
      price: 399.99,
      image: '/images/loungechair.jpg',
    },
    {
      id: 19,
      title: "Minimalist Bookshelf",
      categories: "furniture",
      price: 599.99,
      image: '/images/bookshelf.jpg',
    },
    {
      id: 20,
      title: "Scandinavian Bed Frame",
      categories: "Bedroom",
      price: 1599.99,
      image: '/images/bedframe.jpg',
    },
    {
      id: 21,
      title: "Modern Floor Lamp",
      categories: "Lighting",
      price: 199.99,
      image: '/images/floorlamp.jpg',
    },
    {
      id: 22,
      title: "Antique Wooden Desk",
      categories: "Office",
      price: 799.99,
      image: '/images/woodendesk.jpg',
    },
    {
      id: 23,
      title: "Leather Office Chair",
      categories: "Office",
      price: 599.99,
      image: '/images/officechair.jpg',
    },
    {
      id: 24,
      title: "Rustic Coffee Table",
      categories: "Living Room",
      price: 249.99,
      image: '/images/rusticcoffeetable.jpg',
    },
    {
      id: 25,
      title: "King Size Canopy Bed",
      categories: "Bedroom",
      price: 2499.99,
      image: '/images/canopybed.jpg',
    },
    {
      id: 26,
      title: "Mid-Century Modern Sofa",
      categories: "Living Room",
      price: 1999.99,
      image: '/images/midcenturysofa.jpg',
    },
    {
      id: 27,
      title: "Outdoor Hammock",
      categories: "Outdoor",
      price: 399.99,
      image: '/images/hammock.jpg',
    },
    {
      id: 28,
      title: "Luxury Recliner Chair",
      categories: "Living Room",
      price: 1299.99,
      image: '/images/luxuryrecliner.jpg',
    },
    {
      id: 29,
      title: "Classic Wooden Bookshelf",
      categories: "Office",
      price: 699.99,
      image: '/images/classicbookshelf.jpg',
    },
    {
      id: 30,
      title: "Modern TV Stand",
      categories: "Living Room",
      price: 499.99,
      image: '/images/tvstand.jpg',
    },
    {
      id: 31,
      title: "Outdoor Patio Set",
      categories: "Outdoor",
      price: 1799.99,
      image: '/images/patioset.jpg',
    },
    {
      id: 32,
      title: "Luxury Ottoman",
      categories: "Living Room",
      price: 499.99,
      image: '/images/ottoman.jpg',
    },
    {
      id: 9,
      title: "Annibale Colombo Bed",
      categories: "furniture",
      price: 1899.99,
      image: '/images/bed.png',
    },
    {
      id: 10,
      title: "Annibale Colombo Sofa",
      categories: "furniture",
      price: 2499.99,
      image: '/images/sofa1.png',
    },
    {
      id: 11,
      title: "Bedside Table African Cherry",
      categories: "furniture",
      price: 299.99,
      image: '/images/table.png',
    },
    {
      id: 12,
      title: "Knoll Saarinen Executive Conference Chair",
      categories: "furniture",
      price: 499.99,
      image: '/images/bathroomsink.png',
    },
    {
      id: 13,
      title: "Wooden Bathroom Sink With Mirror",
      categories: "furniture",
      price: 799.99,
      image: '/images/chair.png',
    },
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

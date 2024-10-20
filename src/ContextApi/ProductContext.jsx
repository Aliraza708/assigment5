import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const arr = [
    { title: 'Syltherine', id: 1, categories: 'Stylish cafe chair', price: "200000", image: '/images/images8.png', add: 'new', description: 'A sleek and modern cafe chair perfect for a stylish setup.' },
    { title: 'Leviosa', id: 2, categories: 'Stylish cafe chair', price: "250000", image: '/images/images6.png', add: 'sal', description: 'A trendy chair designed for cafes with comfort in mind.' },
    { title: 'Lolito', id: 3, categories: 'Luxury big sofa', price: "450000", image: '/images/images7.png', add: 'new', description: 'A spacious and luxurious sofa that adds elegance to any room.' },
    { title: 'Respira', id: 4, categories: 'Outdoor bar table and stool', price: "300000", image: '/images/images9.png', add: 'sal', description: 'A stylish outdoor bar table with comfortable stools for an outdoor experience.' },
    { title: 'Grifo', id: 5, categories: 'Night lamp', price: "150000", image: '/images/images3.png', add: 'sal', description: 'A sleek and modern night lamp, perfect for bedside use.' },
    { title: 'Muggo', id: 6, categories: 'Small mug', price: "100000", image: '/images/images2.png', add: 'new', description: 'A small, minimalist mug, ideal for your morning coffee or tea.' },
    { title: 'Pingky', id: 7, categories: 'Cute bed set', price: "400000", image: '/images/images5.png', add: 'new', description: 'A cozy and cute bed set designed to provide maximum comfort.' },
    { title: 'Potty', id: 8, categories: 'Minimalist flower pot', price: "250000", image: '/images/images4.png', description: 'A simple and elegant flower pot for indoor or outdoor use.' },
    { id: 14, title: "Vintage Rocking Chair", categories: "furniture", price: "99999", image: '/images/rockingchair.jpg', add: 'sal', description: 'A classic wooden rocking chair that brings vintage charm to any space.' },
    { id: 15, title: "Glass Coffee Table", categories: "Living Room", price: "24999", image: '/images/coffeetable.jpg', description: 'A modern glass coffee table perfect for a contemporary living room.' },
    { id: 16, title: "Leather Recliner Sofa", categories: "furniture", price: "129999", image: '/images/reclinersofa.jpg', description: 'A luxurious leather recliner sofa offering ultimate relaxation.' },
    { id: 17, title: "Modern Dining Set", categories: "Dining Room", price: "199999", image: '/images/diningset.jpg', add: 'sal', description: 'A stylish dining set designed for modern living spaces.' },
    { id: 18, title: "Outdoor Lounge Chair", categories: "Outdoor", price: "39999", image: '/images/loungechair.jpg', description: 'A comfortable and chic lounge chair perfect for outdoor relaxation.' },
    { id: 19, title: "Minimalist Bookshelf", categories: "furniture", price: "59999", image: '/images/bookshelf.jpg', add: 'sal', description: 'A simple yet functional bookshelf with a minimalist design.' },
    { id: 20, title: "Scandinavian Bed Frame", categories: "Bedroom", price: "159999", image: '/images/bedframe.jpg', description: 'A stylish Scandinavian-inspired bed frame that combines form and function.' },
    { id: 21, title: "Modern Floor Lamp", categories: "Lighting", price: "19999", image: '/images/floorlamp.jpg', add: 'new', description: 'A modern floor lamp with a sleek design to light up any room.' },
    { id: 22, title: "Antique Wooden Desk", categories: "Office", price: "79999", image: '/images/woodendesk.jpg', description: 'An antique-style wooden desk, perfect for creating a vintage office space.' },
    { id: 23, title: "Leather Office Chair", categories: "Office", price: "59999", image: '/images/officechair.jpg', add: 'sal', description: 'A comfortable leather office chair with a sleek, professional design.' },
    { id: 24, title: "Rustic Coffee Table", categories: "Living Room", price: "24999", image: '/images/rusticcoffeetable.jpg', description: 'A rustic-style coffee table that adds a touch of countryside charm.' },
    { id: 25, title: "King Size Canopy Bed", categories: "Bedroom", price: "249999", image: '/images/canopybed.jpg', description: 'A luxurious king-size canopy bed for a royal sleeping experience.' },
    { id: 26, title: "Mid-Century Modern Sofa", categories: "Living Room", price: "199999", image: '/images/midcenturysofa.jpg', description: 'A mid-century modern sofa that combines retro design with modern comfort.' },
    { id: 27, title: "Outdoor Hammock", categories: "Outdoor", price: "39999", image: '/images/hammock.jpg', add: 'new', description: 'A relaxing outdoor hammock perfect for a sunny day in the garden.' },
    { id: 28, title: "Luxury Recliner Chair", categories: "Living Room", price: "129999", image: '/images/luxuryrecliner.jpg', description: 'A luxurious recliner chair offering maximum comfort and style.' },
    { id: 29, title: "Classic Wooden Bookshelf", categories: "Office", price: "69999", image: '/images/classicbookshelf.jpg', description: 'A classic wooden bookshelf with plenty of space for your favorite books.' },
    { id: 30, title: "Modern TV Stand", categories: "Living Room", price: "49999", image: '/images/tvstand.jpg', add: 'new', description: 'A modern TV stand designed to keep your living room organized and stylish.' },
    { id: 31, title: "Outdoor Patio Set", categories: "Outdoor", price: "179999", image: '/images/patioset.jpg', description: 'A comfortable and stylish patio set perfect for outdoor dining.' },
    { id: 32, title: "Luxury Ottoman", categories: "Living Room", price: "49999", image: '/images/ottoman.jpg', add: 'new', description: 'A plush luxury ottoman that complements any living room décor.' },
    { id: 9, title: "Annibale Colombo Bed", categories: "furniture", price: "189999", image: '/images/bed.png', description: 'A luxury bed from Annibale Colombo, perfect for a restful night.' },
    { id: 10, title: "Annibale Colombo Sofa", categories: "furniture", price: "249999", image: '/images/sofa1.png', add: 'sal', description: 'A luxurious and comfortable sofa from Annibale Colombo for any living space.' },
    { id: 11, title: "Bedside Table African Cherry", categories: "furniture", price: "29999", image: '/images/table.png', add: 'new', description: 'A stylish bedside table made from African cherry wood.' },
    { id: 12, title: "Knoll Saarinen Executive Conference Chair", categories: "furniture", price: "49999", image: '/images/bathroomsink.png', description: 'A modern conference chair designed by Knoll Saarinen for executive comfort.' },
    { id: 13, title: "Wooden Bathroom Sink With Mirror", categories: "furniture", price: "79999", image: '/images/chair.png', add: 'new', description: 'A beautifully crafted wooden bathroom sink with a mirror.' }
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

import { useContext, useState } from "react";
import { ProductContext } from "../ContextApi/ProductContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

function Product() {
  const { Product } = useContext(ProductContext);
  const [visible, setVisible] = useState(8); // Initially show 8 products

  const handleShowMore = () => {
    setVisible((prevVisible) => prevVisible + 4); // Show 4 more products on each click
  };

  return (
    <div className="mt-9">
      <h1 className="text-center font-bold text-3xl font-poppins">Our Products</h1>
      <div className="mt-8">
        <Card item={Product.slice(0, visible)} /> {/* Pass only the visible products to Card */}
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {visible < Product.length && ( 
          <button
            onClick={handleShowMore}
            className="font-poppins font-semibold"
            style={{
              color: '#B88E2F',
              padding: 10,
              textAlign: "center",
              width: 200,
              marginTop: 50,
              border: "1px solid #B88E2F",
              cursor: "pointer"
            }}
          >
            SHOW MORE
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;

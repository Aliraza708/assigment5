import { useContext, useState } from "react";
import Card from "../Components/Card";
import { ProductContext } from "../ContextApi/ProductContext";
import ShopBanner from "../Components/ShopBanner";
import { Pagination } from "antd";
import "../App.css";
import FilterHeaderPart from "../Components/FilterHeaderPart";
import FrameNavbar from "../Components/FrameNavbar";

function Shop() {
  const { Product } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8); 

  const startIndex = (currentPage - 1) * productsPerPage; 
  const endIndex = startIndex + productsPerPage; 
  const currentProducts = Product.slice(startIndex, endIndex); 

  const handleChange = (pageNumber) => {
    setCurrentPage(pageNumber); 
  };

  return (
    <div className="flex flex-col ">
      <ShopBanner />
      <FilterHeaderPart
        startIndex={startIndex } 
        endIndex={Math.min(endIndex, Product.length)} 
        setProductsPerPage={setProductsPerPage} 
      />

      <div className="mt-9">
        {currentProducts.length === 0 ? ( 
          <div className="flex justify-center h-96 text-2xl items-center">
            Product No More
          </div>
        ) : (
          <Card item={currentProducts} />
        )}
      </div>
      
      <div className="flex justify-center mt-8 items-center">
        <Pagination
          current={currentPage}
          onChange={handleChange}
          total={Product.length} 
          pageSize={productsPerPage}
          showPrevNextJumpers={false}
          itemRender={(page, type, originalElement) => {
            if (type === "prev") {
              return page ? <a>Previous</a> : null;
            }
            if (type === "next") {
              return <a>Next</a>;
            }
            return originalElement; 
          }}
        />
        
      </div>
      <FrameNavbar/>
    </div>
  );
}

export default Shop;

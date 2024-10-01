import { RightOutlined } from "@ant-design/icons"
import { Link, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { ProductContext } from "../ContextApi/ProductContext"
import ProductDetailCard from "../Components/ProductDetailCard"


export default function ProductDetail(){
    const {id} = useParams()
    const { Product } = useContext(ProductContext);
    const fil = Product.filter((data)=>data.id == id)
       return(
        <div className="font-poppins">
      <div className="bg-[#F9F1E7]  h-16 flex  items-center  pl-14 " >
        <div className="flex  gap-3 justify-center">
          <Link to={"/"} className="text-[#9F9F9F]">
          Home 
        </Link>
        <RightOutlined/>
        <Link to={"/Shop"} className="font-light text-[#9F9F9F] ">
          Shop 
        </Link>
         <RightOutlined />
        </div>
       
        
        <div   style={{
              borderLeft: "2px solid black",
              height: "30px",
              paddingLeft: "15px",
              marginLeft : '15px',
              marginTop: '5px'
            }}>
          {fil[0].title}
        </div>
      </div>
      <div>
        <ProductDetailCard  item={fil}/>
      </div>

        </div>
    )
}
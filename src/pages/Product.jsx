import { useContext } from "react"
import { ProductContext } from "../ContextApi/ProductContext"
import Card from "../Components/Card"
import { Link } from "react-router-dom"

function Product(){
    const {Product}=useContext(ProductContext)
    console.log("====>",Product)
    return(
        <div className="mt-9">
            <h1 className="text-center font-bold text-3xl font-poppins">Our Products</h1>
            <div className="mt-8">
              <Card item={Product}/>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               <Link to={'/Shop'} className="font-poppins font-semibold" style={{color:'#B88E2F',padding:10 ,textAlign:"center",width:200,marginTop:50 ,border: "1px solid #B88E2F", }}>
                SHOW MORE
            </Link> 
            </div>
            
        </div>
        
    )
}
export default Product
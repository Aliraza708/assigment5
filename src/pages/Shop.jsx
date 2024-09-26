import { useContext, useEffect, useState } from "react"
import Card from "../Components/Card"
import { ProductContext } from "../ContextApi/ProductContext"// {
import ShopBanner from "../Components/ShopBanner"
    // import image9 from '../assets/images/bed.png';
    // import image10 from '../assets/images/sofa1.png';
    // import image11 from '../assets/images/table.png';
    // import image12 from '../assets/images/bathroomsink.png';
    // import image13 from '../assets/images/chair.png';
    

function Shop(){
//     const object =
//   {   id: 9,
//         title: "Annibale Colombo Bed",
//         categories: "furniture",
//         price: 1899.99,
//         image: image9,
    
    
    
      
    
//         id: 10,
//         title: "Annibale Colombo Sofa",
//         categories: "furniture",
//         price: 2499.99,
//         image:  image10,
      
    
    
//       id: 11,
//         title: "Bedside Table African Cherry",
//         categories: "furniture",
//         price: 299.99,
//         image:  image11,
      
    
      
//         id: 12,
//         title: "Knoll Saarinen Executive Conference Chair",
//         categories: "furniture",
//         price: 499.99,
//         image: image13,
      
    
//         id: 13,
//         title: "Wooden Bathroom Sink With Mirror",
//         categories: "furniture",
//         price: 799.99,
//         image: image12,
      
    
//       } 
    //   const [pro,setpro]=useState([])
    const {Product,setProduct} = useContext(ProductContext)
    
  useEffect(()=>{
    fetch("https://fakeecommerceapi.onrender.com/api/v1/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
  },[])
    return(
       <div className="flex flex-col">
        
        <ShopBanner/>
        <div className="bg-[#f8f1e7]  flex justify-around items-center h-20 w-full">
           <div className="flex justify-center gap-7 w-3/4  items-center">
            <div className="flex cursor-pointer justify-between items-center w-20">
               <img src='/images/system-uicons_filtering.png'  alt="icon" />
            <p className="font-poppins text-lg font-normal">Filter</p>
            </div>
           
            <img className="cursor-pointer"  src='/images/Vector.png' alt="icon" />
            <img className="cursor-pointer" src='/images/bi_view-list.png' alt="icon" />
            <div className="font-poppins text-lg font-normal" style={{ borderLeft: '2px solid black', height: '30px',paddingLeft:'18px' }}>
            Showing 1–16 of 32 results
            </div>
            </div>
           <div className="flex justify-end mr-7 gap-6 w-2/3 ">
              <div className="flex justify-between w-28 items-center">
                <p className="font-poppins text-lg font-normal">Show</p>
                <div className="bg-white h-14 w-14 text-center pt-4 text-xl font-poppins font-normal">16</div>
              </div>
              <div className="flex justify-between  items-center">
                <p className="font-poppins text-lg font-normal pr-4">Short by</p>
                <div className="bg-white h-14 w-44 text-center pt-4 text-xl font-poppins font-normal">Default</div>
              </div>
            </div>           
 
            <div>
              
            </div>
         </div>
        <div className="mt-9">
             <Card item={Product}/>
        <Card item={Product}/>
        </div>
     
        {/* <Card item={Product}/> */}
       </div>
    )
}


export default Shop
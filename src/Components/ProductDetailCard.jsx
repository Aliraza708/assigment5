import { Rate } from "antd";
import { CartContext } from "../ContextApi/AddtoCartContextapi";
import { useContext } from "react";

export default function ProductDetailCard({ item }) {
  const { cart, addItem ,lessqunatity} = useContext(CartContext)
 

  return( item.map((data) => {
    const { id,categories, image, price, title, description,qunantity } = data
         const fil = cart.filter((data)=>data.id == id)
         console.log(fil[0]?.qunantity)
    return (
      <div key={id} className="flex-1 pl-8 flex flex-col mt-7  md:flex-row md:space-x-8">
        {/* <div className="flex flex-col ml-10 space-y-4">
          <img
            alt="Sofa image 1"
            className="rounded-lg"
            height={100}
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-rz9JGTQoSF2mqdr7UHSg9nQ0.png?st=2024-10-01T13%3A06%3A41Z&se=2024-10-01T15%3A06%3A41Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A45%3A59Z&ske=2024-10-02T01%3A45%3A59Z&sks=b&skv=2024-08-04&sig=qoGsoc84wd4SHu%2B7Z12tcW7e9dxahs4QR05YV/I/Ehw%3D"
            width={100}
          />
          <img
            alt="Sofa image 2"
            className="rounded-lg"
            height={100}
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-8c8HgpolZm6brjH7In8JMZH9.png?st=2024-10-01T13%3A06%3A43Z&se=2024-10-01T15%3A06%3A43Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T12%3A54%3A39Z&ske=2024-10-02T12%3A54%3A39Z&sks=b&skv=2024-08-04&sig=m10jD6MjpQm%2Bm/RQd84AmXn5T02pCljDLkh5GpHX1pQ%3D"
            width={100}
          />
          <img
            alt="Sofa image 3"
            className="rounded-lg"
            height={100}
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-RWfIlqi9jEaat46hYUXmCSpc.png?st=2024-10-01T13%3A06%3A45Z&se=2024-10-01T15%3A06%3A45Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T10%3A31%3A16Z&ske=2024-10-02T10%3A31%3A16Z&sks=b&skv=2024-08-04&sig=ZzztyISa7hEGXTg2f0sTgn7zPptYY3sDRkSZJuxiWi4%3D"
            width={100}
          />
          <img
            alt="Sofa image 4"
            className="rounded-lg"
            height={100}
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-PYsYDPd6LWGMGSyQN8zqy5Wa.png?st=2024-10-01T13%3A06%3A38Z&se=2024-10-01T15%3A06%3A38Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T19%3A56%3A28Z&ske=2024-10-01T19%3A56%3A28Z&sks=b&skv=2024-08-04&sig=c6ahkFQyrmJNyUCOXC6k8Nl/Gk3%2BsztPtr97udLNisc%3D"
            width={100}
          />
        </div> */}

        <div className="bg-[#f9f3ea] p-8 rounded-lg" style={{
          width: '450px',
          height: '450px'
        }}>
          <img
            alt={title}
            className="h-full w-full"
            src={image}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-2xl text-gray-600 mb-4">Rs.{price}</p>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500">
              <Rate />
            </div>
            {/* <p className="text-gray-500 ml-2">5 Customer Review</p> */}
          </div>
          <p className="text-gray-700 mb-4">
            {description}
          </p>
          {/* <div className="mb-4">
            <p className="text-gray-700 mb-2">Size</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 border rounded-lg">L</button>
              <button className="px-4 py-2 border rounded-lg">XL</button>
              <button className="px-4 py-2 border rounded-lg">XS</button>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Color</p>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-purple-500"></button>
              <button className="w-8 h-8 rounded-full bg-black"></button>
              <button className="w-8 h-8 rounded-full bg-yellow-500"></button>
            </div>
          </div> */}
          <div className="flex items-center mb-4">
            {fil[0]?.qunantity == undefined ? null : <div>
              <button className="px-4 py-2 border rounded-lg" onClick={()=>lessqunatity(data.id)}>-</button>
            <span className="px-4">{fil[0]?.qunantity}</span>
            <button className="px-4 py-2 border rounded-lg" onClick={()=>addItem(data)}>+</button> 
            </div>
            
            }
           
            <button onClick={()=> addItem(data)} className="ml-4 px-6 py-2 bg-black text-white rounded-lg">
                 Add To Cart
            </button>
            {/* <button className="ml-4 px-6 py-2 border rounded-lg">+ Compare</button> */}
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-700 mb-2">SKU : SS001</p>
            <p className="text-gray-700 mb-2">Category : {categories}</p>
            <p className="text-gray-700 mb-2">Tags : Sofa, Chair, Home, Shop</p>
            <div className="flex space-x-4">
              <a className="text-gray-700" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="text-gray-700" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="text-gray-700" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  )
     

    )
}
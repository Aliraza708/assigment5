import { createContext, useState } from "react";


export const CartContext = createContext()

export default function CartContextProvider({children}){
   
    const [cart,setCart] = useState([])
    function addItem (items){
        const array = cart
     const cartIndex =cart.findIndex((data)=>data.id == items.id)
     if(cartIndex == -1){
        cart.push({...items , qunantity : 1})
     }else{
         array[cartIndex].qunantity++
     }
    }
    function removeItem (id){
        const array = cart
     const cartIndex =cart.findIndex((data)=>data.id == id)
     array.splice(cartIndex,1)
    setCart([...array])    
    }
    function isItemadd (id){
        const array = cart
     const cartIndex =cart.findIndex((data)=>data.id == items.id)
     if(cartIndex == -1){
        return null
     }else{
        return array[cartIndex]
     }
    }
    return(
        <CartContext.Provider value={{addItem,removeItem,isItemadd,cart}}>
            {children}
        </CartContext.Provider>
    )
}
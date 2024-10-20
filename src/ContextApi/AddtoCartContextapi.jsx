import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

export default function CartContextProvider({children}){
      
    const [cart,setCart] = useState([])
    const [loding,setLoding] = useState(false)
    

    useEffect(()=>{
       if(loding){
        localStorage.setItem('cartItems' ,JSON.stringify(cart)) 
       }
     

    },[cart])

    useEffect(()=>{
      const cartlocal =  localStorage.getItem('cartItems') 
      if(cartlocal){
        setCart([...JSON.parse(cartlocal)])
        setLoding(true)
      }
 
     },[])
    function addItem (items){
        const array = cart ;
     const cartIndex = cart.findIndex((data)=>data.id == items.id)
     if(cartIndex == -1){
        array.push({...items , qunantity : 1})
     }else{
         array[cartIndex].qunantity++
     }
     setCart([...array])

    }
    function lessqunatity (id){
        const array = cart ;
     const cartIndex = cart.findIndex((data)=>data.id == id)
         array[cartIndex].qunantity--
     setCart([...array])

    }
    function removeItem (id){
        const array = cart
     const cartIndex =cart.findIndex((data)=>data.id == id)
     array.splice(cartIndex,1)
    setCart([...array])    
    }
    function isItemadd (id){
        const array = cart
     const cartIndex = cart.findIndex((data)=>data.id == id)
     if(cartIndex == -1){
        return null
     }else{
        return array[cartIndex]
     }
    }
    return(
        <CartContext.Provider value={{addItem,lessqunatity,removeItem,isItemadd,setCart,cart}}>
            {children}
        </CartContext.Provider>
    )
}
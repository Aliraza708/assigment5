import { Button, InputNumber } from "antd";
import CartBanner from "../Components/CartBanner";
import { CartContext } from "../ContextApi/AddtoCartContextapi";
import { useContext } from "react";
import { DeleteFilled } from "@ant-design/icons";
// import { InputNumber } from 'antd';

export default function AddtoCart() {
    const { addItem, removeItem, isItemadd, cart } = useContext(CartContext)
    const onChange = (value) => {
        console.log('changed', value);}
    return (

        <div>
            <CartBanner />
            <div className="mt-12 flex w-full justify-evenly gap-9 ">
                <div className="ml-16 w-9/12 flex flex-col gap-6">
                    <nav className="bg-[#F9F1E7] h-11 pt-3 font-poppins flex justify-evenly">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </nav>
                    {/* <div className="flex items-center justify-evenly font-poppins text-lg text-[#9F9F9F]"> */}
                    {cart.map((item) => {
                        return (<div className="flex items-center justify-between  font-poppins text-lg text-[#9F9F9F]">
                            <div className="flex items-center gap-3  ">
                                <img className="h-28 rounded-md" src={item.image} alt="" />
                                <p className="w-32">{item.title}</p>
                            </div>
                            <div>
                                Rs. {item.price}
                            </div>
                            <div>
                               

                    <InputNumber min={1}  defaultValue={item.qunantity} onChange={onChange} className="text-center w-12 "/>
                                
                                {/* <input defaultValue={item.qunantity} className="w-20 outline-none border-none" type="number" /> */}
                            </div>
                            <div className="text-black">
                                Rs. 250,000.00
                            </div>
                            <div>
                                <DeleteFilled onClick={() => removeItem(item.id)} className="text-[#B88E2F]" />
                            </div>
                        </div>)
                    })}





                </div>
                {/* </div> */}

                <div className="font-poppins flex flex-col  mt-12 mr-3 items-center h-72 w-64 bg-[#F9F1E7] text-center pt-4">
                    <h1 className="font-bold text-2xl">Cart Total</h1>
                    <div className="flex flex-col  gap-4 mt-8">
                        <p>SubTotal <span className="pl-10">23000</span></p>
                        <p>Total <span className="pl-16 text-[#B88E2F]">23000</span></p>
                        <Button className="w-40 p-6">Check Out</Button>
                    </div>


                </div>
            </div>


        </div>
    )
}
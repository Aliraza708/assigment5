import { Button, Input, InputNumber, Tooltip } from "antd";
import CartBanner from "../Components/CartBanner";
import { CartContext } from "../ContextApi/AddtoCartContextapi";
import { useContext, useState } from "react";
import { CaretLeftOutlined, CaretRightOutlined, DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { authContext } from "../ContextApi/auth";
// import { InputNumber } from 'antd';

export default function AddtoCart() {
    const { addItem, removeItem, lessqunatity, isItemadd, cart } = useContext(CartContext)
    const totalQunatity = cart.reduce((total, obj) => total + obj.qunantity, 0)
    const totalAmount = cart.reduce((total, obj) => total + obj.qunantity * obj.price, 0)
    const { users } = useContext(authContext)

    return (

        <div>
            <CartBanner text={"Cart"} />
            <div className="mt-12 flex w-full justify-evenly gap-9 ">
                <div className="ml-16 w-9/12 flex flex-col gap-6">
                    <nav className="bg-[#F9F1E7] h-11 pt-3 font-poppins flex justify-evenly">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </nav>
                    {/* <div className="flex items-center justify-evenly font-poppins text-lg text-[#9F9F9F]"> */}
                    {cart.length == 0 ? <div>
                        <h1 className="text-center font-poppins text-2xl pt-12">No Add Product</h1>
                    </div> : cart.map((item) => {
                        return (<div key={item.id} className="flex items-center justify-between  font-poppins text-lg text-[#9F9F9F]">
                            <div className="flex items-center gap-3  ">
                                <img className="h-28 rounded-md" src={item.image} alt="" />
                                <p className="w-32">{item.title}</p>
                            </div>
                            <div className="pr-16">
                                Rs. {item.price}
                            </div>
                            <div className="flex gap-4 pr-20">
                                {item.qunantity >= 2 ? <CaretLeftOutlined onClick={() => lessqunatity(item.id)} /> : null}

                                {item.qunantity}
                                <CaretRightOutlined onClick={() => addItem(item)} />
                            </div>

                            <div className="text-black pr-10">

                                Rs. {item.price * item.qunantity}
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
                    <div className="flex flex-col  gap-5 mt-8">
                        <p>Total Quantity <span className="pl-10">{totalQunatity}</span></p>
                        <p>Total Price <span className="pl-2 text-[#B88E2F]">Rs.{totalAmount}</span></p>
                        <Tooltip title={!users ? 'First you need to login' : ''}>
                            <Button disabled={!users}>
                                <Link to="/CheckOut" className="w-40 p-6">
                                    Check Out
                                </Link>
                            </Button>
                        </Tooltip>
                    </div>


                </div>
            </div>


        </div>
    )
}

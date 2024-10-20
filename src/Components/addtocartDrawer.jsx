// import React, { useContext, useEffect, useState } from 'react';
// import { Badge, Button, Drawer } from 'antd';
// import { ShoppingCartOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../ContextApi/AddtoCartContextapi';
// const AddtoCartDrawer = () => {

//     const { cart, removeItem } = useContext(CartContext)
        
//     const [open, setOpen] = useState(false);
//     const showDrawer = () => {
//         setOpen(true);
//     };
//     const onClose = () => {
//         setOpen(false);
//     };
//     return (
//         <div>
           
//             <Drawer
//                 width={620}

//                 title={
//                     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <span style={{ fontSize: '20px' }}>Shopping Cart</span>
//                         <img
//                             src="/images/Group.png"
//                             alt="Close"
//                             style={{ cursor: 'pointer', width: '20px', height: '20px' }}
//                             onClick={onClose}
//                         />
//                     </div>

//                 }
//                 onClose={onClose}
//                 open={open}
//                 closable={false}

//             >
//                 <div className='flex w-full flex-col gap-5' >
//                     {cart.map((item) => {
//                         return (
//                             <div key={item.id} className='flex justify-between items-center gap-6'>
//                                 <div className='flex '>
//                                     <div>
//                                         <img className='h-24' src={item.image} alt="" />
//                                     </div>
//                                     <div >
//                                         <p className='text-3xl pl-6'>{item.title}</p>
//                                         <div className='flex pl-6 pt-3 text-xl gap-5 w-full '>
//                                             <p>{item.qunantity}</p>
//                                             <p>x</p>
//                                             <p className='text-[#B88E2F]'>Rs . {item.price}</p>
//                                         </div>


//                                     </div>
//                                 </div>
//                                 <div onClick={() => removeItem(item.id)} className='border text-lg cursor-pointer bg-[#9F9F9F] text-white  w-8 h-8 text-center rounded-full'>
//                                     x
//                                 </div>
//                             </div>
//                         )
//                     })}


//                     <div className='flex justify-between p-4 text-2xl'>
//                         <p>Subtotal</p>
//                         <p className='text-[#B88E2F]'>Rs.33333</p>
//                     </div>
//                     <hr />
//                 </div>
//                 <div className='flex justify-evenly text-lg text-center items-center gap-3 mt-6'>
//                     <Link to={'/AddtoCart'} onClick={onClose} className='rounded-full border hover:text-black h-8 w-32 '>Cart</Link>
//                     <Link onClick={onClose} className='rounded-full   hover:text-black   h-8 border w-32' >Checkout</Link>
//                 </div>

//             </Drawer>

//         </div>
//     );
// };
// export default AddtoCartDrawer;
import { HeartOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Badge, Button, Col, Dropdown, Popover, Avatar, Form, Input, Menu, message, Modal, Row, } from "antd";
import { useContext, useState } from "react";
// import { Modal, Form, Input, Button, Row, Col } from 'antd'; 

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../ContextApi/AddtoCartContextapi";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../authFirbase";
import { authContext } from "../ContextApi/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
// import { getDocs } from "firebase/firestore/lite";
function Header() {
    const navigate = useNavigate();

    const mobileMenu = {
        items: [
            { key: 'home', label: 'Home' },
            { key: 'shop', label: 'Shop' },
            { key: 'about', label: 'About' },
            { key: 'contact', label: 'Contact' },
        ],
    };
    const { cart } = useContext(CartContext)
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [userProfile, setProfile] = useState([]);

    const { users } = useContext(authContext)

    // console.log(users)
    const handleLoginOk = () => {
        setVisible1(false);
    };

    const handleLoginCancel = () => {
        setVisible1(false);
    };

    const handleSignupOk = () => {
        setVisible2(false);
    };

    const handleSignupCancel = () => {
        setVisible2(false);
    };

    const onFinish = (values) => {
        console.log('Form values:', values);


        visible2 ? createUserWithEmailAndPassword(auth, values.email, values.password).then((user) => {
            console.log(user, "usersignin")
            const docRef = doc(db, 'userProfile', `user${user.uid}`)
            setDoc(docRef, values).then(() => console.log("go")).catch((error) => console.log(error))
            setVisible2(false)

        }).catch((error) => {
            console.log(error)

        }) : signInWithEmailAndPassword(auth, values.email, values.password).then((user) => {
            console.log(user)
            setVisible1(false)

        }).catch((error) => {
            console.log(error)
        })


        return message.success('Form submitted successfully!');


    };

    async function firebasedata() {
        const querySnapshot = await getDocs(collection(db, "userProfile"))
       
        querySnapshot.forEach((doc) => {
           
            if (users == doc.data.email) {
                setProfile(doc.data())
            }

        })
    }
    firebasedata()

    // console.log("===>", userProfile)
    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    const Logut = () => {
        signOut(auth).then(() => {
            setLogout(true)
            setOpen(false)
        })
    }



    return (
        <div className="bg-white text-black p-3  sticky top-0 z-50">
            <div className="flex justify-around items-center mt-4">
                <div>
                    <img src='/images/logo.png' alt="logo" className="w-[185px] h-[41px]" />
                </div>
                <div className="hidden md:flex gap-6 font-poppins text-black font-semibold text-base leading-6">
                    <Link to={'/'}>Home</Link>
                    <Link to={"/Shop"}>Shop</Link>
                    <div>About</div>
                    <div>Contact</div>
                </div>

                <div className="flex items-center gap-6">
                    <div >
                        {!users ? <UserOutlined onClick={() => setVisible1(true)} style={{ fontSize: '20px', cursor: 'pointer', }} />

                            : <Popover
                                content={
                                    <div className="flex flex-col gap-4">
                                        <p>{`Email : ${userProfile.email}`}</p>
                                         <Link to={"/YourOrderProduct"}>
                                         
                                         {/* <Button onClick={hide} className="w-full">
                                         Your Purchase List
                                         </Button> */}
                                       </Link>
                                        <Button onClick={Logut}>Logout</Button>
                                    </div>
                                }
                                title={`Name : ${userProfile.firstName}`}
                                trigger="click"
                                open={open}
                                className="cursor-pointer"
                                onOpenChange={handleOpenChange}
                            >
                                <Avatar size={30} icon={<UserOutlined />} />
                            </Popover>
                        }

                    </div>
                    <div>
                        <SearchOutlined style={{ fontSize: '20px', cursor: 'pointer', }} />
                    </div>
                    <div><HeartOutlined style={{ fontSize: '20px', cursor: 'pointer', }} /></div>
                    <div>
                        <Link to={"/AddtoCart"}>
                            <Badge style={{
                                height: '18px',
                                width: '13px',
                                fontSize: '11px',
                                borderRadius: '50%',
                                cursor: 'pointer'

                            }} count={cart.length}>
                                <ShoppingCartOutlined style={{ fontSize: '20px', cursor: 'pointer', }} />

                            </Badge>
                        </Link>


                    </div>
                </div>


                <div className="md:hidden">

                    <Dropdown menu={mobileMenu} trigger={['click']} placement="bottomRight">
                        <Button style={{ borderColor: 'black', color: 'black' }} icon={<MenuOutlined />} />
                    </Dropdown>
                </div>

            </div>
            <Modal
                title="Login"
                open={visible1}
                onOk={handleLoginOk}
                onCancel={handleLoginCancel}
            >
                <Form layout="vertical" onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Email Address"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                            >
                                <Input type="email" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Password" name="password"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="password" />
                    </Form.Item>
                    <div className="flex justify-between items-center">
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <p type="primary" className="cursor-pointer" onClick={() => { setVisible1(false); setVisible2(true); }}>
                                No account ? <span className="hover:underline decoration-blue-400  hover:text-blue-400"> Sign up</span>
                            </p>
                        </Form.Item>
                    </div>

                </Form>
            </Modal>

            {/* Signup Modal */}
            <Modal
                title="Sign Up"
                open={visible2}
                onOk={handleSignupOk}
                onCancel={handleSignupCancel}
            >
                <Form layout="vertical" onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="First Name"
                                name="firstName"
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Last Name"
                                name="lastName"
                                rules={[{ required: true, message: 'Please input your last name!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        label="Email Address"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" />
                    </Form.Item>
                    <div className="flex justify-between items-center">
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Sign Up
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <p type="primary" className="cursor-pointer" onClick={() => { setVisible1(true); setVisible2(false); }}>
                                Already have an acount ? <span className="hover:underline decoration-blue-400  hover:text-blue-400"> Sign In</span>
                            </p>
                        </Form.Item>
                    </div>

                </Form>
            </Modal>

        </div>
    )

}

export default Header
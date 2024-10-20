import CartBanner from "../Components/CartBanner";
import { Form, Input, Row, Col, Button, message } from 'antd';
import { db } from "../authFirbase";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../ContextApi/AddtoCartContextapi";


function CheckOut() {
  const { setCart } = useContext(CartContext)   
  const [buy, setBuy] = useState({})
  const [loding,setloding]=useState(false)
  useEffect(() => {
    const cartlocal = localStorage.getItem('cartItems')
    setBuy({...JSON.parse(cartlocal)})

  }, [])

  console.log(buy)

  const onFinish = async (values) => {
    setloding(true)
    console.log('Received values:', values);




    try {
      const docRef = await addDoc(collection(db, "BuyProduct"),
        buy
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "BillDetail"),
        values
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    message.success('Your Order successfully!');
    setCart([])
    localStorage.clear()
    setloding(false)
  }
  

  return (
    <div>
      <CartBanner text={"CheckOut"} />
      <div className="bg-gray-100 p-10 w-full">
        <div className="flex w-full">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
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
              {/* <Form.Item label="Company Name (Optional)" name="companyName">
                <Input />
              </Form.Item> */}
              <Form.Item label="Street Address" name="streetAddress">
                <Input />
              </Form.Item>
              <Form.Item label="Town / City" name="townCity">
                <Input />
              </Form.Item>
              <Form.Item label="ZIP Code" name="zipCode">
                <Input />
              </Form.Item>
              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>
              <Form.Item
                label="Email Address"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item className="mb-4 ">
                <div className="flex gap-3 flex-col">
                  <div className="flex items-center">
                    <Input type="radio" name="payment" style={{ width: '10px' }} className="mr-2" />
                    <span>Cash On Delivery</span>

                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-4">
                      Your personal data will be used to support your experience throughout
                      this website, to manage access to your account, and for other purposes
                      described in our{" "}
                      <a href="#" className="text-black font-bold">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>
                </div>

              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {loding ? `loading` : `Order Now` }
                </Button>
              </Form.Item>
            </Form>
          </div>

        </div>
      </div>


    </div>
  )
}

export default CheckOut
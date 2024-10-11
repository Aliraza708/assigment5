import { HeartOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { Badge, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import AddtoCartDrawer from "./addtocartDrawer";
function Header() {
    const mobileMenu = {
        items: [
            { key: 'home', label: 'Home' },
            { key: 'shop', label: 'Shop' },
            { key: 'about', label: 'About' },
            { key: 'contact', label: 'Contact' },
        ],
    };
   
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

                <div className="flex gap-6">
                    <div ><UserOutlined style={{ fontSize: '20px', cursor: 'pointer', }} /></div>
                    <div>
                        <SearchOutlined  style={{ fontSize: '20px', cursor: 'pointer', }} />
                        </div>
                    <div><HeartOutlined style={{ fontSize: '20px', cursor: 'pointer', }} /></div>
                    <div>
                  
                    <AddtoCartDrawer />

                </div>
                </div>
                

                <div className="md:hidden">

                    <Dropdown  menu={mobileMenu} trigger={['click']} placement="bottomRight">
                        <Button style={{borderColor : 'black' ,  color :'black'}}  icon={<MenuOutlined  />} />
                    </Dropdown>
                </div>
            </div>
           
        </div>
    )

}

export default Header
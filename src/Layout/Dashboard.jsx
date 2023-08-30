import { NavLink, Outlet } from "react-router-dom";
// import { FaBeer, AiOutlineShoppingCart } from 'react-icons/fa';
import { AiOutlineShoppingCart, AiTwotoneHome, AiOutlineMenu, AiFillShopping } from "react-icons/ai";
import { GiWallet } from "react-icons/gi";
import { ImCalendar } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart(); 
    return (
        <>
            <Helmet>
                <title>Food Planet | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
                    
                    <li><NavLink to="/dashboard/home"><AiTwotoneHome/>User Home</NavLink></li>
                        <li><NavLink to="/dashboard/myCart"><span className="flex flex-row items-center"><AiOutlineShoppingCart /><span className="px-2">My Cart</span><button className="btn btn-sm bg-transparent border-0 hover:bg-transparent"><div className="badge">{ "+"+ cart.length}</div></button></span></NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><GiWallet/>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><ImCalendar/>Reservation</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><AiTwotoneHome/>Home</NavLink></li>
                    <li><NavLink to="/menu"><AiOutlineMenu/>Menu</NavLink></li>
                    <li><NavLink to="/order/offered"><AiFillShopping/>Order</NavLink></li>
                    <li><NavLink to="contact"><MdEmail/>Contact</NavLink></li>
                    </ul>
                
                </div>
            </div>
        </>
    );
};

export default Dashboard;


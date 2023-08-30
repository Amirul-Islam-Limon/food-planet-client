import React, { useContext } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../../assets/others/Food_Planet_Restaurant.png"
import AuthProvider, { AuthContext } from "../../../providers/AuthProvider";
import cartIcon from "../../../assets/icon/cart-icon.png"
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();


    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => console.log(error));
    }
    
    const navItems = <React.Fragment>
        <li className="mx-1 text-xl text-[#c99d36] font-semibold border-red-600 hover:bg-none "><Link className="hover:text-[#BB8506] hover:border-b-2 border-b-2 hover:border-white border-red-600" to="/">Home</Link></li>
        <li className="mx-1 text-xl text-[#BB8506] font-semibold border-red-600 hover:bg-none "><Link className="hover:text-[#BB8506] hover:border-b-2 border-b-2 hover:border-white border-red-600" to="/menu">Our Menu</Link></li>
        <li className="mx-1 text-xl text-[#BB8506] font-semibold border-red-600 hover:bg-none "><Link className="hover:text-[#BB8506] hover:border-b-2 border-b-2 hover:border-white border-red-600" to="/order/offered">Order Food</Link></li>
        <li className="mx-1 text-xl text-[#BB8506] font-semibold border-red-600 hover:bg-none "><Link className="hover:text-[#BB8506] hover:border-b-2 border-b-2 hover:border-white border-red-600" to="/secret">Secret</Link></li>
        <li className=""><Link className="" to="/dashboard/myCart">
            <button className="btn btn-sm bg-transparent hover:bg-transparent border-none rounded -mt-1 px-0 relative">
                <img className="w-11" src={cartIcon} alt="" />
                <div className="absolute w-7 h-7 -bottom-3 -right-2 badge mask mask-circle  p-1 bg-red-600 text-white"><span>{cart?.length ? "+":""}</span>{ `${cart.length}`}</div>
            </button>
        </Link>
        </li>
        {
            user ? <>
                    <button onClick={handleLogOut} className="btn btn-ghost -mt-2">Log Out</button>
            </> :
                <>
                    <li className="mx-1 text-md text-[#c99d36] font-semibold border-red-600 hover:bg-none "><Link className="hover:text-[#BB8506] hover:border-b-2 border-b-2 hover:border-white border-red-600" to="/login">Login</Link></li>
                </>
        }
        

    </React.Fragment>
    return (
        <div>
            <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl">
                <div className="navbar-start w-1/3">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-24 -mt-3 p-1" src={brandLogo} alt="" /></a>
                </div>
                <div className="navbar-end w-2/3 hidden lg:flex">
                    <ul className="menu text-white menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
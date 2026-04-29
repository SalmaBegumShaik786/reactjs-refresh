import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import foodImg from 'url:../images/food.png';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Logo = () => {
    return (
        <div className="w-40">
            <img className="logo" src={foodImg} alt="logo" />
        </div>
    )
}

const NavLinks = () => {
    let [btnName, setBtnName] = useState("Login");

    const { loggedInUser } = useContext(UserContext);
    //Selector: Selector is hook inside react
    //Subscribing to the store using a selector;

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex items-center">
            <ul className='flex p-4 m-4'>
                <li className='px-4'>
                    <Link to="/">Home</Link>
                </li>
                <li className='px-4'>
                    <Link to="/About">About Us</Link>
                </li>
                <li className='px-4'>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className='px-4'>
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <li className='px-4 font-bold text-xl'>
                    <Link to="/Cart">
                    (Cart{cartItems.length} items)</Link></li>
                <li className='px-4'>
                    <span> {loggedInUser}</span>
                </li>
                <button className='font-bold text-md'
                    onClick={() => {
                        btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
            </ul>
        </div>
    )
}

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg mb-10 pl-5">
            <Logo />
            {
                onlineStatus === false ?
                    <span>you are offline</span> : <NavLinks />
            }

        </div>
    )
}

export default Header;
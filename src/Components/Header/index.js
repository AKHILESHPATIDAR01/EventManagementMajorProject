import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import  Menu from './svg/bars-solid.svg';
import  Cart from './svg/shopping-cart-solid.svg';
import  Close from './svg/times-solid.svg';


function Header( { cartitem , setCartItems } ) {
    const [toggle , setToggle]=useState(false);

    const menuToggle = () =>{
        setToggle(!toggle);
    }    

    return (
        

        <header>
            <div className="menu" onClick={menuToggle}>
                <img src={Menu} width="20" />
            </div>
            <div className="logo">
                <h1><Link to='/' >LOGO</Link></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : "" }>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Home</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <img src={Close} width="20" />
                    </li>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={Cart} width="20"/>
                    </Link>
                </div>
            </nav>
        </header>

        // <div>
        //     <nav>
        //             <li className="logo">Wedding Season</li>
        //             <li>
        //                 <ul>
        //                     <li>Home</li>
        //                     <li>About Us</li>
        //                     <li>Contact Us</li>
        //                     <li>CART</li>
        //                 </ul>
        //             </li>
        //     </nav>
        // </div>
    )
}

export default Header

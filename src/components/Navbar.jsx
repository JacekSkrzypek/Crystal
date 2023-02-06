import React from 'react';
import './modules.css'
import { useGlobalContext } from '../context';

const Navbar = () => {
    const { data } = useGlobalContext();
    const language = data.language;
    return (
        <nav className='navbar'>
            <img className='logo' src="crystalLogo.png"/>
            <div className='navCenter'>
                <a href="index.html">Shop</a>
                <a href="kolekcje.html">Seasons</a>
                <a href="shops.html">Stores</a>
                <a href="archive.html">Archive</a>
                <a href="cart.html">Cart</a>
                <a>
                    <input className='searchInput' type="text" id="searchId" placeholder='Search' minlength="2" maxlength="15"/>
                </a>
            <a href="">Wishlist</a>
            </div>
             
        </nav>
    );
};
// wishlist pokazuje sie jako pop-up
export default Navbar;
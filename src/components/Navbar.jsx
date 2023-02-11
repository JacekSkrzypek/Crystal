import React from 'react';
import './modules.css'
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';

const Navbar = () => {
    const {data: { language } } = useGlobalContext();
    return (
        <nav className='navbar'>
            <img className='logo' src="crystalLogo.png"/>
            <div className='navCenter'>
                <a id='sale' href="sale.html">{LANGUAGE.sale[language]}</a>
                <a href="shop.html">{LANGUAGE.shop[language]}</a>
                <a href="kolekcje.html">{LANGUAGE.collections[language]}</a>
                <a href="archive.html">{LANGUAGE.archive[language]}</a>
                <a href="cart.html">{LANGUAGE.cart[language]}</a>
                <a>
                    <input className='searchInput' type="text" id="searchId" placeholder={LANGUAGE.search[language]} minLength="2" maxLength="15"/>
                </a>
            <a href="">{LANGUAGE.wishlist[language]}</a>
            </div>
             
        </nav>
    );
};
// wishlist pokazuje sie jako pop-up
export default Navbar;
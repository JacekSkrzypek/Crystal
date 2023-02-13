import React from 'react';
import './modules.css'
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';
import { BsBag } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const {data: { language } } = useGlobalContext();
    return (
        <nav className='navbar'>
            <img className='logo' src="crystalLogo.png" onClick={() => navigate('/')}/>
            <div className='navCenter'>
                <a id='sale' href="/sale">{LANGUAGE.sale[language]}</a>
                <a href="/products">{LANGUAGE.newin[language]}</a>
                <a href="/collections">{LANGUAGE.collections[language]}</a>
                <a>
                    <input className='searchInput' type="text" id="searchId" placeholder={LANGUAGE.search[language]} minLength="2" maxLength="15"/>
                </a>
                <a href="/login">{LANGUAGE.login[language]}</a>
                <a href="/cart" alt={LANGUAGE.cart[language]}>
                    <BsBag/>
                    
                </a>
                <a href="" alt={LANGUAGE.wishlist[language]}><FaRegHeart/></a>
            </div>
             
        </nav>
    );
};
export default Navbar;
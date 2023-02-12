import React, { lazy } from 'react';
import './pages.css';  //<- It's css for this page!
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

const SelectedProduct = () => {
    let {  id } = useParams();
    const { data: { products} } =useGlobalContext();
    const selectedProduct = products.find((product) => product.id === +id);
    const {data: {language} }=useGlobalContext();

    const {title, description, price, color} = selectedProduct; //Add what you need in { ... } from constant.jsx
    return (
        <main>
            <div>
                <ul className='breadcrumbs'>
                    <li><a href="./">{LANGUAGE.homepage[language]}</a></li>
                    <li><a href="/products">{LANGUAGE.newin[language]}</a></li>
                    <li><a href="">{title}</a></li>
                </ul>
            </div>
            <div className="product-layout" id="product-container">
                <div className="gallery">
                    <div className="thumbnail">

                    </div>
                    <div className="main-photo">
                        <div>
                            <img src="productphotos/pexels-photo-9558601.jpg" alt="" />
                        </div>
                        <button></button>
                        <button></button>
                    </div>
                </div>

                <div className="product-info-container">
                    <div className="product-name">
                        <p>{title}</p>
                    </div>
                    <div className="product-price">
                        <p>{price} $</p>
                    </div>
                    <div className='product-rating'>

                    </div>
                    <div className="color-picker">
                        <p>{LANGUAGE.color[language]}: {color}</p>
                    </div>
                    <div className="size-picker">

                    </div>
                    <div className='add-to-cart-btn'>
                        <input type="submit" id="addToCartBtn" value={LANGUAGE.addtocart[language]}/>
                    </div>
                    <div className="delivery-box">
                        <p>{LANGUAGE.freedelivery[language]}</p>
                        <p>{LANGUAGE.freereturn[language]}</p>
                        <p><a href="/delivery">{LANGUAGE.details[language]}</a></p>
                    </div>
                    <div className="product-description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="recommended">
                    <p>{LANGUAGE.youmight[language]}</p>
                </div>
                <div className='reviews'>
                    <p>{LANGUAGE.reviews[language]}</p>
                    <ul className='stars-rating'>
                        <li><BsStarFill color='white'/></li>
                        <li><BsStarFill color='white'/></li>
                        <li><BsStarFill color='white'/></li>
                        <li><BsStarHalf color='white'/></li>
                        <li><BsStar color='white'/></li>
                    </ul>
                </div>
                <div className="recently-viewed">
                <p>{LANGUAGE.recentlyviewed[language]}</p>
                </div>
            </div>
        </main>
    );
};

export default SelectedProduct;
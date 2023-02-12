import React from 'react';
import './pages.css';  
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const SelectedProduct = () => {
    const {data: { language, products } } = useGlobalContext(); //<---
    let {  id } = useParams();
    const selectedProduct = products.find((product) => product.id === +id);

    const {title, description, price, color, imageSource} = selectedProduct; //Add what you need in { ... } from constant.jsx
    
    return (
        <main>
            <div>
                <ul className='breadcrumbs'>
                    <li><a href="./">{LANGUAGE.homepage[language]}</a></li>
                    <li><a href="/products">{LANGUAGE.newin[language]}</a></li>
                    <li><a href="">{title}</a></li>
                </ul>
            </div>
            <div id="product-container">
                <div className="gallery">
                    <div className="main-photo">
                        <img src={imageSource} width={100} height={50}/>
                    </div>
                    <div className="thumbnail">

                    </div>
                </div>

                <div className="product-info-container">
                    <div className="product-name desc-title">
                        <p>{title}</p>
                    </div>
                    <div className="product-price desc-price">
                        <p>{price} $</p>
                    </div>
                    <div className='product-rating desc-text'>
                        <ul className='stars-rating'>
                            <li><BsStarFill color='white'/></li>
                            <li><BsStarFill color='white'/></li>
                            <li><BsStarFill color='white'/></li>
                            <li><BsStarHalf color='white'/></li>
                            <li><BsStar color='white'/></li>
                        </ul>
                    </div>
                    <div className="color-picker">
                        <p className="desc-text">{LANGUAGE.color[language]}: {color}</p>
                    </div>
                    <div className="size-picker desc-text">
                        <label htmlFor="size"></label>
                        <select name="size" className="filter-btn" placeholder='Size'>
                            <option value="" disabled selected>Select size</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </div>
                    <div className='add-to-cart-btn desc-text'>
                        <input type="submit" id="addToCartBtn" value={LANGUAGE.addtocart[language]}/>
                    </div>
                    <div className="delivery-box">
                        <p className="desc-delivery">{LANGUAGE.freedelivery[language]}</p>
                        <p className="desc-delivery">{LANGUAGE.freereturn[language]}</p>
                        <a className="desc-delivery" href="/delivery">{LANGUAGE.details[language]}</a>
                    </div>
                    <div className="product-description">
                        <p className="desc-text">Description: {description}</p>
                    </div>
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
        </main>
    );
};

export default SelectedProduct;
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './modules.css'
import { LANGUAGE } from '../constant';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const ProductsList = () => {
    let {  id } = useParams();
    const {data: {products}} = useGlobalContext();
    const selectedProduct = products.find((product) => product.id === +id);
    const {data: {language} }=useGlobalContext();

    return (
        <div>
            <div>
                <ul className='breadcrumbs'>
                    <li><a href="./">{LANGUAGE.homepage[language]}</a></li>
                    <li><a href="/products">{LANGUAGE.newin[language]}</a></li>
                </ul>
            </div>
            <div className='category-banner'>
                <h2>{LANGUAGE.newin[language]}</h2>
            </div>
            <div className='filter-container'>
                <ul className='filter-list'>
                    <li><button className='filter-btn'>{LANGUAGE.sort[language]} <RxTriangleDown/></button></li>
                    <li><button className='filter-btn'>{LANGUAGE.size[language]} <RxTriangleDown/></button></li>
                    <li><button className='filter-btn'>{LANGUAGE.color[language]} <RxTriangleDown/></button></li>
                    <li><button className='filter-btn'>{LANGUAGE.price[language]} <RxTriangleDown/></button></li>
                </ul>
            </div>
            <section className='products-list'>
                <div className='products-container'>
                    {products.map((product) => {
                    const { title, price } = product;
                    return (
                    <article className='product'>
                        <img className='image' 
                            src="coś.jpg" alt="" onError={({currentTarget}) => {
                            currentTarget.onError = null;
                            currentTarget.src ='https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswerscdn.microsoft.com%2Fstatic%2Fimages%2Fimage-not-found.jpg'
                        }} />
                        <div className='information'>
                            <h1>{title}</h1>
                            <p>{price}</p>
                       </div>
                    </article>)
                })}
                </div>
            </section>
        </div>
    );
};

export default ProductsList;
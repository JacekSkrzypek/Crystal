import React from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './modules.css'
import { LANGUAGE } from '../constant';

const ProductsList = () => {
    let {  id } = useParams();
    const {data: {products}} = useGlobalContext();
    const selectedProduct = products.find((product) => product.id === +id);
    const {data: {language} }=useGlobalContext();

    return (
        <section className='products-list'>
            <div>
                <ul className='breadcrumbs'>
                    <li><a href="./">{LANGUAGE.homepage[language]}</a></li>
                    <li><a href="/products">{LANGUAGE.newin[language]}</a></li>
                </ul>
            </div>
            <div className='category-banner'>

            </div>
            <div className='filter-list'>
                <ul>
                    <li><button>{LANGUAGE.sort[language]}</button></li>
                    <li><button>{LANGUAGE.size[language]}</button></li>
                    <li><button>{LANGUAGE.color[language]}</button></li>
                    <li><button>{LANGUAGE.price[language]}</button></li>
                </ul>
            </div>
            <div className='products-container'>
                {products.map((product) => {
                const { title, price } = product;
                return (
                <article className='product'>
                    <img src="coś.jpg" alt="" onError={({currentTarget}) => {
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
    );
};

export default ProductsList;
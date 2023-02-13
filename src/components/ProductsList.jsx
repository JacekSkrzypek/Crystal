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
                    <li>
                        <select name="sort" className="filter-btn" id='sort-filter-btn'>
                            <option value="" disabled selected>{LANGUAGE.sort[language]}</option>
                            <option value="bts">Cena: od najwyższej do najniższej</option>
                            <option value="stb">Cena: od najniższej do najwyższej</option>
                        </select>
                    </li>
                    <li>
                        <select name="size" className="filter-btn" placeholder='Size'>
                            <option value="" disabled selected>{LANGUAGE.size[language]}</option>
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </li>
                    <li>
                        <select name="colors" className="filter-btn">
                            <option value="" disabled selected>{LANGUAGE.color[language]}</option>
                            <option value="white">{LANGUAGE.white[language]}</option>
                            <option value="black">{LANGUAGE.black[language]}</option>
                            <option value="black">{LANGUAGE.red[language]}</option>
                            <option value="black">{LANGUAGE.green[language]}</option>
                            <option value="black">{LANGUAGE.blue[language]}</option>
                        </select>
                    </li>
                    <li>
                        <select name="price" className="filter-btn">
                            <option value="" disabled selected>{LANGUAGE.price[language]}</option>
                        </select>
                    </li>
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
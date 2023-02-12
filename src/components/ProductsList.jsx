import React from 'react';
import { useGlobalContext } from '../context';
import './modules.css'

const ProductsList = () => {
    const {data: {products}} = useGlobalContext();
    return (
        <section className='products-list'>
            {products.map((product) => {
                const { title, price } = product;
                return (
                <article className='product'>
                    <img className='image' src="coś.jpg" alt="" onError={({currentTarget}) => {
                        currentTarget.onError = null;
                        currentTarget.src ='https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswerscdn.microsoft.com%2Fstatic%2Fimages%2Fimage-not-found.jpg'
                    }} />
                    <div className='information'>
                        <h1>{title}</h1>
                        <p>{price}</p>
                    </div>
                </article>)
            })}
        </section>
    );
};

export default ProductsList;
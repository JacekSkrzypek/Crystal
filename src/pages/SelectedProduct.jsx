import React from 'react';
import './pages.css';  //<- It's css for this page!
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant'; //<---

const SelectedProduct = () => {
    const {data: { language } } = useGlobalContext(); //<---
    let {  id } = useParams();
    const { data: { products} } =useGlobalContext();
    const selectedProduct = products.find((product) => product.id === +id);

    const {title, description, price} = selectedProduct; //Add what you need in { ... } from constant.jsx
    return (
        <main>
            <p>{title}</p>
        </main>
    );
};

export default SelectedProduct;
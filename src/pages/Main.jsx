import React from 'react';
import Products from '../components/Products';
import SearchEngine from '../components/SearchEngine';
import './pages.css'

const main = () => {
    return (
        <div>
            <SearchEngine />
            <Products />
        </div>
    );
};

export default main;
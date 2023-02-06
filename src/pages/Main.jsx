import React from 'react';
import Footer from '../components/Footer';
import Products from '../components/Products';
import SearchEngine from '../components/SearchEngine';
import './pages.css'

const main = () => {
    return (
        <div>
            <p>Main - test</p>

            <SearchEngine />
            <Products />
            <Footer />
        </div>
    );
};

export default main;
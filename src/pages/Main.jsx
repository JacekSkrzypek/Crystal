import React from 'react';
import Products from '../components/ProductsList';
import SearchEngine from '../components/SearchEngine';
import SlideShow from '../components/SlideShow';
import './pages.css'

const main = () => {
    return (
        <>
            <SearchEngine />
            <SlideShow />
        </>
    );
};

export default main;
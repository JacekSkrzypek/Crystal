import React from 'react';
import './modules.css'
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';

const Footer = () => {
    const {data: { language } } = useGlobalContext();
    return (
        <footer className='footer'>
            <a href="help.html">{LANGUAGE.help[language]}</a>
            <a href="about.html">{LANGUAGE.about[language]}</a>
            <a href="credits.html">{LANGUAGE.contact[language]}</a>
        </footer>
    );
};

export default Footer;
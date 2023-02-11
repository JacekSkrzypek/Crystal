import React from 'react';
import './modules.css'
import { useGlobalContext } from '../context';
import { LANGUAGE } from '../constant';
import { AiFillFacebook, AiFillInstagram, AiOutlineHeart, AiOutlineQuestionCircle, AiOutlineTwitter, AiOutlineUser, AiFillYoutube } from 'react-icons/ai';
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';

const Footer = () => {
    const {data: { language } } = useGlobalContext();
    return (
        <footer className='footer'>
            <div className='footer-menu'>
                <div className='help-container ft-column'>
                    <li>
                        <h4 className='footer-title'>{LANGUAGE.help[language]}</h4>
                        <ul><a href="">{LANGUAGE.termsAndConditions[language]}</a></ul>
                        <ul><a href="">{LANGUAGE.privacyPolicy[language]}</a></ul>
                        <ul><a href="">{LANGUAGE.sizeGuide[language]}</a></ul>
                        <ul><a href="">{LANGUAGE.delivery[language]}</a></ul>
                    </li>
                </div>
                <div className='about-company ft-column'>
                    <li>
                    <h4 className='footer-title'>{LANGUAGE.company[language]}</h4>
                        <ul><a href="/about">{LANGUAGE.about[language]}</a></ul>
                        <ul><a href="">{LANGUAGE.career[language]}</a></ul>
                    </li>
                </div>
                <div className='contact ft-column'>
                    <li>
                        <h4 className='footer-title'>{LANGUAGE.contact[language]}</h4>
                        <ul>{LANGUAGE.address[language]}:</ul>
                    </li>
                </div>
                
                <div className='newsletter ft-column'>
                    <li>
                        <h4>Newsletter</h4>
                        <ul>
                            <p>{LANGUAGE.acceptQuestion[language]}</p>
                            <input type="email" className='email-input' placeholder='example@crystal.com'/>
                            
                        </ul>
                        <ul>
                            <input type="checkbox" id='accept-btn' name='accept'/>
                            <label for="accept">{LANGUAGE.iAccept[language]}</label>
                        </ul>
                        <ul><input id='save-btn' type='submit' value={LANGUAGE.save[language]}/></ul>
                    </li>
                </div>
            </div>
            <div className='footer-bottom-bar'>

            </div>
        </footer>
    );
};

export default Footer;
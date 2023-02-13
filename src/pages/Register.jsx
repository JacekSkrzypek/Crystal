import React, { lazy } from 'react';
import { LANGUAGE } from '../constant';
import { useGlobalContext } from '../context';

const Register = () => {
    const {data: { language } } = useGlobalContext();

    return (
        <div>
           <div className='login-column'>
                <div className='login-logo'>
                    <img className='login-clet' src="cLettering.png"/>
                </div>
                <div className='login-box'>
                    <div>
                        <div className='log-or-reg'>
                            <a href="/register" className='form-btn'>Join</a>
                            <a href="/login" className='form-btn'>Sign in</a>
                        </div>
                        <div>
                            <ul className='login-list'>
                                <li><p>Sign up with...</p></li>
                                <li><button id='' className='form-btn'>Google</button></li>
                                <li><button id='' className='form-btn'>Apple</button></li>
                                <li><button id='' className='form-btn'>Facebook</button></li>
                                <li><p>Or sign up with email</p></li>
                                <li><p>Email address:</p></li>
                                <li><input type="email" className='form-input' placeholder='example@crystal.com'/></li>
                                <li><p>Password:</p></li>
                                <li><input type="password" className='form-input' placeholder='••••••••••'/></li>
                                <li><p>Confirm password:</p></li>
                                <li><input type="password" className='form-input' placeholder='••••••••••'/></li>
                                <li><button className='sign-btn'>Sign in</button></li>
                                <li><a href="">Forgot password?</a></li>
                                
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='login-brow'>
                    <a href="">{LANGUAGE.privacyPolicy[language]}</a>
                </div>
           </div>
        </div>
    );
};

export default Register;
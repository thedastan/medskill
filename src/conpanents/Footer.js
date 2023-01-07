import React from 'react';
import logo from '../img/image 8.png'
import logo2 from '../img/Med Skill.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__log">
                        <img src={logo} alt=""/>
                        <img src={logo2} alt=""/>
                    </div>
                    <h3 className="footer__title">
                        Скорая медицинская помощь
                    </h3>

                        <a href="tel:+996700333636" className="footer__tel" >+996 (700) 333 636</a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

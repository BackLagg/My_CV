import React, { useState } from 'react';
import LanguageSwitch from './swiches/LanguageSwitch';
import ThemeSwitch from './swiches/ThemeSwitch';
import BurgerMenu from './BurgerMenu';
import '../styles/Header.css';

const Header = ({ language, setLanguage, isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isDarkMode ? 'dark-header' : 'light-header'} `}>
            <div className="logo">MyLogo</div>
            <div className="center">
                <h1>{language === 'EN' ? 'Arseny' : 'Арсений'}</h1>
            </div>

            {/* Свичи для широких экранов */}
            <div className="desktop-only">
                <LanguageSwitch className="desktop-only" language={language} setLanguage={setLanguage} />
                <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>

            {/* Бургер-кнопка для мобильных устройств */}
            <div className="burger-container mobile-only">
                <BurgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
            </div>
            {/* Навигация и свичи в бургер-меню на мобильных устройствах */}
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <button className="close-menu" onClick={handleMenuToggle}>✕</button>
                    <div className="mobile-switches">
                        <LanguageSwitch language={language} setLanguage={setLanguage} />
                        <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    </div>
                    <ul>
                        <li><a href="#welcome">{language === 'EN' ? 'Welcome' : 'Приветствие'}</a></li>
                        <li><a href="#about">{language === 'EN' ? 'About Us' : 'О Нас'}</a></li>
                        <li><a href="#contact">{language === 'EN' ? 'Contact Us' : 'Связаться с Нами'}</a></li>
                        <li><a href="#services">{language === 'EN' ? 'Services' : 'Услуги'}</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;

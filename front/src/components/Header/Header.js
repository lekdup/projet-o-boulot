import './Header.scss';
import logo from '../../assets/logo.png';
import Profile from './Profile/Profile';
import MenuBurger from './MenuBurger/MenuBurger';

import { useState } from 'react';
import { useEffect } from 'react';

function Header() {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    console.log(scrollPosition)

    const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
        <header className={`${scrollPosition > 40 ? "bcg" : ""}`}>
            <div className="logo">
                <img className="logo-image" src={logo} alt="Logo O'Boulot en couleur Orange" />
            </div>
            <div className="Menu-profile">
                <Profile />
                <MenuBurger />
            </div>
        </header>
    )
}

export default Header;
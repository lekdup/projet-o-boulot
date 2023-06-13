import { useState, useEffect } from 'react';

import './Header.scss';
import Profile from './Profile/Profile';
import MenuBurger from './MenuBurger/MenuBurger';


function Header({ logoColors }) {
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
                <img className="logo-image" src={logoColors} alt="Logo O'Boulot en couleur Orange" />
            </div>
            <div className="Menu-profile">
                <Profile />
                <MenuBurger />
            </div>
        </header>
    )
}

export default Header;
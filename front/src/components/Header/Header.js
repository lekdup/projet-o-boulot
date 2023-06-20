import { useState, useEffect } from 'react';

import './Header.scss';
import Profile from './Profile/Profile';
import MenuBurger from './MenuBurger/MenuBurger';
import logoOboulot from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function Header({ logoColors }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        console.log(position);
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
            <div className="container-head">
                <div className="logo">
                    <Link to="/">
                        <img className="logo-image" src={logoOboulot} alt="Logo O'Boulot en couleur Orange" />
                    </Link>
                </div>
                <div className="Menu-profile">
                    <Profile logoColors={logoColors}/>
                    <MenuBurger />
                </div>
            </div>
        </header>
    )
}

export default Header;
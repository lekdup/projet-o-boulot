import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../Header/Header.scss';
import logoProfileEntreprise from '../../../assets/company.png';
import logoOboulot from '../../../assets/logo.png'
import ConnectedProfile from '../../ConnectedProfile/ConnectedProfile';
import ConnectedNavbar from '../../ConnectedNavbar/ConnectedNavbar';


function EntrepriseHeader({ logoColors }) {
    const [scrollPosition, setScrollPosition] = useState(0);

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
            <div className="container-head">
                <div className="logo">
                    <Link to="/">
                        <img className="logo-image" src={logoOboulot} alt="Logo O'Boulot en couleur bleu" />
                    </Link>
                </div>
                <div className="Menus">
                    <div className="Menus-profile">
                        <ConnectedProfile logoColors={logoColors}/>
                    </div>
                    <div className="Menus-navbar">
                        <ConnectedNavbar />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default EntrepriseHeader;
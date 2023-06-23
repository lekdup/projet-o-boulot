import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../Header/Header.scss';
import logoProfileEntreprise from '../../../assets/company.png';
import logoOboulot from '../../../assets/logo.png'


function EntrepriseHeader() {
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
                <div className="Menu-profile">
                </div>
            </div>
        </header>
    )
}

export default EntrepriseHeader;
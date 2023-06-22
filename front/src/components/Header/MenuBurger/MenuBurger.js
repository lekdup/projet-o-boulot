import { Link } from 'react-router-dom';
import './MenuBurger.scss';
// import './NavBar.scss';
import { useEffect, useRef, useState } from 'react';

function MenuBurger() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.addEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleButtonClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return( 
        <nav className={`MenuBurger ${isOpen ? "show" : ""}`} >
            <ul className="MenuBurger__nav">
                <Link to="/"><li className="MenuBurger__nav--extend">O'Boulot <span className="MenuBurger__nav--arrow">&gt;</span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="#qui-sommes-nous"><li>Qui sommes-nous</li></Link>
                        <Link to="/*"><li>Prestations</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </li></Link>
                <Link to="/candidat/mes-donnees"><li className="MenuBurger__nav--extend">Candidat <span className="MenuBurger__nav--arrow">&gt;</span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="/candidat/joblist"><li>Trouver un boulot</li></Link>
                        <Link to="/candidat/login"><li>Se connecter</li></Link>
                    </ul>
                </li></Link>
                <Link to="/entreprise/mes-donnees"><li className="MenuBurger__nav--extend">Entreprise <span className="MenuBurger__nav--arrow">&gt;</span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="/*"><li>Publier un Boulot</li></Link>
                        <Link to="/entreprise/login"><li>Se connecter</li></Link>
                    </ul>
                </li></Link>
                <Link to="/actualites"><li>Actualités</li></Link>
                <Link to="/aide"><li>Aide</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button
                className="MenuBurger__logo"
                onClick={handleButtonClick}
            >
                <span className="MenuBurger__logo--bar"></span>
            </button>
        </nav>
    ) 
}

export default MenuBurger;
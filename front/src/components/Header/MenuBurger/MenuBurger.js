import { Link } from 'react-router-dom';
import './MenuBurger.scss';
// import './NavBar.scss';
import { useEffect, useRef, useState } from 'react';

function MenuBurger() {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            const clickedElement = e.target;
            const isNestedMenu = clickedElement.closest('.MenuBurger__nav--extend');

            if (isNestedMenu) {
                return;
            }
            if (buttonRef.current && !buttonRef.current.contains(clickedElement)) {
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
                <li className="MenuBurger__nav--extend">O'Boulot <span className="MenuBurger__nav--arrow"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="/qui-sommes-nous"><li>Qui sommes-nous</li></Link>
                        <Link to="/*"><li>Prestations</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </li>
                <li className="MenuBurger__nav--extend">Candidat <span className="MenuBurger__nav--arrow"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="/candidat/joblist"><li>Trouver un boulot</li></Link>
                        <Link to="/candidat/login"><li>Se connecter</li></Link>
                    </ul>
                </li>
                <li className="MenuBurger__nav--extend">Entreprise <span className="MenuBurger__nav--arrow"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></span>
                    <ul className="MenuBurger__nav--extend-nestedMenu">
                        <Link to="/entreprise/ajout-publication"><li>Publier un Boulot</li></Link>
                        <Link to="/entreprise/login"><li>Se connecter</li></Link>
                    </ul>
                </li>
                <Link to="/actualites"><li>Actualités</li></Link>
                <Link to="/aide"><li>Aide</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button
                className="MenuBurger__logo"
                ref={buttonRef}
                onClick={handleButtonClick}
            >
                <span className="MenuBurger__logo--bar"></span>
            </button>
        </nav>
    ) 
}

export default MenuBurger;
import { Link } from 'react-router-dom';
import './ConnectedNavbar.scss';
import useAuth from '../../hooks/useAuth';
import MenuBurger from '../Header/MenuBurger/MenuBurger';
import useToggle from '../../hooks/useToggle';

function ConnectedNavbar() {
    const { auth } = useAuth();
    const [isOpen, handleButtonClick, buttonRef] = useToggle();

    return (
        <>
        {auth.roles === 'ROLE_CANDIDATE' ? (
        <nav className={`navbar ${isOpen ? "show" : ""}`}>
            <ul className="navbar-menu">
                <li className="navbar-menu-dropdown">O'Boulot <svg className="navbar-menu-arrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    <ul className="navbar-menu-dropdown-nested">
                        <Link to="/"><li>Mes favoris</li></Link>
                        <Link to="/"><li>Mes missions</li></Link>
                        <Link to="/"><li>Mes alertes</li></Link>
                        <Link to="/"><li>Mes documents</li></Link>
                    </ul>
                </li>
                <Link to="/candidat/joblist"><li>Trouver un Boulot</li></Link>
                <Link to="/actualites"><li>Actualités</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button
                className="navbar-burger"
                ref={buttonRef}
                onClick={handleButtonClick}
            >
                <span className="navbar-burger-bar"></span>
            </button>
        </nav>
        ) : (auth.roles === 'ROLE_COMPANY' ? (
            <nav className={`navbar ${isOpen ? "show" : ""}`}>
            <ul className="navbar-menu">
                <li className="navbar-menu-dropdown">O'Boulot <svg className="navbar-menu-arrow" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    <ul className="navbar-menu-dropdown-nested">
                        <Link to="/"><li>Mes missions</li></Link>
                        <Link to="/"><li>Mes alertes</li></Link>
                        <Link to="/"><li>Mes documents</li></Link>
                    </ul>
                </li>
                <Link to="/candidat/joblist"><li>Publier un Boulot</li></Link>
                <Link to="/actualites"><li>Actualités</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button
                className="navbar-burger"
                ref={buttonRef}
                onClick={handleButtonClick}
            >
                <span className="navbar-burger-bar"></span>
            </button>
        </nav>
        ) : (
            <MenuBurger />
        )
        )}
        </>
    )
}

export default ConnectedNavbar;
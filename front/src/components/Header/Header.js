import './Header.scss';
import logo from '../../assets/logo.png';
import Profile from './Profile/Profile';
import MenuBurger from './MenuBurger/MenuBurger';

function Header() {
    return (
        <header>
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
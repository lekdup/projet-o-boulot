import { Link } from 'react-router-dom';
import './Profile.scss';
import useToggle from '../../../hooks/useToggle';

function Profile({ logoColors }) {
    const [isOpen, handleButtonClick, buttonRef] = useToggle();
    return(
        <section className='profile'>
            <img
                className="profile-image"
                src={logoColors}
                alt="profile icon"
                ref={buttonRef}
                onClick={handleButtonClick}
            />        
            <ul className={`profile-select ${isOpen ? "show" : ""}`} >
                <Link to="/candidat"><li className="profile-select-btn">Candidat</li></Link>
                <Link to="/entreprise"><li className="profile-select-btn">Entreprise</li></Link>
            </ul>
        </section>
    )
}

export default Profile;
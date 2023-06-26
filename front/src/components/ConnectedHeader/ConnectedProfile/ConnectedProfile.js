import { Link } from 'react-router-dom';
import './ConnectedProfile.scss';
import useToggle from '../../../hooks/useToggle';
import useAuth from '../../../hooks/useAuth';

function ConnectedProfile({ logoColors }) {
    const [isOpen, handleButtonClick, buttonRef] = useToggle();
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        localStorage.clear();
        setAuth({})
    }

    return (
        <section className='profile'>
            <img
                className="profile-image"
                src={logoColors}
                alt="profile icon"
                ref={buttonRef}
                onClick={handleButtonClick}
            />        
            <ul className={`profile-option ${isOpen ? "show" : ""}`} >
                <Link to={auth.roles === 'ROLE_COMPANY' ? "/entreprise" : "/" && auth.roles === 'ROLE_CANDIDATE' ? "/candidat" : "/"}><li className={`profile-option-btn ${auth.roles === 'ROLE_COMPANY' ? "company" : "" && auth.roles === 'ROLE_CANDIDATE' ? "candidate" : ""}`}>Mon espace</li></Link>
                <Link to="/"><li className={`profile-option-btn ${auth.roles === 'ROLE_COMPANY' ? "company" : "" && auth.roles === 'ROLE_CANDIDATE' ? "candidate" : ""}`} onClick={handleLogout}>Se déconnecter</li></Link>
            </ul>
        </section>
    )
}

export default ConnectedProfile;
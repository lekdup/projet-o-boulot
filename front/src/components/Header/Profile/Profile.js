import './Profile.scss';
import anonyme from '../../../assets/anonyme.png';

function Profile() {
    return(
        <section className='profile'>
            <img className="profile-image" src={anonyme} alt="profile icon" />        
        </section>
    )
}

export default Profile;
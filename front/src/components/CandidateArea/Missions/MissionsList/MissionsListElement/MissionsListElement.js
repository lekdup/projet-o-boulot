import './MissionsListElement.scss';
import { Link
 } from 'react-router-dom';
function MissionsListElement({menuValue, filteredOffer}){
    
    return(
        <div className='MissionsListElement'>
        <div className='MissionsListElement-bookmark'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"> <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" fill="#adadad"></path> </svg>
        </div>
        
<Link to={`/candidat/jobcard/${filteredOffer.id}`} className='MissionsListElement-title'> {filteredOffer.entitled} </Link>
<div className='MissionsListElement-tags'> <p> {filteredOffer.place}</p></div>
<button className={menuValue === 'saved' ?'MissionsListElement-btn' : 'MissionsListElement-btn hidden'}> Je postule !</button>
<div className={menuValue === 'coming' ?'MissionsListElement-tags' : ' MissionsListElement-tags done'}> <p> Début de ta mission : 5/01/2023</p></div>

   
</div>
 )
}

export default MissionsListElement;
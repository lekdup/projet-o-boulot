import './Missions.scss';
import Card from '../Joblist/Card/Card'
import MissionsList from '../Missions/MissionsList/MissionsList'

/**
 * Component to manage missions in candidate area
 */
function Missions(){
return (
    <div className='Missions'>
        <nav >
            <ul className='Missions-nav'>
                <li className='Missions-element' href="#"> Enregistrées</li>
                <li className='Missions-element' href="#"> À venir </li>
                <li className='Missions-element' href="#"> Réalisées</li>
            </ul>
        </nav>
        <MissionsList />
    </div>
)
};

export default Missions;

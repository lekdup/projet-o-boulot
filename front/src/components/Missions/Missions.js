import './Missions.scss';
import MissionsList from '../Missions/MissionsList/MissionsList'

import {useState} from 'react';

/**
 * Component to manage missions in candidate area
 */
function Missions(){

    const [menuValue, setMenuValue] = useState('');

    const handleClick = (e) => {
        const navValue = e.target.getAttribute('data-value');
        setMenuValue(navValue);
        console.log(navValue);
    };
return (
    <div className='Missions'>
        <nav >
            <ul className='Missions-nav'>
                <li onClick={handleClick} className='Missions-element' href="#" data-value="saved"> Enregistrées</li>
                <li onClick={handleClick} className='Missions-element' href="#" data-value="coming"> À venir </li>
                <li onClick={handleClick} className='Missions-element' href="#" data-value="done"> Réalisées</li>
            </ul>
        </nav>
        <MissionsList menuValue={menuValue}/>
    </div>
)
};

export default Missions;

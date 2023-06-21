import'./CandidateArea.scss';
import logoCandidatArea from '../../assets/logoCandidatArea.svg';
import { Link } from 'react-router-dom';

import {useSelector} from 'react-redux';


function CandidatArea () {

    const user = useSelector(state => state.candidate.user);
    console.log(user);

    return(
        <div className="CandidateArea">
            
            <h1 className="CandidateArea-title"> Bonjour {user.firstname ?? user.firstname} </h1>

            <img className="EntrepriseArea-img" src={logoCandidatArea} alt="Logo Candidate Area Page" />
            
            <div className='CandidateArea-buttons'>
                <button className='CandidateArea-button' ><Link to="/candidat/mes-donnes"> Mes données personnelles</Link></button>
                
                <button className='CandidateArea-button' >Mes missions</button>
                <button className='CandidateArea-button' >Mes alertes</button>
                <button className='CandidateArea-button' >Mes documents</button>
            </div>

        </div>
    )
}

export default CandidatArea;
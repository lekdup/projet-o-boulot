import'./CandidateArea.scss';
import logoCandidatArea from '../../assets/logoCandidatArea.svg';


function CandidatArea () {
    return(
        <div className="CandidateArea">
            
            <h1 className="CandidateArea-title"> Bonjour candidat X </h1>

            <img className="EntrepriseArea-img" src={logoCandidatArea} alt="Logo Candidate Area Page" />
            
            <div className='CandidateArea-buttons'>
                <button className='CandidateArea-button' >Mes données personnelles</button>
                <button className='CandidateArea-button' >Mes missions</button>
                <button className='CandidateArea-button' >Mes alertes</button>
                <button className='CandidateArea-button' >Mes documents</button>
            </div>

        </div>
    )
}

export default CandidatArea;
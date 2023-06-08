import'./CandidateArea.scss';



function CandidatArea () {
    return(
        <div className="CandidateArea">
            
            <h1 className="CandidateArea-title"> Bonjour candidat X </h1>
            
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
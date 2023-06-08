import'./CandidateArea.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function CandidatArea () {
    return(
        <div className="CandidateArea">
            <Header />
            
            <h1 className="CandidateArea-title"> Bonjour candidat X </h1>
            
            <div className='CandidateArea-buttons'>
                <button className='CandidateArea-button' >Mes données personnelles</button>
                <button className='CandidateArea-button' >Mes missions</button>
                <button className='CandidateArea-button' >Mes alertes</button>
                <button className='CandidateArea-button' >Mes documents</button>
            </div>
            

            <Footer />

        </div>
    )
}

export default CandidatArea;
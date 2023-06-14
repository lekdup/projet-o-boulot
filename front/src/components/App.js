import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';

import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import AboutUs from './AboutUs/AboutUs';
import Legacy from './Legacy/Legacy';
import Joblist from './Joblist/Joblist';
import Jobcard from './Jobcard/Jobcard';
import Contact from './Contact/Contact';

import ConnectionCandidate from './ConnectionCandidate/ConnectionCandidate';
import CandidatArea from './CandidateArea/CandidateArea';
import CandidateDataPage from './CandidateArea/CandidateDataPage/CandidateDataPage';
import CandidateAlertPage from './CandidateArea/CandidateAlertPage/CandidateAlertPage';
import CandidateModificationPage from './CandidateArea/CandidateModificationPage/CandidateModificationPage';

import ConnectionEntreprise from './ConnectionEntreprise/ConnectionEntreprise';
import EntrepriseArea from './EntrepriseArea/EntrepriseArea';
import EntrepriseModificationPage from './EntrepriseArea/EntrepriseModificationPage/EntrepriseModificationPage';
import EntrepriseDataPage from './EntrepriseArea/EntrepriseDataPage/EntrepriseDataPage';
import EntrepriseAlertPage from './EntrepriseArea/EntrepriseAlertPage/EntrepriseAlertPage';
import EntrepriseAddAlertPage from './EntrepriseArea/EntrepriseAddAlertPage/EntrepriseAddAlertPage';

import Footer from './Footer/Footer';

import logoNeutre from '../assets/anonyme.png';
import logoEntreprise from '../assets/company.png';
import logoCandidat from '../assets/candidate.png';

function App() {
  const location = useLocation();
  
  const getDifferentLogoColor = () => {
    if (location.pathname.startsWith('/candidat')) {
        return logoCandidat;
    } else if (location.pathname.startsWith('/entreprise')) {
        return logoEntreprise;
    } else {
        return logoNeutre;
    }
  }


  return (
    <div className="App">
      
      <Header logoColors={getDifferentLogoColor()}/>

      <div className="main-container">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/qui-sommes-nous" element={<AboutUs />} />
          <Route path="/mentions-legales" element={<Legacy />} /> 
          <Route path="/contact" element={<Contact />} /> 

          <Route path="/candidat/login" element={<ConnectionCandidate /> } />
          <Route path="/candidat" element={<CandidatArea />} />
          <Route path="/candidat/mes-donnes" element={<CandidateDataPage />} />
          <Route path="/candidat/mes-donnes/done" element={<CandidateAlertPage />} />
          <Route path="/candidat/mes-donnes/modification" element={<CandidateModificationPage />} />
          <Route path="/candidat/joblist" element={<Joblist/>} />

          <Route path="/entreprise/login" element={<ConnectionEntreprise />} />
          <Route path="/entreprise" element={<EntrepriseArea />} />
          <Route path="/entreprise/mes-donnes" element={<EntrepriseDataPage />} />
          <Route path="/entreprise/mes-donnes/done" element={<EntrepriseAlertPage />} />
          <Route path="/entreprise/mes-donnes/modification" element={<EntrepriseModificationPage />} />
          <Route path="/entreprise/ajout-publication/done" element={<EntrepriseAddAlertPage />} />

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;

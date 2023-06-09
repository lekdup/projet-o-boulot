import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Homepage from './Homepage/Homepage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import CandidatArea from './CandidateArea/CandidateArea';
import CandidateDataPage from './CandidateArea/CandidateDataPage/CandidateDataPage';
import CandidateAlertPage from './CandidateArea/CandidateAlertPage/CandidateAlertPage';
import CandidateModificationPage from './CandidateArea/CandidateModificationPage/CandidateModificationPage';

import EntrepriseArea from './EntrepriseArea/EntrepriseArea';
import EntrepriseModificationPage from './EntrepriseArea/EntrepriseModificationPage/EntrepriseModificationPage';
import EntrepriseDataPage from './EntrepriseArea/EntrepriseDataPage/EntrepriseDataPage';
import EntrepriseAlertPage from './EntrepriseArea/EntrepriseAlertPage/EntrepriseAlertPage';
import EntrepriseAddAlertPage from './EntrepriseArea/EntrepriseAddAlertPage/EntrepriseAddAlertPage';

import AboutUs from './AboutUs/AboutUs';
import Legacy from './Legacy/Legacy';

function App() {

  return (
    
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/candidat" element={<CandidatArea />} />
        <Route path="/candidat/mes-donnes" element={<CandidateDataPage />} />
        <Route path="/candidat/mes-donnes/done" element={<CandidateAlertPage />} />
        <Route path="/candidat/mes-donnes/modification" element={<CandidateModificationPage />} />

        <Route path="/entreprise" element={<EntrepriseArea />} />
        <Route path="/entreprise/mes-donnes" element={<EntrepriseDataPage />} />
        <Route path="/entreprise/mes-donnes/done" element={<EntrepriseAlertPage />} />
        <Route path="/entreprise/mes-donnes/modification" element={<EntrepriseModificationPage />} />
        <Route path="/entreprise/ajout-publication/done" element={<EntrepriseAddAlertPage />} /> 


        <Route path="/qui-sommes-nous" element={<AboutUs />} />
        <Route path="/mentions-legales" element={<Legacy />} />

       </Routes>

      

       <Footer />

    </div>
  );
}

export default App;

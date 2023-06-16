import { Routes, Route, useLocation} from 'react-router-dom';

import './App.scss';

import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Help from './Help/Help';
import AboutUs from './AboutUs/AboutUs';
import Legacy from './Legacy/Legacy';
import Joblist from './Joblist/Joblist';
import Jobcard from './Jobcard/Jobcard';
import Contact from './Contact/Contact';

import PrivateRoutesCandidat from '../utils/PrivateRoutesCandidat';
import PrivateRoutesEntreprise from '../utils/PrivateRoutesEntreprise';

import ConnectionCandidate from './ConnectionCandidate/ConnectionCandidate';
import CandidateSubscription from './CandidateSubscription/CandidateSubscription';
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
import Error404 from './Error404/Error404';
import CompanySubscription from './CompanySubscription/CompanySubscription';

<<<<<<< HEAD
=======
import PrivateRoutesCandidat from '../utils/PrivateRoutesCandidat';
import PrivateRoutesEntreprise from '../utils/PrivateRoutesEntreprise';
import Actus from './Actus/Actus';
import Article from './Article/Article';
>>>>>>> cd2f556d6623fd657d3564e249748e4863af476e

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
<<<<<<< HEAD

        {/* private routes, for only logged in clients */}
            <Route element={<PrivateRoutesCandidat />}>
              <Route path="/candidat" element={<CandidatArea />} />
              <Route path="/candidat/mes-donnes" element={<CandidateDataPage />} />
              <Route path="/candidat/mes-donnes/done" element={<CandidateAlertPage />} />
              <Route path="/candidat/mes-donnes/modification" element={<CandidateModificationPage />} />
=======
        
            //ROUTES PRIVES PUBLIC
            <Route element={<PrivateRoutesCandidat />}>
              <Route path="/candidat/mes-donnees" element={<CandidateDataPage />} />
              <Route path="/candidat/mes-donnees/done" element={<CandidateAlertPage />} />
              <Route path="/candidat/mes-donnees/modification" element={<CandidateModificationPage />} />
              <Route path="/candidat" element={<CandidatArea />} />
>>>>>>> cd2f556d6623fd657d3564e249748e4863af476e
            </Route> 

            //ROUTES PRIVES ENTREPRISE
            <Route element={<PrivateRoutesEntreprise />}>
<<<<<<< HEAD
              <Route path="/entreprise" element={<EntrepriseArea />} />
              <Route path="/entreprise/mes-donnes" element={<EntrepriseDataPage />} />
              <Route path="/entreprise/mes-donnes/done" element={<EntrepriseAlertPage />} />
              <Route path="/entreprise/mes-donnes/modification" element={<EntrepriseModificationPage />} />
=======
              <Route path="/entreprise/mes-donnees" element={<EntrepriseDataPage />} />
              <Route path="/entreprise/mes-donnees/done" element={<EntrepriseAlertPage />} />
              <Route path="/entreprise/mes-donnees/modification" element={<EntrepriseModificationPage />} />
>>>>>>> cd2f556d6623fd657d3564e249748e4863af476e
              <Route path="/entreprise/ajout-publication/done" element={<EntrepriseAddAlertPage />} />
              <Route path="/entreprise" element={<EntrepriseArea />} />
            </Route>

<<<<<<< HEAD
        {/* public routes, for everybody */}
=======
            //ROUTES PUBLIC
>>>>>>> cd2f556d6623fd657d3564e249748e4863af476e
            <Route path="/" element={<Homepage />} />
            <Route path="/actualites" element={<Actus />} />

            // a remplacer par l'url suivante: /actualites/:id
            <Route path="/article" element={<Article />} /> 
            
            <Route path="/qui-sommes-nous" element={<AboutUs />} />
            <Route path="/mentions-legales" element={<Legacy />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/aide" element={<Help />} />
            <Route path="/candidat/login" element={<ConnectionCandidate /> } />
            <Route path="/candidat/joblist" element={<Joblist/>} />
<<<<<<< HEAD
            <Route path="/candidat/inscription" element={<CandidateSubscription />} />

            <Route path="/entreprise/login" element={<ConnectionEntreprise />} />
            <Route path="/entreprise/inscription" element={<CompanySubscription />} />

            <Route path="*" element={<Error404 />} />
=======
            <Route path="/entreprise/login" element={<ConnectionEntreprise />} />
            
>>>>>>> cd2f556d6623fd657d3564e249748e4863af476e

        </Routes>
        
      </div>

      <Footer />

    </div>
  );
}

export default App;

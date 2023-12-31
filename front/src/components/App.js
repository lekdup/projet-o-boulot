import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import './App.scss';

import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Help from './Help/Help';
import AboutUs from './AboutUs/AboutUs';
import Legacy from './Legacy/Legacy';
import Joblist from './Joblist/Joblist';

import Contact from './Contact/Contact';

import PrivateRoutesCandidat from '../utils/PrivateRoutesCandidat';
import PrivateRoutesEntreprise from '../utils/PrivateRoutesEntreprise';

import ConnectionCandidate from './Connections/ConnectionCandidate';
import CandidateSubscription from './Subscriptions/CandidateSubscription';
import CandidateSubscriptionDone from './Subscriptions/CandidateSubscriptionDone/CandidateSubscriptionDone';
import CandidatArea from './CandidateArea/CandidateArea';
import CandidateDataPage from './CandidateArea/CandidateDataPage/CandidateDataPage';
import CandidateAlertPage from './CandidateArea/CandidateAlertPage/CandidateAlertPage';
import CandidateModificationPage from './CandidateArea/CandidateModificationPage/CandidateModificationPage';

import ConnectionEntreprise from './Connections/ConnectionEntreprise';
import CompanySubscription from './Subscriptions/CompanySubscription';
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

import Actus from './Actus/Actus';
import EntrepriseAddOffer from './EntrepriseArea/EntrepriseAddOffer/EntrepriseAddOffer';

import useAuth from '../hooks/useAuth';
import ConnectedHeader from './ConnectedHeader/ConnectedHeader';
import { useDispatch } from 'react-redux';
import api from '../api/api';
import { setUserEntreprise } from '../actions/entreprise';
import { setUser } from '../actions/candidate';

function App() {
  const { auth, setAuth } = useAuth();
  
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const roles = localStorage.getItem("roles");

    const fetchUserData = () => {
      if (roles === 'ROLE_COMPANY') {
        api.get('/entreprises/me')
        .then((res) => {
          dispatch(setUserEntreprise(res.data))

        }).catch ((err) => {
          console.error("Cannot fetch User");
        })
      } else if (roles === 'ROLE_CANDIDATE') {
        api.get('/candidats/me')
        .then((res) => {
          dispatch(setUser(res.data))
        }).catch((err) => {
          console.error(err.status);
        })
      }
    }

    if(token && roles) {
      setAuth({ roles, token })
      setIsLoading(true)
      fetchUserData();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500)
    }

  }, []);
  // console.log(userEntreprise);
  
  const getDifferentLogoColor = () => {
    if (auth.roles === 'ROLE_CANDIDATE') {
        return logoCandidat;
    } else if (auth.roles === 'ROLE_COMPANY') {
        return logoEntreprise;
    } else {
        return logoNeutre;
    }
  }

  
  if(isLoading) {
    return (
      <div className="loading-container">
        <Bars color="#FF772B"/>
      </div>
    )
  }
  return (
    
    <main className="App">
      {!auth.roles ? (
      <Header logoColors={getDifferentLogoColor()}/>
      ) : (
      <ConnectedHeader logoColors={getDifferentLogoColor()}/>
      )}
        
        <div className="main-container">
          <Routes>

        {/* private routes, for only logged in clients */}
            {!isLoading &&
            <Route element={<PrivateRoutesCandidat />}>
              <Route path="/candidat" element={<CandidatArea />} />
              <Route path="/candidat/mes-donnees" element={<CandidateDataPage />} />
              <Route path="/candidat/mes-donnees/done" element={<CandidateAlertPage />} />
              <Route path="/candidat/mes-donnees/modification" element={<CandidateModificationPage />} />
            </Route> 
            }

            {/* private routes, for only logged in entreprise */}
            {!isLoading &&
            <Route element={<PrivateRoutesEntreprise />}>
              <Route path="/entreprise" element={<EntrepriseArea />} />
              <Route path="/entreprise/mes-donnees" element={<EntrepriseDataPage />} />
              <Route path="/entreprise/mes-donnees/done" element={<EntrepriseAlertPage />} />
              <Route path="/entreprise/ajout-publication/done" element={<EntrepriseAddAlertPage />} />
              <Route path="/entreprise/mes-donnees/modification" element={<EntrepriseModificationPage />} />
            </Route>
            }

            {/* public routes, for everybody */}
            <Route path="/aide" element={<Help />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Homepage />} />

            {/* a remplacer par la route suivante: /actualites/:id */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/actualites" element={<Actus />} />
            <Route path="/qui-sommes-nous" element={<AboutUs />} />
            <Route path="/mentions-legales" element={<Legacy />} /> 

            <Route path="/candidat/joblist" element={<Joblist/>} />
            <Route path="/candidat/login" element={<ConnectionCandidate /> } />
            <Route path="/candidat/inscription" element={<CandidateSubscription />} />
            <Route path="/candidat/inscription/done" element={<CandidateSubscriptionDone />} />
            <Route path="/entreprise/login" element={<ConnectionEntreprise />} />
            <Route path="/entreprise/inscription" element={<CompanySubscription />} />
            <Route path="/entreprise/ajout-publication" element={<EntrepriseAddOffer />} />

        </Routes>
        
        </div>

      <Footer />

    </main>
  );
}

export default App;

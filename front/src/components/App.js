import './App.scss';
import Homepage from './Homepage/Homepage';
import CandidatArea from './CandidateArea/CandidateArea';
import { Routes, Route } from 'react-router-dom';
import EntrepriseArea from './EntrepriseArea/EntrepriseArea';
import CandidateDataPage from './CandidateArea/CandidateDataPage/CandidateDataPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/candidat" element={<CandidatArea />} />
        <Route path="/entreprise" element={<EntrepriseArea />} />
        <Route path="/candidat/mes-donnes" element={<CandidateDataPage />} />
       </Routes>

       <Footer />

    </div>
  );
}

export default App;

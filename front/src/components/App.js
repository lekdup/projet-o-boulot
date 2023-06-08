import './App.scss';
import Homepage from './Homepage/Homepage';
import CandidatArea from './CandidateArea/CandidateArea';
import { Routes, Route } from 'react-router-dom';
import EntrepriseArea from './EntrepriseArea/EntrepriseArea';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/candidat" element={<CandidatArea />} />
        <Route path="/entreprise" element={<EntrepriseArea />} />
       </Routes>

    </div>
  );
}

export default App;

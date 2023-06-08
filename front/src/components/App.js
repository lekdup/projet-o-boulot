import './App.scss';
import Homepage from './Homepage/Homepage';
import CandidatArea from './CandidateArea/CandidateArea';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

     <Routes>
       <Route path="/" element={<Homepage />} />
       <Route path="/candidate-area" element={<CandidatArea />} />


    </Routes>
    </div>
  );
}

export default App;

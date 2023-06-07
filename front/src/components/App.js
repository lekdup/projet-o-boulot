import './App.scss';
import Candidat from './Candidat/Candidat';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <article className="intro">
        <h1>O'Boulot</h1>
        <p>Pour ceux qui en veulent</p>
      </article>
      <Candidat />
    </div>
  );
}

export default App;

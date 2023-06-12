import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Actus from './Actus/Actus';
import Article from './Article/Article';

function App() {
  return (
    <div className="App">
      <Header />
        <Article />
      <Footer />
    </div>
  );
}

export default App;

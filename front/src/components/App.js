import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import Help from './Help/Help';

function App() {
  return (
    <div className="App">
      <Header />
        <Help />
      <Footer />
    </div>
  );
}

export default App;

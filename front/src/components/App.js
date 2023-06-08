import './App.scss';
import Header from './Header/Header';
import Footer  from './Footer/Footer';
import Joblist from './Joblist/Joblist';
import Jobcard from './Jobcard/Jobcard';

function App() {
  return (
    <div className="App">
      <Header />
      <Jobcard/>
      <Footer/>
    </div>
  );
}

export default App;

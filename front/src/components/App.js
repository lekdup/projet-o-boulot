import './App.scss';
import Header from './Header/Header';
import Footer  from './Footer/Footer';
import Joblist from './Joblist/Joblist';
import Jobcard from './Jobcard/Jobcard';
import Missions from './Missions/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Missions/>
      <Footer/>
    </div>
  );
}

export default App;

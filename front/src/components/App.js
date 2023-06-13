import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import Homepage from './Homepage/Homepage';
import logoNeutre from '../assets/logo.png';
import logoEntreprise from '../assets/company.png';
import logoCandidat from '../assets/candidate.png';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();

    console.log(scrollPosition)

    const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


const getDifferentLogoColor = () => {
  if (location.pathname.startsWith('/candidat')) {
      return logoCandidat;
  } else if (location.pathname.startsWith('/entreprise')) {
      return logoEntreprise;
  } else {
      return logoNeutre;
  }
}


console.log(scrollPosition);

  return (
    <div className="App">
      <Header logoColors={getDifferentLogoColor}/>
      <Homepage />
      <Footer />
    </div>
    
  );
}

export default App;

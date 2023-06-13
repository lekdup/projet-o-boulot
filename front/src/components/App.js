import './App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Homepage from './Homepage/Homepage';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);

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

console.log(scrollPosition);

  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
    
  );
}

export default App;

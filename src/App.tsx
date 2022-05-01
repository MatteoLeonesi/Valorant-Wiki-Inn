import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Weapons from './pages/Weapons';

const App = () => {
  return (
    <div className='App '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='weapons' element={<Weapons />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

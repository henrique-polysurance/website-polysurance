import './styles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Solutions from './pages/Solutions';
import Tech from './pages/Tech';
import DriversApp from './pages/DriversApp';
import Support from './pages/Support';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/drivers-app' element={<DriversApp />} />
          <Route path='/support' element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import PropertyDetails from './pages/Properties/PropertyDetails';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/property/:id" element={<PropertyDetails/>}/>
        <Route path="*" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;

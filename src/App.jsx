import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div>
        <Header />
       
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

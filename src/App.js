// App.js
import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import About from "./pages/AboutPage"
import Contact from "./pages/Contact"
import Payment from "./pages/PaymentPage"
import Ordered from "./pages/Ordered"


function App() {
  const [price, setPrice] = useState(0); 
  console.log(price)


  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing"   element={<PricingPage price={price}  setPrice={setPrice}  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment"   element={<Payment price={price}  setPrice={setPrice}  />} />
          <Route path="/ordered"    element={<Ordered/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

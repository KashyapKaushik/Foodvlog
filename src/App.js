
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import About from '../src/pages/about.js';
import Home from './pages/home.js';
import Blogpost
 from './pages/Blogpost.js';
import {
  BrowserRouter as Router,
   Route,
  Routes,
  Link
} from "react-router-dom";
import Receipe from './pages/Receipe.js';
import Contactus from './pages/Contactus.js';
import Element from './pages/Element.js';

function App() {
  return (
  <>
  <Router>
    <Header/>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/home" element={<Home />}></Route>
    <Route exact path='/aboutus' element={<About />}></Route>
    <Route exact path='/blogpost' element={<Blogpost />}></Route>
    <Route exact path='/receipe' element={<Receipe />}></Route>
    <Route exact path='/contact' element={<Contactus/>}></Route>
    <Route exact path='/element' element={<Element/>}></Route>
    </Routes>
    <Footer/>
  </Router>    
  </>
    );
}

export default App;

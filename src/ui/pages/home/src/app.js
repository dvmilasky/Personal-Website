import './app.css';
import React from 'react';
import Navbar from '../../../layouts/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../../about/src';
import Resume from '../../resume/src';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
    </Routes>
    </Router>
  );
}

export default App;

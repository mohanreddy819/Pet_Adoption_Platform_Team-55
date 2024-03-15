import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import HomePage from './home';
import PetDetails from './details';
import Jenn from './jen';
import Jack from './ja';
import Fighter from './fi';
import Harold from './ha';
import Nemo from './ne';
import Lucy from './lu';
import Jen from './jen';
import Kath from './ka';
import AdminPage from './admin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:id" element={<PetDetails />} />
        <Route path="/jen" element={<Jenn />} />
        <Route path="/ja" element={<Jack />} />
        <Route path="/fi" element={<Fighter />} />
        <Route path="/ha" element={<Harold />} />
        <Route path="/ne" element={<Nemo />} />
        <Route path="/lu" element={<Lucy />} />
        <Route path="/jen" element={<Jen />} />
        <Route path="/ka" element={<Kath />} />
      </Routes>
    </Router>
  );
}

export default App;

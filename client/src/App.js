import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Map from './pages/Map';
import History from './pages/History';
import Query from './pages/Query';
import Treks from './pages/Treks';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/interesting-history" element={<History/>} />
        <Route path="/query" element={<Query/>} />
        <Route path="/trek" element={<Treks/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
};

export default App;

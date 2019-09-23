import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';


import Navigation from './components/Navigation'
import CreateUsers from './components/CreateUsers'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <CreateUsers />
      </div>
    </Router>
  );
}

export default App;
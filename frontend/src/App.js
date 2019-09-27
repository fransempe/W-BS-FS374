import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';


import Navigation from './components/Navigation'
import Signin from './components/Signin'
import Signup from './components/Signup'
import CreateUsers from './components/CreateUsers'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
          <Route path="/signin" exact component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/users" component={CreateUsers}/>
        </div>
    </Router>
  );
}

export default App;
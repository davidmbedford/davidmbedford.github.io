import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Row } from 'reactstrap';
import './App.css';

import Home from './pages/home/index.js';
import Clients from './pages/clients/index.js';
import Portfolio from './pages/portfolio/index.js';
import Skills from './pages/skills/index.js';
import Contact from './pages/contact/index.js';
import Navigation from './components/navigation/index.js';

function App() {
  return (
    <>
    <Router>
    <Row style={{ margin: 0 }}>
    <Navigation /> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/clients' component={Clients}/>
        <Route exact path='/portfolio' component={Portfolio}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Row>
    </Router>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import About from './About/About';
import Information from './Information/Information';
import { BrowserRouter as Router, Swich, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My first Assignment</h1>
        <Nav/>
        <Switch>
          <Route path='/About' exact component={About} />
          <Route path='/Information' exact component={Information} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

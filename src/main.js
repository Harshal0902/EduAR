import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import fire from "./fire"

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import HomeHi from './components/Home/HomeHi';
import Chatbot from "./components/Chatbot/Chatbot"
import Classpage from "./components/ClassPage/Class"
import Model from "./components/ModelsPage/Models"
import Fade from 'react-reveal/Fade';

function App() {

  return (
    <Router>
      <Fade top>
        <Navbar />
      </Fade>
      <Chatbot />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/classes' exact component={Classpage} />
        <Route path='/classes/model' exact component={Model} />
        <Route path='/hi' exact component={HomeHi} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

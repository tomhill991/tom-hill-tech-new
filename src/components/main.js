import React from 'react';
import LandingPage from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  </Router>
)

export default Main;

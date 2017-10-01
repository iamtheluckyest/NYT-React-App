import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Main from "./pages/Main"
import Results from "./pages/Results"
import NoMatch from "./pages/NoMatch"

const App = () => 
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/results" component={Results} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>;


export default App;

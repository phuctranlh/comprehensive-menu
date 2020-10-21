import React from 'react';
import './style/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/menu/Header";

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
        </Switch>
      </Router>
  );
}

export default App;

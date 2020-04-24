import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Infobox from './components/Infobox';
// import Card from './components/Card';
// import Riddlebox from "./components/Riddlebox";
// import Footer from './components/Footer';
import './index.css';
import 'tachyons';
import { Lockone } from './components/pages/Lockone';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Lockone} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

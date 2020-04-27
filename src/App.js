import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import 'tachyons';
import { Lockone } from './components/pages/Lockone';
import { Locktwo } from './components/pages/Locktwo';
import { Lockthree } from './components/pages/Lockthree';
import { Lockfour } from './components/pages/Lockfour';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Lockone} />
          <Route path="/locktwo" component={Locktwo} />
          <Route path="/lockthree" component={Lockthree} />
          <Route path="/lockfour" component={Lockfour} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import './App.scss';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NatoursPage from './components-natours/NatoursPage';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/alpha' component={MainPage} />
          <Route exact path='/natours' component={NatoursPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

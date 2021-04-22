import React from 'react';
import './App.css'
import Searchomponent from "./components/searchbar"
import Searchanalytics from "./components/searchanalytic"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component = {Searchomponent} />
        <Route exact path='/analytics' component = {Searchanalytics} />
        </Switch>
        
      </Router>
      

    </div>
  );
}

export default App;

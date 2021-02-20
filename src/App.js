import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Profile from './components/pages/Profile';
import './App.css';

const App = () => {
return (
<div className="App">
  <Router>
    <Switch>
      <Route path="/user/:id">
        <Profile />
      </Route>
      
      <Route path="/browse">
        <Books />
      </Route>
      
      <Route exact path="/">
        <Home />
      </Route>
    
    </Switch>
  </Router>
</div>
);
}

export default App;

import React from 'react';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Home from './components/pages/Home';
import Books from './components/pages/Books';
import Profile from './components/pages/Profile';
import Login from './components/etc/Login';
import Register from './components/etc/Register';
/*import Navigation from './components/etc/Navigation';*/
import './App.css';

function App () {
return (
<div className="App">
  <Router>
    <Switch>
      
      <Route exact path = "/">
        <Home form = {<Login />}/>
      </Route>

      <Route exact path = "/register">
        <Home form = {<Register />}/>
      </Route>
      
      <Route path="/user/:id">
        <Profile />
      </Route>
      
      <Route path="/browse">
        <Books />
      </Route>
      
    </Switch>
  </Router>
</div>
);
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Home from './scenes/Home/Home';
import JobList from './scenes/JobList/JobList';
import ErrorPage from './scenes/Error/Error';
import Contact from './scenes/Contact';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/search' component={Home} />
        <Route path='/job-list' component={JobList} />
        <Route path='/signup' component={Signup} />
        <Route path='/contactus' component={Contact} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

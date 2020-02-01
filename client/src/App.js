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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/job-list' component={JobList} />
        <Route path='/signup' component={Signup} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

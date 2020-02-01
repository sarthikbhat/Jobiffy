import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Login from './scenes/Login';
import Home from './scenes/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default App;

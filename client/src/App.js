import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, Route } from 'react-router-dom';
import Login from './scenes/Login';

function App() {
  return (
    <Route path='/' exact component={Login} />
  );
}

export default App;

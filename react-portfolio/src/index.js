import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import ParticlesBg from "particles-bg";
import './App.css';


ReactDOM.render(
  <Router>
      <App />
      <ParticlesBg type="color" bg={true}/>
  </Router>,
  document.getElementById('root')
);



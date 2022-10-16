import React from 'react';
import './App.css';
import MainFooter from './components/Footers/MainFooter';
import MainNavbar from './components/Navbars/MainNavbar';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'frontend/build')));

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      {/* <header className="App-header">
      </header> */}
      <MainFooter/>
    </div>
  );
}

export default App;

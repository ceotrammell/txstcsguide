import React from 'react';
import './App.css';
import MainFooter from './components/Footers/MainFooter';
import MainNavbar from './components/Navbars/MainNavbar';

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

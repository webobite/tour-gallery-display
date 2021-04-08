import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        <Body />
      </div>
      <footer className="App-footer">
        <Footer />
      </footer> */}
      <Login />
    </div>
  );
}

export default App;

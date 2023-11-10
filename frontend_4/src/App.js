import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
    <Hello nama={"Ilman"}/>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
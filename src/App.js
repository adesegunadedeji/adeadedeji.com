import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import styles from './App.module.css';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
    <div className= {styles.container}>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
   <footer>
     <hr></hr>
     <p>  Ade Adedeji |{'Copyright © '} |{new Date().getFullYear()}</p>
   </footer>
    </div>
    </Router>
  );
}

export default App;

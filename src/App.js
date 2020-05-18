import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import Certification from './components/Certification';
import Footer from './components/Footer';
import Problem from './components/Problem';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Project></Project>
        <Problem></Problem>
        <Certification></Certification>
        <Footer></Footer>
    </div>
  );
}

export default App;

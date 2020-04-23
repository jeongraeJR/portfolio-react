import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import Certification from './components/Certification';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Project></Project>
        <Certification></Certification>
    </div>
  );
}

export default App;

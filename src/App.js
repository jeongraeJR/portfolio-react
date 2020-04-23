import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Project></Project>
    </div>
  );
}

export default App;

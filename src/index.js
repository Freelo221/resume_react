import React from 'react';
import ReactDOM from 'react-dom/client';

import Intro from './components/intro/Intro'
import Profile from './components/profile/Profile';
import Experience from './components/experience/Experience';
import './index.css';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Tools from './components/tools/Tools';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Intro
      firstName="Jannis"
      lastName="Philipp"
      documentTitle="Resume"
      imageName="intro.jpg"
    />
    <Profile />
    <Experience />
    <Education />
    <Skills />
    <Tools />
    <Projects />
    <Footer />
  </React.StrictMode>
);



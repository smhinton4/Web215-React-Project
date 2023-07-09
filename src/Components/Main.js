import React from 'react';
import '../index.css';
import About from "./About.js";
import Projects from './Projects.js';
import Skills from './Skills.js';
import Experience from './Experience.js';


function Main(){
    return (
        <div>
<About />
<Projects />
<Skills />
<Experience />
        </div>
      );
}

export default Main;
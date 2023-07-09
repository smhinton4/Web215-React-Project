import React from "react";
import { skills } from "../data";
import "../index.css";

export default function Skills(){
    return(
        <section id="Skills">
            <h2>Skills:</h2>
            {skills.map((skill) => (
        <div key={skill.name}>
          
<p>
    <h4>{skill.name}</h4>
    <i class={skill.icon}></i>
    </p>

    </div>
            ))}
            
    </section>
    
);
            }
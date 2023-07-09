import React from "react";
import { projects } from "../data";
import "../index.css";


export default function Projects() {
    return (
      <section>
              <h2>
              Projects:
            </h2>

            <div id="Projects">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image} className="w-100 p-1">
                  <img
                    alt="gallery"
                    src={project.image}
                    className="img-fluid hover-shadow pb-2"
                  />

                  <h3>
                  {project.title}
                </h3>
                    <h4>
                      {project.subtitle}
                    </h4>
                
                    <p>{project.description}</p>
   </a>      
             ))}
</div>
      </section>
    );
  }
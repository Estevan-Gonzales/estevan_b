import React from 'react';
import '/Users/estevan/Desktop/estevan/src/assets/index.css'
import { Link } from 'react-router-dom';

function Project({ projects }) {

    const dataToPass = { name: 'John Doe', age: 25 };

    console.log(dataToPass);
    return (
        <div>
            {projects.map((project) => (

            <div className="project" key={project.id}>
                <Link to={project.id}>
                    <img className="darken" src={project.image_url}></img>
                    <div className="project-caption">{project.name}</div>
                </Link>
            </div>

        ))};
        </div>
    )
}

export default Project;
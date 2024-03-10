import React from 'react';
import { Link } from 'react-router-dom';

function Project({ projects }) {

    const dataToPass = { name: 'John Doe', age: 25 };

    console.log(dataToPass);
    return (
        <div className="container projects-grid">
            <div className="row">

            {projects.map((project) => (
                <div className="project col-12 col-md-6 mt-4" key={project.id}>
                    <Link to={project.id}>
                        <img className="darken" src={project.image_url}></img>
                        <div className="project-caption">{project.name}</div>
                    </Link>
                </div>

        ))};

            </div>

        </div>
    )
}

export default Project;
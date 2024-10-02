import React from 'react';
import { Link } from 'react-router-dom';

function Visualization({ vizs }) {

    return (
        <div className="container projects-grid">
            <div className="row">
                {vizs.map((viz) => (

                <div className="project col-12 col-md-6 mt-4" key={viz.id}>
                    <Link to={viz.url}>

                        <img className="darken" src={viz.image_url}></img>
                        <div className="project-caption">{viz.name}</div>
                    </Link>
                </div>

        ))}
            </div>
        </div>
    )
}

export default Visualization;
import React from 'react';
import { Link } from 'react-router-dom';

function Visualization({ vizs }) {

    const dataToPass = { name: 'John Doe', age: 25 };

    console.log(dataToPass);
    return (
        <div>
            {vizs.map((viz) => (

            <div className="project" key={viz.id}>
                <Link to={viz.url}>

                    <img className="darken" src={viz.image_url}></img>
                    <div className="project-caption">{viz.name}</div>
                </Link>
            </div>

        ))};
        </div>
    )
}

export default Visualization;
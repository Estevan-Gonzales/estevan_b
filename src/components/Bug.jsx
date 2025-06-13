import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/bugs.css'

function Bug({ bugs }) {

    return (
        <div>
            <div className="container projects-grid">
                <div className="row project-single">

                {bugs.map((bug) => (
                    <div className="col-12 col-md-3 mt-4" key={bug.id}>
                        <Link to={bug.id}>
                            <img className="bug" src={bug.image_url}></img>
                        </Link>
                        <div className="bug-name">{bug.description}</div>

                    </div>
                ))}
                </div>
            </div>
        </div>

    )
}

export default Bug;
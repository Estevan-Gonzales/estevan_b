import React from 'react';
import { Link } from 'react-router-dom';

function DataSet({ datasets }) {

    return (
        <div className="container projects-grid">
            <div className="row">
            {datasets.map((dataset) => (
                <div key={dataset.file}>
                    {dataset.file}
                </div>
            ))}
            </div>
        </div>
    )
}

export default DataSet;
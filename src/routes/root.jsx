import { Link } from 'react-router-dom';


export default function Root() {
  return (
    <div>
        <div className="container">
          <div className="row">
            <div className="col homepage-header">Estevan Gonzales</div>
          </div>
          <div className="row">
            <div className="col homepage-subline">Data Analyst & Software Developer</div>
          </div>
        </div>


      <div className="container">
        <div className="row full-width">
          <div className="col-12 col-md-6"></div>
          <div className="col-12 col-md-6 homepage-links">
            <div className="homepage-link">
              <Link to="/Projects">Projects</Link>
            </div>
            <div className="homepage-link">
              <Link to="/Visualizations">Visualizations</Link>
            </div>
            <div className="homepage-link">
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

import { Link } from 'react-router-dom';


export default function Root() {
  return (
    <div className="outside-main">

        <div className="homepage-header">Estevan Gonzales</div>
        <div className="homepage-subline">Data Analyst & Software Developer</div>


      <div className="homepage-double">
        <div></div>
        <div className="homepage-image">
        </div>

        <div className="homepage-links">
          <div className="homepage-link">
            <Link to="/Projects">Projects</Link>
          </div>
          <div className="homepage-link">
            <Link to="/Visualizations">Visualizations</Link>
          </div>
          <div className="homepage-link">
            <Link to="/DataSets">Data Sets</Link>
          </div>
          <div className="homepage-link">
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </div>

    </div>

  );
}

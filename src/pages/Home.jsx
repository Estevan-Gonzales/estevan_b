import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>

          <div className="row">
            <div className="col homepage-header">Estevan Gonzales</div>
          </div>
          <div className="row">
            <div className="col homepage-subline">Data Analyst & Software Developer</div>
          </div>

        <div className="half-space-div">


        </div>

      <div className="homepage-links-div">
        <div className="row full-width">

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

  );
}

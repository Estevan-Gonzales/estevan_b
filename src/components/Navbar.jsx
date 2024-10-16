import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
      <div>
      <div className="banner-top"></div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
        <div className="container-fluid">
          <a className="navbar-brand">
            <a aria-disabled="true">
              <div className="nav-logo">EG</div>
            </a>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
              <li>
                <a href="#" className="nav-link text-white homepage-link ">
                  <Link to="/Home">Home</Link>
                </a>
              </li>
                </a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <li>
                  <a href="#" className="nav-link text-white homepage-link">
                    <Link to="/Projects">Projects</Link>
                  </a>
                </li>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <li>
                  <a href="#" className="nav-link text-white homepage-link">
                    <Link to="/Visualizations">Visualizations</Link>
                  </a>
                </li>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
            <li>
                  <a href="#" className="nav-link text-white homepage-link">
                    <Link to="/Contact">Contact</Link>
                  </a>
                </li>
            </a>
          </li>

        </ul>
        <form role="search">
        </form>
      </div>
    </div>
  </nav>
  </div>
    )
}

export default Navbar;
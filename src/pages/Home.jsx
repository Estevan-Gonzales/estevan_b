import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      

      <header>

      <div class="banner-top"></div>

        <div class="px-3 py-2 text-bg-dark border-bottom">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
              </a>

              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                <a href="#" class="nav-link text-white homepage-link ">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg>
                    <Link to="/Home">Home</Link>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white homepage-link">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#speedometer2"></use></svg>
                    <Link to="/Projects">Projects</Link>
                  </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white homepage-link">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#table"></use></svg>
                    <Link to="/Visualizations">Visualizations</Link>
                  </a>
                </li>
                <li>
                <a href="#" class="nav-link text-white homepage-link">
                    <svg class="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#grid"></use></svg>
                    <Link to="/Contact">Contact</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="px-3 py-2 border-bottom mb-3"></div>
      </header>

    <div className='home'>
        <h1>Hello, my name is <strong>Estevan Gonzales</strong>.</h1>
        <h2>I am a business and data analayst who loves to create new things.</h2>
    </div>
    </div>


  );
}

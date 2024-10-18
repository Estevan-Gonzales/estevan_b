import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="hello-div">Hello!</div>


    <div className='home'>
        <h1>My name is <strong>Estevan Gonzales</strong>.</h1>

      <div className="me-div">
        <img src="images/avatar.jpg" style={{borderRadius: "50%", border: "solid black 3px", width: "250px"}}></img>
      </div>
        
        <h4>I'm a business/data analyst and programmer based in Austin, TX.</h4>
    </div>


    </div>


  );
}

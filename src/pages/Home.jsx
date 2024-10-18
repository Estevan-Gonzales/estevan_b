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
        <img src="public/images/avatar.jpg" style={{borderRadius: "50%", border: "solid black 5px", width: "300px"}}></img>
      </div>
        
        <h2>I'm a business/data analyst and programmer based in Austin, TX.</h2>
    </div>


    </div>


  );
}

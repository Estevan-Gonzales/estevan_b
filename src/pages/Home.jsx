import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="hello-div">Hello!</div>


    <div className='home'>
        <h1>My name is <strong>Estevan Gonzales</strong>.</h1>
        <h2>I am a business data analyst and programmer, and I love to create new things.</h2>
    </div>
    </div>


  );
}

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (

  <div className = 'outlet-out'>
    <div className='outlet-div'>
        <Outlet />
    </div>
  </div>
  );
}
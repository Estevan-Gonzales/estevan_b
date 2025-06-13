import Bug from '../components/Bug';
import '../assets/css/bugs.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Bugs() {

    let bugs = [

        {
            name: "Spider",
            id: "spider",
            image_url: "images/spider.jpeg",
            description: "Spider",
        },
        {
            name: "Dragonfly",
            id: "dragonfly",
            image_url: "images/bugs/dragonfly.jpeg",
            description: "Dragonfly",
        },

    ];
            
    return (

        <div>
            <Navbar />
            <div className = "container projects-container">
                <div className="pages-header">Bugs</div>
             <Bug bugs={bugs}/>
            </div>
        </div>

    );

};

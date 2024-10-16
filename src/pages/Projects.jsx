import Project from '../components/Project';
import '../assets/css/projects.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Projects() {

    let projects = [
        {
            name: "Cube",
            id: "cube",
            image_url: "/images/cube.png"
        },
        {
            name: "Monopoly",
            id: "monopoly",
            image_url: "/images/monopoly.png"
        },
        {
            name: "The Elements",
            id: "elements",
            image_url: "/images/elements.png",
        },
        {
            name: "Halfs",
            id: "halfs",
            image_url: "/images/halfs.png",

        },
        {
            name: "TypeHype",
            id: "typehype",
            image_url: "/images/typehype.png",
        }
    ];
            
    return (

        <div>
            <Navbar />
            <div className = "container projects-container">
                <div className="pages-header">Projects</div>
             <Project projects={projects}/>
            </div>
        </div>

    );

};

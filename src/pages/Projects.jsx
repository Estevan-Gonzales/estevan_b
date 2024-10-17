import Project from '../components/Project';
import '../assets/css/projects.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Projects() {

    let projects = [

        {
            name: "The Elements",
            id: "elements",
            image_url: "/images/elements.png",
            description: "Interactive periodic table of elements.",
            technologies: ["CSS/HTML", "Grid", "Bootstrap", "React"]
        },
        {
            name: "Cube",
            id: "cube",
            image_url: "/images/cube.png",
            description: "Interactive 2D representation of a standard Rubik's cube.",
            technologies: ["CSS/HTML", "Grid", "Bootstrap"]
        },
        {
            name: "Monopoly",
            id: "monopoly",
            image_url: "/images/monopoly.png",
            description: "Static recreation of a Monopoly board.",
            technologies: ["CSS/HTML", "Grid", "Bootstrap"]
        },

        {
            name: "Halfs",
            id: "halfs",
            image_url: "/images/halfs.png",
            description: "Click anywhere on the canvas to paint a colorful rectangle.",
            technologies: ["CSS/HTML", "Grid"]

        },
        {
            name: "TypeHype",
            id: "typehype",
            image_url: "/images/typehype.png",
            description: "Digital representation of a keyboard.",
            technologies: ["CSS/HTML", "Grid",]
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

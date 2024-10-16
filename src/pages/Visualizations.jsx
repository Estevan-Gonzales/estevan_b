import Visualization from '../components/Visualization';
import '../assets/css/projects.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Visualizations() {

    let vizs = [
        {
            name: "US Presidents",
            id: "presidents",
            url: "https://public.tableau.com/app/profile/estevan.gonzales8848/viz/USPresidents_17097719423380/Sheet1",
            image_url: "/images/presidents.png"
        },
        {
            name: "Historic Oscar Wins",
            id: "oscars",
            url: "https://public.tableau.com/app/profile/estevan.gonzales8848/viz/OscarWins/HistroicWins?publish=yes",
            image_url: "/images/oscars.png"
        }
    ];
            
    return (
            <div>
                <Navbar />
            <div className = "container projects-container">

                <div className="pages-header">Visualizations</div>
                <Visualization vizs={vizs}/>
            </div>

            </div>
    );

};
